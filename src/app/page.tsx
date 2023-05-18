import Image from "next/image";
import styles from "./page.module.css";
import ConverterForm from "@/components/ConverterForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <ConverterForm />
    </main>
  );
}
