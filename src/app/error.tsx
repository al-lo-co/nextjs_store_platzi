"use client"

import styles from "app/sass/global-error.module.scss"
import Image from "next/image"

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1>ha ocurrido un error </h1>
      <Image
        src='/images/error.png'
        width={500}
        height={500}
        alt="Error"
      />
      <p className={styles.Error__message}>Al parecer ha ocurrido un error </p>
      <button className={styles.Error__button} onClick={reset}>volver a intentar</button>
    </main>
  )
}