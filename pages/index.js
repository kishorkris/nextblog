import ArticleList from "../components/ArticleList";
import Head from "next/head";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Nextblog</title>
      </Head>
    
      <ArticleList articles={articles}></ArticleList>
    </>
  );
}

/*ssr,fetch data and pass it as prop before rendering.hence the source html will have complete content */
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
