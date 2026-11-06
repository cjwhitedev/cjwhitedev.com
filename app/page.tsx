import type { Metadata } from "next";
import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import { Button } from "@/EngineDS/Atoms/Button/Button";
import { CodeBlock } from "@/EngineDS/Atoms/CodeBlock/CodeBlock";
import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";
import { Card } from "@/EngineDS/Molecules/Card/Card";
import { Footer } from "@/EngineDS/Organisms/Footer/Footer";
import { Header } from "@/EngineDS/Organisms/Header/Header";

const TITLE = "CJ White | Principal Frontend Developer";
const DESCRIPTION =
  "Principal-level front-end developer with 10+ years of experience building accessible, component-driven websites.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
    images: [{ url: "/media/placeholder.jpg", alt: "CJ White" }],
  },
};

const STORYBOOK = "https://storybook.cjwhitedev.com";
const BOLT = "https://boltds.pega.com";
const RESUME = "/media/CWhite_Resume.pdf";
const EMAIL = "mailto:hello@cjwhitedev.com";
const GITHUB = "https://github.com/cjwhitedev";
const LINKEDIN = "https://www.linkedin.com/in/cjwhitedev/";

const shareSources = [
  { name: "github", href: GITHUB },
  { name: "linkedin", href: LINKEDIN },
  { name: "email", href: EMAIL },
] as const;

const links = (suffix: string) => [
  { id: `resume-${suffix}`, children: "Resume", href: RESUME },
  { id: `storybook-${suffix}`, children: "Storybook", href: STORYBOOK },
  { id: `github-${suffix}`, children: "GitHub", href: GITHUB },
  { id: `linkedin-${suffix}`, children: "LinkedIn", href: LINKEDIN },
];

const footerExample = `<Footer
  title="CJ White"
  links={links}
  share={{ sources: shareSources }}
  copyright="CJ White"
/>`;

const decisions = [
  {
    title: "A flat design language",
    text: 'Solid colors and thick strokes. The primary descriptors I would use are "bold" and "chunky".',
  },
  {
    title: "Docs generated from the CSS",
    text: "The Foundations pages read the tokens live from the stylesheets, so the documentation cannot drift from the code.",
  },
  {
    title: "An accessibility gate",
    text: "The axe addon runs on every story and fails the build on any violation, so an inaccessible component cannot ship.",
  },
  {
    title: "A theme system",
    text: "Several theme options, plus a contrast theme that picks the dark theme furthest from its surroundings. Dark mode follows the visitor's system setting.",
  },
];

const Home = () => {
  return (
    <>
      <Header links={links("header")} />
      <main>
        <Layout theme="light" padding="large" paddingBottom="none">
          <LayoutItem>
            <h1 style={{ marginBottom: "0" }}>CJ White</h1>
            <h2>Principal Frontend Developer</h2>
            <h6 style={{ marginBottom: "1rem" }}>
              Open to principal-level roles, remote or hybrid in the greater
              Boston area.
            </h6>
          </LayoutItem>
        </Layout>

        <Layout
          theme="light"
          layout="halves-from-small"
          gap="large"
          padding="large"
          paddingTop="none"
        >
          <LayoutItem>
            <p>
              Principal-level front-end developer with 15+ years of experience
              building accessible, component-driven websites. Spent six years on
              the design system behind pega.com, owning its documentation across
              Twig and React versions, reviewing contributions from teams across
              the company, and holding components to WCAG AA/AAA.
            </p>
            <Button label="Download my resume" href={RESUME} />
          </LayoutItem>
          <LayoutItem>
            <p>
              The design system behind this page is a case study of its own.
              EngineDS has documented foundations and components, five themes,
              and accessibility checks that fail the build on any violation.
              Explore it in Storybook, then read the case study below.
            </p>
            <Button
              hierarchy="tertiary"
              label="Open Storybook"
              href={STORYBOOK}
            />
          </LayoutItem>
        </Layout>

        <Layout layout="halves-from-small" gap="large" padding="large">
          <LayoutItem>
            <h2>Selected work: Bolt Design System</h2>
            <p>
              Bolt is the design system behind pega.com. I owned most of the
              documentation for its roughly 64 components, in both the Twig and
              React versions, and set the standards other contributors followed.
            </p>
            <Button label="Visit Bolt" href={BOLT} />
          </LayoutItem>
          <LayoutItem>
            <h3>My role</h3>
            <ul>
              <li>
                Owned the documentation, which back-end developers, the primary
                users, credited with improving their workflow.
              </li>
              <li>
                Reviewed pull requests against the system&apos;s accessibility,
                documentation and code standards.
              </li>
              <li>
                Helped move the system from Twig and Web Components to React.
              </li>
            </ul>
          </LayoutItem>
        </Layout>

        <Layout
          theme="light"
          layout="halves-from-small"
          gap="large"
          padding="large"
          paddingBottom="none"
        >
          <LayoutItem>
            <h2>Case study: EngineDS</h2>
            <p>
              EngineDS is the design system behind this page, and is a portfolio
              pieces of its own.
            </p>
            <p>
              Its documentation follows what I learned on Bolt. Each page opens
              with a short description and controls.
            </p>
            <Button label="Visit Storybook" href={STORYBOOK} />
          </LayoutItem>
          <LayoutItem>
            <h3>How it is built</h3>
            <ul>
              <li>Next.js, React and TypeScript, documented in Storybook.</li>
              <li>
                Design tokens for color, type, spacing, shape and motion in
                plain CSS, using native nesting and cascade layers.
              </li>
              <li>
                Story tests with Vitest and Playwright, plus ESLint, Stylelint
                and Prettier on every commit.
              </li>
            </ul>
          </LayoutItem>
        </Layout>

        <Layout theme="light" padding="large" paddingBottom="none">
          <LayoutItem>
            <h3>Design decisions</h3>
          </LayoutItem>
        </Layout>

        <Layout
          theme="light"
          layout="halves-from-small"
          gap="large"
          padding="large"
          paddingTop="none"
        >
          {decisions.map(({ title, text }) => (
            <LayoutItem key={title}>
              <h4>{title}</h4>
              <p>{text}</p>
            </LayoutItem>
          ))}
        </Layout>
      </main>
      <Footer
        title="CJ White"
        links={links("footer")}
        share={{ text: "Connect with me", sources: [...shareSources] }}
        copyright="CJ White"
      >
        <p>
          <Anchor href={EMAIL}>hello@cjwhitedev.com</Anchor>
        </p>
      </Footer>
    </>
  );
};

export default Home;
