"use client";
import Image from "next/image";
import styles from "../styles/modificar.module.css";
import { FiCamera } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Modificar() {
  const router = useRouter();

  return (
    <div className={styles.modificar}>
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
        src="/mariobros.png"
        alt="Super Mario Odyssey"
        width={180}
        height={180}
        className={styles.juegoImagen}
      />

      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.input}
          defaultValue="Super Mario Odyssey"
        />

        <select className={styles.select}>
          <option>Nintendo Switch</option>
          <option>PlayStation 5</option>
          <option>Xbox Series X</option>
        </select>

        <select className={styles.select}>
          <option>Aventura</option>
          <option>Acción</option>
          <option>Plataformas</option>
        </select>

        <label className={styles.fileInputLabel}>
          Cambiar Portada
          <FiCamera className={styles.iconoCamaraDerecha} />
          <input type="file" className={styles.fileInput} />
        </label>

        <select className={styles.select}>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
        </select>

        <button className={styles.boton}>Modificar</button>
      </div>
    </div>
  );
}
