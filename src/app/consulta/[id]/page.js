'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '@/app/styles/consulta.module.css';
import axios from 'axios';

export default function Consultar({ params }) {
  const { id } = params;
  const router = useRouter();
  const [juego, setJuego] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/games/${id}`);
        setJuego(res.data);
      } catch (err) {
        console.error('Error al obtener el juego:', err);
        router.push('/not-found'); 
      }
    };

    if (id) fetchData();
  }, [id]);

  if (!juego) return <p>Cargando...</p>;

  return (
    <div className={styles.consulta}>
      <div className={styles.topBar}>
        <h1 className={styles.titulo}>
          <span className={styles.tituloParte1}>Consultar</span>{' '}
          <span className={styles.tituloParte2}>VideoJuego</span>
        </h1>
        <button
          className={styles.closeBtn}
          onClick={() => router.push('/dashboard')}
        >
          ✕
        </button>
      </div>

      <Image
        src={juego.cover}
        alt={juego.title}
        width={180}
        height={180}
        className={styles.juegoImagen}
      />

      <div className={styles.inputGroup}>
        <div className={styles.campo}>
          <div className={styles.label}>Título:</div>
          <div className={styles.valor}>{juego.title}</div>
        </div>
        <div className={styles.campo}>
          <div className={styles.label}>Consola:</div>
          <div className={styles.valor}>{juego.platform?.name}</div>
        </div>
        <div className={styles.campo}>
          <div className={styles.label}>Categoría:</div>
          <div className={styles.valor}>{juego.category?.name}</div>
        </div>
        <div className={styles.campo}>
          <div className={styles.label}>Año:</div>
          <div className={styles.valor}>{juego.year}</div>
        </div>
      </div>
    </div>
  );
}
