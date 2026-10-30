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

const caseStudyCards = [
  {
    title: "Foundations",
    text: "Color, type, spacing, shape, motion and breakpoints, documented straight from the CSS that defines them.",
    href: `${STORYBOOK}/?path=/docs/engine-ds-foundations-colors--docs`,
    linkLabel: "View the Foundations docs in Storybook",
  },
  {
    title: "Components",
    text: "Atoms, molecules and organisms built on one Layout, with themes that any container can pass down.",
    href: `${STORYBOOK}/?path=/docs/engine-ds-atoms-layout--docs`,
    linkLabel: "View the Layout docs in Storybook",
  },
  {
    title: "Documentation",
    text: "Each component is documented in the style of the Bolt Design System: a short description, controls, numbered notes and variants.",
    href: `${STORYBOOK}/?path=/docs/engine-ds-organisms-footer--docs`,
    linkLabel: "View the Footer docs in Storybook",
  },
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
    text: "Solid colors, a 3px stroke and a single radius. There are no gradients or shadows anywhere in the system.",
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
    text: "White, light, dark, dark-alt and dark-plum themes, plus a contrast theme that picks the dark theme furthest from its surroundings. Dark mode follows the visitor's system setting.",
  },
];

const roles = [
  {
    title: "Principal Web Developer, Front End",
    place: "Pegasystems | Remote | 2020–2026",
    note: "Promoted from Senior Web Developer, Front End, in the fall of 2025.",
    points: [
      "Built and maintained the design system behind pega.com and several related Pega-branded sites, working with about two dozen colleagues across teams and roles.",
      "Owned documentation for a roughly 64-component design system in both its Twig and React versions, writing most of it and setting the standards others followed. Back-end developers, the primary users, credited it with improving their workflow.",
      "Reviewed pull requests, holding contributions to the system's accessibility, documentation and code standards.",
      "Led front-end development on a full-scale rebrand of a customer-facing website with a small team on a tight turnaround, working directly with the creative team and flagging colors and type that fell short of WCAG.",
      "Helped move the system from Twig and Web Components to React, relieving tech debt and aligning its stack with the back-end team's workflow. Also built the front-end chat interface for an AI learning agent on Pega Academy in React.",
      "Worked within the company's AI-assisted development standard to draft documentation and build page-level frames, reviewing all output and consolidating repetition into reusable patterns.",
    ],
  },
  {
    title: "Lead UX Engineer",
    place: "Imarc | Amesbury, MA | 2018–2020",
    points: [
      "Led development of new sites and maintained existing ones, building flexible Craft CMS tools that gave clients control over their content while keeping functionality reusable.",
      'Improved Imarc\'s Webpack and component-based project launchpad, "Boilerplate."',
    ],
  },
  {
    title: "UI Developer",
    place: "Genuine | Boston, MA | 2016–2018",
    points: [
      "Built responsive, component-driven layouts for multiple CMSs, primarily Drupal, and refactored legacy code to streamline work for junior developers.",
      "Helped the core team define accessibility and performance best practices.",
    ],
  },
  {
    title: "Jr. Developer",
    place: "Axion Media Lab | Pawtucket, RI | 2015–2016",
    points: [
      "Built custom responsive WordPress themes and tested HTML email templates across email clients.",
    ],
  },
];

const skills = [
  {
    title: "Development",
    text: "React, TypeScript, Next.js, JavaScript (ESNext), HTML5, CSS Preprocessors, Web Components, Twig, Templating, CMS (Craft, Drupal, WordPress)",
  },
  {
    title: "Design Systems & Process",
    text: "Component Libraries, Documentation, Code Review, Accessibility (WCAG AA/AAA), Performance, Agile, Version Control",
  },
  {
    title: "Tools & Workflow",
    text: "Webpack, NPM / Yarn, Jest, VS Code, GitHub Copilot",
  },
];

const Home = () => {
  return (
    <>
      <Header links={links("header")} />
      <main>
        <Layout padding="large">
          <LayoutItem>
            <h1>CJ White</h1>
            <h2>Principal Frontend Developer</h2>
            <p>
              Open to principal-level roles, remote or hybrid in the greater
              Boston area.
            </p>
          </LayoutItem>
        </Layout>

        <Layout layout="halves-from-small" gap="large" padding="large">
          <LayoutItem>
            <p>
              Principal-level front-end developer with 10+ years of experience
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

        <Layout
          theme="light"
          layout="halves-from-small"
          gap="large"
          padding="large"
        >
          <LayoutItem>
            <h2>Selected work: Bolt Design System</h2>
            <p>
              Bolt is the public documentation for the design system behind
              pega.com. I wrote most of the documentation for its roughly 64
              components, in both the Twig and React versions, and set the
              standards other contributors followed.
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
          theme="dark"
          layout="halves-from-small"
          gap="large"
          padding="large"
        >
          <LayoutItem>
            <h2>Case study: EngineDS</h2>
            <p>
              EngineDS is the design system behind this page. I built it as a
              project that demonstrates what I know, and the second benefit is
              that I use it to build this page.
            </p>
            <p>
              Its documentation follows what I learned on Bolt. Each page opens
              with a short description and controls, then numbered notes and
              variants for anyone using the component.
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
            <h3>What is next</h3>
            <p>
              Form controls, an error color, disclosure, overlays, navigation
              and content and table components.
            </p>
          </LayoutItem>
        </Layout>

        <Layout theme="dark" padding="small">
          <LayoutItem>
            <h3>Design decisions</h3>
          </LayoutItem>
        </Layout>

        <Layout
          theme="dark"
          layout="halves-from-small"
          gap="large"
          padding="large"
        >
          {decisions.map(({ title, text }) => (
            <LayoutItem key={title}>
              <h4>{title}</h4>
              <p>{text}</p>
            </LayoutItem>
          ))}
        </Layout>

        <Layout
          theme="light"
          layout="halves-from-small"
          gap="large"
          padding="large"
        >
          <LayoutItem>
            <h3>Using a component</h3>
            <p>
              The Footer at the bottom of this page is built from this
              description, with the Share component inside it.
            </p>
          </LayoutItem>
          <LayoutItem>
            <CodeBlock code={footerExample} />
          </LayoutItem>
        </Layout>

        <Layout
          theme="dark"
          layout="thirds-from-small"
          gap="large"
          padding="large"
        >
          {caseStudyCards.map(({ title, text, href, linkLabel }) => (
            <LayoutItem key={title}>
              <Card
                teasersrc="/media/placeholder.jpg"
                teaseralt=""
                href={href}
                linkLabel={linkLabel}
              >
                <h3>{title}</h3>
                <p>{text}</p>
              </Card>
            </LayoutItem>
          ))}
        </Layout>

        <Layout padding="large">
          <LayoutItem>
            <h2>Experience</h2>
          </LayoutItem>
          {roles.map(({ title, place, note, points }) => (
            <LayoutItem key={title}>
              <h3>{title}</h3>
              <p>
                {place}
                {note && <> | {note}</>}
              </p>
              <ul>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </LayoutItem>
          ))}
        </Layout>

        <Layout
          theme="light"
          layout="thirds-from-small"
          gap="large"
          padding="large"
        >
          {skills.map(({ title, text }) => (
            <LayoutItem key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </LayoutItem>
          ))}
        </Layout>

        <Layout padding="large">
          <LayoutItem>
            <h2>Education</h2>
            <p>
              Salem State University, Salem, MA | 2010–2015. Bachelor of Arts,
              concentrations in Interactive Multimedia and Graphic Design; Minor
              in Computer Science.
            </p>
          </LayoutItem>
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
