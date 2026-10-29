import { Header } from "@/EngineDS/Organisms/Header/Header";
// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <Header
      links={[
        { id: "portfolio-header", children: "Portfolio", href: "/portfolio" },
        { id: "github-header", children: "GitHub", href: "/github" },
        { id: "resume-header", children: "Resume", href: "/resume" },
        { id: "contact-header", children: "Contact", href: "/contact" },
      ]}
    />
  );
}
