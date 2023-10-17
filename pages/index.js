import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Signup from "../components/signup/Signup";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <main className={styles.main}>
          <h1>Next Gpt Experiment</h1>
          <Signup />
        </main>
      </div>
    </div>
  );
}
