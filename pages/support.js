import fs from "node:fs/promises";
import path from "node:path";
import Head from "next/head";
import Layout from "../components/Layout";
import { markdownToHtml } from "../lib/markdown";

export default function Support({ html }) {
  return (
    <Layout>
      <Head>
        <title>Support</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export async function getStaticProps() {
  const contentPath = path.join(process.cwd(), "content", "support.md");
  let md = "# Support\n\nTell users how to reach support here.";
  try {
    md = await fs.readFile(contentPath, "utf8");
  } catch {}
  const html = await markdownToHtml(md);
  return { props: { html } };
}

