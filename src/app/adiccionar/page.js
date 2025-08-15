"use client";

import { useEffect, useState } from "react";
import styles from "../styles/adiccionar.module.css";
import { FiCamera } from "react-icons/fi";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function FormAgregar() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    platform_id: "",
    category_id: "",
    year: "",
    version: "",
    cover: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [platforms, setPlatforms] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [platformsRes, categoriesRes] = await Promise.all([
          api.get("/platforms"),
          api.get("/categories"),
        ]);

        setPlatforms(platformsRes.data?.data || platformsRes.data || []);
        setCategories(categoriesRes.data?.data || categoriesRes.data || []);
      } catch (err) {
        console.error("Error al cargar plataformas o categorías", err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, cover: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.platform_id || !form.category_id || !form.year) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    const yearInt = parseInt(form.year);
    if (isNaN(yearInt)) {
      alert("El campo Año debe ser un número válido.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("platform_id", form.platform_id);
      formData.append("category_id", form.category_id);
      formData.append("year", yearInt); // ahora es Int
      formData.append("version", form.version || "");
      if (form.cover) formData.append("cover", form.cover);

      await api.post("/games", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Juego guardado correctamente.");
      router.push("/dashboard");
    } catch (err) {
      console.error("Error guardando juego:", err);
      alert("Error al guardar el juego.");
    }
  };

  return (
    <div className={styles.adiccionar}>
      <div className={styles.topBar}>
        <h1 className={styles.titulo}>
          <span className={styles.tituloParte1}>Adicionar</span>{" "}
          <span className={styles.tituloParte2}>VideoJuego</span>
        </h1>
        <button
          className={styles.closeBtn}
          onClick={() => router.push("/dashboard")}
        >
          ✕
        </button>
      </div>

      <img
        src={imagePreview || "/image.png"}
        alt="Preview"
        width={180}
        height={180}
        className={styles.juegoImagen}
      />

      <form className={styles.inputGroup} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <select
          name="platform_id"
          value={form.platform_id}
          onChange={handleChange}
          className={styles.select}
          required
        >
          <option value="" disabled hidden>
            Selecciona Consola...
          </option>
          {platforms.map((platform) => (
            <option key={platform.id} value={platform.id}>
              {platform.name}
            </option>
          ))}
        </select>

        <select
          name="category_id"
          value={form.category_id}
          onChange={handleChange}
          className={styles.select}
          required
        >
          <option value="" disabled hidden>
            Selecciona Categoría...
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="year"
          placeholder="Año"
          value={form.year}
          onChange={handleChange}
          className={styles.input}
          min="1970"
          max="2100"
          required
        />

        <input
          name="version"
          placeholder="Versión (opcional)"
          value={form.version}
          onChange={handleChange}
          className={styles.input}
          type="text"
        />

        <label htmlFor="cover" className={styles.fileInputLabel}>
          Subir Portada
          <FiCamera className={styles.iconoCamaraDerecha} />
          <input
            type="file"
            id="cover"
            name="cover"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.fileInput}
          />
        </label>

        <button type="submit" className={styles.boton}>
          Guardar
        </button>
      </form>
    </div>
  );
}
