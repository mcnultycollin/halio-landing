import fs from "node:fs/promises";
import path from "node:path";
import Head from "next/head";
import Layout from "../components/Layout";
import { markdownToHtml } from "../lib/markdown";

export default function Home({ html }) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export async function getStaticProps() {
  const contentPath = path.join(process.cwd(), "content", "index.md");
  let md = "# Welcome\n\nThis is the home page. Replace this with your existing content.";
  try {
    md = await fs.readFile(contentPath, "utf8");
  } catch {}
  const html = await markdownToHtml(md);
  return { props: { html } };
}

