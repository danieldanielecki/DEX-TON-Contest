import Head from "next/head";
import { useRouter } from "next/router";

const HeadPage = () => {
  function returnTitle() {
    return "Decentralized Exchange (DEX) of The Open Network (TON)";
  }

  return (
    <Head>
      <title>DEX of TON - {returnTitle()}</title>
      <meta
        name="description"
        content="Decentralized Exchange (DEX) of The Open Network (TON)"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadPage;
