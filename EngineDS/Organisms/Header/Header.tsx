import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import Image from "next/image";
import "./header.css";

export const Header = () => {
  return (
    <header className="t-dark">
      <div className="wrapper">
        <div className="container">
          <div className="main-nav-logo">
            <Anchor href={`/`}>
              <Image
                src="/media/logo-light.svg"
                width={195}
                height={45}
                alt="CJ White DEV"
                loading="eager"
              />
            </Anchor>
          </div>
          <div className="main-container">
            <button className="nav-controller">
              <span></span>
            </button>
            <div className="nav-container">
              <ul className="main-nav">
                <li>
                  <Anchor href={`/`}>portfolio</Anchor>
                </li>
                <li>
                  <Anchor href={`/`}>github</Anchor>
                </li>
                <li>
                  <Anchor href={`/`}>resume</Anchor>
                </li>
                <li>
                  <Anchor href={`/`}>contact</Anchor>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
