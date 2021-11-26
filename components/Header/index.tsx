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
      <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
        <button
          onClick={handleMenu}
          className={
            burgerVisible ? styles.main_burger_focus : styles.main_burger
          }
        />
        <div className="container">
          <a className="navbar-brand" href="https://ton.org/" target="_blank">
            <Image
              src="/ton/darkBgTon.svg"
              alt="Ton Logo"
              width={200}
              height={50}
            />
          </a>

          <div
            className={`collapse navbar-collapse justify-content-end order-3 order-lg-2 ${
              burgerVisible ? "collapse show" : ""
            }`}
            id="navDefault"
          >
            <ul className="navbar-nav">
              <li className={`nav-item ${burgerVisible ? "dropdown" : ""}`}>
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
              </li>
              <li className="nav-item">
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
              </li>
              <li className="nav-item">
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
              </li>
              <li className="nav-item">
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
              </li>
              <li className="nav-item">
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
