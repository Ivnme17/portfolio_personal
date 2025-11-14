import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirigir inmediatamente al inicio
    window.location.replace("https://portfolio-profesional-ivan-martinez.vercel.app");
  }, []);

  return (
    <>
      <Head>
        <title>Redireccionando a mi portafolio</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="refresh" content="0;url=https://portfolio-profesional-ivan-martinez.vercel.app" />
      </Head>
      <div style={styles.container}>
        <h1>Redirigiendo a mi portafolio...</h1>
        <p>Si no eres redirigido automáticamente, haz clic en el siguiente enlace:</p>
        <a href="https://portfolio-profesional-ivan-martinez.vercel.app" style={styles.link}>
          Ir a mi portafolio profesional
        </a>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
    marginTop: '20px',
    padding: '10px 20px',
    border: '1px solid #0070f3',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  },
};

export default Custom404;
