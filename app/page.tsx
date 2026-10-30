import { Header } from "@/EngineDS/Organisms/Header/Header";

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
