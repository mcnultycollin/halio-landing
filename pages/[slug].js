import Head from 'next/head';
import { getPage, listSlugs } from '../lib/markdown';

export async function getStaticPaths() {
  const slugs = listSlugs();
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const page = await getPage(params.slug);
  return { props: { page } };
}

export default function Page({ page }) {
  return (
    <>
      <Head>
        <title>{page.frontmatter.title || 'Page'}</title>
        <meta name="description" content={page.frontmatter.description || ''} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/favicon.svg" color="#22c55e" />
        <meta name="theme-color" content="#22c55e" />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
  );
}
