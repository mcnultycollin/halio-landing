import fs from "node:fs/promises";
import path from "node:path";
import Head from "next/head";
import Layout from "../components/Layout";
import { markdownToHtml } from "../lib/markdown";

export default function Privacy({ html }) {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export async function getStaticProps() {
  const contentPath = path.join(process.cwd(), "content", "privacy.md");
  let md = "# Privacy Policy\n\nAdd your privacy policy here.";
  try {
    md = await fs.readFile(contentPath, "utf8");
  } catch {}
  const html = await markdownToHtml(md);
  return { props: { html } };
}

