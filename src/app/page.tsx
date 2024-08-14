import Image from "next/image";
import styles from "./page.module.css";
import { MainProducts } from "app/components/home/MainProducts";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainProducts />
    </main>
  );
}
