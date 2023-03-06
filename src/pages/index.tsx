import styles from "../styles/Home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>new next app</title>
      </Head>
      <main>
        <h1 className={styles.title}>Welcome to new next app!</h1>
      </main>
    </>
  );
}
