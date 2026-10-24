import { Header } from "@/EngineDS/Organisms/Header/Header";
// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <Header
      links={[
        { label: "Portfolio", href: "/portfolio" },
        { label: "GitHub", href: "/github" },
        { label: "Resume", href: "/resume" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
