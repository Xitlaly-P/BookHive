import Head from "next/head";
import Header from "../components/Header/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>The Book Hive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

    </div>
  );
}
