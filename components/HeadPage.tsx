import Head from "next/head";
import { useRouter } from "next/router";

const HeadPage = () => {
  function returnTitle() {
    const router = useRouter();
    const pageTitle = `router.pathname.replaceAll("-", " ").substring(1)`;
    if (pageTitle.length > 1) {
      return ` This is the ${pageTitle} page.`;
    }
    return "";
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
