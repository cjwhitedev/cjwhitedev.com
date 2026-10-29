import { Header } from "@/EngineDS/Organisms/Header/Header";
// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <Header
      links={[
        { children: "Portfolio", href: "/portfolio" },
        { children: "GitHub", href: "/github" },
        { children: "Resume", href: "/resume" },
        { children: "Contact", href: "/contact" },
      ]}
    />
  );
}
