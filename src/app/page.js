"use client";
import styles from "../app/styles/login.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
  return (
    <div className={styles.login}>
      <h1 className={styles.titulo}>
        <span className={styles.ninten}>ninten</span>
        <span className={styles.games}>games</span>
      </h1>
      <img src="/Mario.png" className={styles.img} alt="Mario" />
      <input
        className={styles.email}
        placeholder="Correo Electrónico"
        type="email"
      />
      <input
        className={styles.password}
        placeholder="Contraseña"
        type="password"
      />
      <button className={styles.boton} onClick={() => router.push("/dashboard")}>Ingresar</button>
    </div>
  );
}
