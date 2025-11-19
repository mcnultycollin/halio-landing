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
      </Head>
      <main dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
  );
}

