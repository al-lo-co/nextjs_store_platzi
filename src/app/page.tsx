import Image from "next/image";
import styles from "./page.module.css";
import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";

export default function Home() {
  console.log("hola")
  return (
    <main className={styles.main}>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
