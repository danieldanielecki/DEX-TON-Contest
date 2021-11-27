import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const [burgerVisible, toggleburgerVisible] = useState(false);
  const router = useRouter();

  function handleMenu(event: { preventDefault: Function }) {
    event.preventDefault();
    toggleburgerVisible(!burgerVisible);
  }

  return (
    <header>
      <nav
        className={`${styles.navbar} navbar navbar-expand-lg ${
          burgerVisible ? styles.open : ""
        }`}
      >
        <button
          className={
            burgerVisible ? styles.main_burger_focus : styles.main_burger
          }
          onClick={handleMenu}
        />
        <div className="container">
          <Link href="/">
            <a
              className={`navbar-brand ${
                burgerVisible ? styles.open_logo : ""
              }`}
            >
              <Image
                alt="The Open Network (TON)"
                height={64}
                src="/logo.svg"
                title="The Open Network (TON)"
                width={64}
              />
              <span>TON</span>
            </a>
          </Link>
          <div
            className={`collapse justify-content-end navbar-collapse ${
              burgerVisible ? "show" : ""
            }`}
            id="navDefault"
          >
            {/* TODO: This code repeats, make it for loop */}
            <ul className="navbar-nav">
              <Link href="/">
                <a
                  className={
                    router.pathname === "/"
                      ? `${styles.highlighted}`
                      : styles.nav_link
                  }
                >
                  Home
                </a>
              </Link>
              <Link href="/create-pool">
                <a
                  className={
                    router.pathname === "/create-pool"
                      ? `${styles.highlighted}`
                      : styles.nav_link
                  }
                >
                  Create Pool
                </a>
              </Link>
              <Link href="/exchange-token">
                <a
                  className={
                    router.pathname === "/exchange-token"
                      ? `${styles.highlighted}`
                      : styles.nav_link
                  }
                >
                  Exchange Token
                </a>
              </Link>
              <Link href="/liquidity-from-pool">
                <a
                  className={
                    router.pathname === "/liquidity-from-pool"
                      ? `${styles.highlighted}`
                      : styles.nav_link
                  }
                >
                  Liquidity from Pool
                </a>
              </Link>
              <Link href="/pool-statistics">
                <a
                  className={
                    router.pathname === "/pool-statistics"
                      ? `${styles.highlighted}`
                      : styles.nav_link
                  }
                >
                  Pool Statistics
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
