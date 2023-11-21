import Card from '@/components/Cards/index.js';
import Navbar from '@/components/Navbar/index.js';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <div className={styles.center}>
          <h1 className={styles.title}>
            Welcome to Tournament of tennis
          </h1>
        </div>
        <Card />
      </main>
    </div>
  )
};

export default Home;
