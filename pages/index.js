import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Signup from "../components/signup/Signup";
import Navbar from "../components/Shared/Navbar";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Signup />
      </div>
    </div>
  );
}
