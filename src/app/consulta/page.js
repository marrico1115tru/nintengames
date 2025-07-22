"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../styles/consulta.module.css";

export default function Consultar() {
  const router = useRouter();

  return (
    <div className={styles.consulta}>
      <div className={styles.topBar}>
        <h1 className={styles.titulo}>Consultar VideoJuego</h1>
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
        <div className={styles.campo}>
          <div className={styles.label}>Título:</div>
          <div className={styles.valor}>Super Mario Oddysey</div>
        </div>
        <div className={styles.campo}>
          <div className={styles.label}>Consola:</div>
          <div className={styles.valor}>Nintendo Switch</div>
        </div>
        <div className={styles.campo}>
          <div className={styles.label}>Categoría:</div>
          <div className={styles.valor}>Aventura</div>
        </div>
        <div className={styles.campo}>
          <div className={styles.label}>Año:</div>
          <div className={styles.valor}>2017</div>
        </div>
      </div>
    </div>
  );
}
