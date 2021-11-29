import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [burgerVisible, toggleburgerVisible] = useState(false);
  const router = useRouter();
  const [currenctPath, setCurrentPath] = useState(router.pathname);

  function handleMenu(event: { preventDefault: Function }) {
    event.preventDefault();
    toggleburgerVisible(!burgerVisible);
  }

  useEffect(() => {
    setCurrentPath(router.pathname);
    if (router.pathname !== currenctPath) {
      toggleburgerVisible(false);
    }
  });

  const routes = [
    {
      name: "Home",
      pathname: "/",
    },
    {
      name: "Create Pool",
      pathname: "/create-pool",
    },
    {
      name: "Exchange Token",
      pathname: "/exchange-token",
    },
    {
      name: "Liquidity from Pool",
      pathname: "/liquidity-from-pool",
    },
    {
      name: "Pool Statistics",
      pathname: "/pool-statistics",
    },
  ];

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
            <ul className="navbar-nav">
              {routes.map((route: { name: String; pathname: String }) => (
                // @ts-ignore
                <Link href={route.pathname} key={`link-to-${route.pathname}`}>
                  <a
                    className={
                      router.pathname === route.pathname
                        ? `${styles.highlighted}`
                        : styles.nav_link
                    }
                  >
                    {route.name}
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
