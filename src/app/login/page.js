'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import styles from "@/app/styles/login.module.css";
import api from "@/lib/api";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Por favor ingresa correo y contraseña");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });
      const token = response.data.token;

      if (isClient) {
        Cookies.set("token", token, {
          expires: 1,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });
      }

      await Promise.all([api.get("/games"), api.get("/platforms")]);

      router.push("/dashboard");
    } catch (err) {
      console.error("Error en login:", err);

      if (err.response) {
        setError(err.response.data?.error || "Usuario no encontrado");
      } else if (err.request) {
        setError("No se pudo conectar con el servidor");
      } else {
        setError("Error inesperado");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) return null;

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className={styles.password}
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className={styles.error}>{error}</p>}

      <button className={styles.boton} onClick={handleLogin} disabled={loading}>
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
    </div>
  );
}
