import styles from "../styles/Home.module.scss";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className="text-center mt-5">
        Frontend of DEX with liquidity pools, Stage 1
      </h1>
      <section className="p-5">
        <h2 className="text-center">Task</h2>
        <hr className="text-center w-25 mx-auto" />
        <h3 className="text-center">
          Create a frontend of DEX with liquidity pools for TON Blockchain
        </h3>
        <h5 className="mb-3 mt-5 text-center">Requirements</h5>
        <ol>
          <li>
            <q>
              <i>
                In this stage, you need to create a working UI. Asynchronous
                calls to smart contracts must be mocked-up.
              </i>
            </q>
          </li>
          <li>
            <q>
              <i>
                We require a UI for exchanging one token for another token, a UI
                for creating a pool with two tokens, a UI for adding and
                removing liquidity from a pool, a UI with a list of pools and
                pool statistics.
              </i>
            </q>
          </li>
          <li>
            <q>
              <i>You can explore services like Uniswap and Pancake.</i>
            </q>
          </li>
          <li>
            <q>
              <i>You must use the Typescript+React+Redux stack.</i>
            </q>
          </li>
          <li>
            <q>
              <i>Extra dependencies and extra code are not welcome.</i>
            </q>
          </li>
          <li>
            <q>
              <i>
                You can't use the idea of just copying the entire open-source
                Uniswap code - there is a lot of unnecessary code there.
              </i>
            </q>
          </li>
          <li>
            <q>
              <i>
                When considering the design options, you can focus on the
                ton.org site, UI of standard wallets and bridge. You may find
                the brand assets page helpful.
              </i>
            </q>
          </li>
          <li>
            <q>
              <i>
                We deliberately did not give ready-made references so that you
                have the opportunity to rethink some things in using such
                services.
              </i>
            </q>
          </li>
          <li>
            <q>
              <i>
                Evaluation priorities: understandability of the code and the
                possibility of its further support, general correctness and
                speed of the application and attention to detail.
              </i>
            </q>
          </li>
        </ol>
        <hr className="text-center w-25 mx-auto mt-5" />
        <h5 className="text-center">
          The 4 pages in the header have the following requirements implemented;
          please navigate through them to see the mock pages. For technical
          details please check our <br />
          <a
            href="https://github.com/danieldanielecki/DEX-TON-Contest"
            rel="noreferrer noopener"
            target="_blank"
            title="GitHub Repository"
          >
            GitHub Repository
          </a>
        </h5>
      </section>
    </main>
  );
};

export default Home;
