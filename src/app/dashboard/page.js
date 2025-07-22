"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "../styles/dashboard.module.css";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.topBar}>
        <h1 className={styles.titulo}>Administrar videoJuegos</h1>
        <button className={styles.closeBtn}>✕</button>
      </div>

      <button
        className={styles.addBtn}
        onClick={() => router.push("/adiccionar")}
      >
        + Adicionar
      </button>

      <div className={styles.juegoLista}>
        <div className={styles.juegoItem}>
          <Image
            src="/mariobros.png"
            alt="Super Mario Odyssey"
            width={80}
            height={80}
            className={styles.juegoImagen}
          />

          <div className={styles.juegoTexto}>
            <span className={styles.plataforma}>Nintendo Switch</span>
            <span className={styles.nombreJuego}>Mario Bros</span>
          </div>
          <div className={styles.acciones}>
            <button
              className={`${styles.iconButton} ${styles.ver}`}
              onClick={() => router.push("/consulta")}
            >
              <Image src="/busqueda.png" alt="Ver" width={16} height={16} />
            </button>

            <button
              className={`${styles.iconButton} ${styles.editar}`}
              onClick={() => router.push("/modificar")}
            >
              <Image src="/pencil.png" alt="Editar" width={16} height={16} />
            </button>

            <button className={styles.eliminar}>
              <Image src="/delete.png" alt="Eliminar" width={25} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
