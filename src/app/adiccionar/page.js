"use client";
import Image from "next/image";
import styles from "../styles/adiccionar.module.css";
import { FiCamera } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Consultar() {
  const router = useRouter();

  return (
    <div className={styles.adiccionar}>
      <div className={styles.topBar}>
        <h1 className={styles.titulo}>
          <span className={styles.tituloParte1}>Modificar</span>{" "}
          <span className={styles.tituloParte2}>VideoJuego</span>
        </h1>
        <button
          className={styles.closeBtn}
          onClick={() => router.push("/dashboard")}
        >
          ✕
        </button>
      </div>

      <Image
        src="/image.png"
        alt="Super Mario Odyssey"
        width={180}
        height={180}
        className={styles.juegoImagen}
      />

      <div className={styles.inputGroup}>
        <input type="text" className={styles.input} defaultValue="Titulo" />

        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Seleccione Consola
          </option>
          <option>Nintendo Switch</option>
          <option>PlayStation 5</option>
          <option>Xbox Series X</option>
        </select>

        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Seleccione Categoría
          </option>
          <option>Aventura</option>
          <option>Acción</option>
          <option>Plataformas</option>
        </select>

        <label className={styles.fileInputLabel}>
          Subir Portada
          <FiCamera className={styles.iconoCamaraDerecha} />
          <input type="file" className={styles.fileInput} />
        </label>

        <div className={styles.inputGroup}>
          <input type="text" className={styles.input} defaultValue="Año" />

          <button className={styles.boton}>Guardar</button>
        </div>
      </div>
    </div>
  );
}
