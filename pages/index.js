import Head from 'next/head';
import { getPage } from '../lib/markdown';

export async function getStaticProps() {
  const page = await getPage('index');
  return { props: { page } };
}

export default function Home({ page }) {
  return (
    <>
      <Head>
        <title>{page.frontmatter.title || 'Home'}</title>
        <meta name="description" content={page.frontmatter.description || 'Home'} />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
  );
}

