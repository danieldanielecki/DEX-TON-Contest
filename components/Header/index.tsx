import styles from "./styles.module.scss";
import useLocalStorageState from "../../hooks/useLocalStorageState";
import Image from "next/image";
import Link from "next/link";
import ToggleOnOffSwitch from "../ToggleOnOffSwitch";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [burgerVisible, toggleburgerVisible] = useState(false);
  const [currenctPath, setCurrentPath] = useState(router.pathname);
  const [isDark, setIsDark] = useLocalStorageState(false, "isDark");

  const handleMenu = (event: { preventDefault: Function }) => {
    event.preventDefault();
    toggleburgerVisible(!burgerVisible);
  };

  const onToggleTheme = (checked: boolean) => {
    // @ts-ignore
    setIsDark(checked);
  };

  useEffect(() => {
    setCurrentPath(router.pathname);
    if (router.pathname !== currenctPath) {
      toggleburgerVisible(false);
    }
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const isDarkChosen: string | null = localStorage.getItem("isDark");
    const prefersDark: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // TODO: Almost working 100% with choice & system preference, but missing case when localStorage is empty. It just doesn't want to be empty in the isDarkChosen for some reason.
    if (
      (isDarkChosen === "false" && prefersDark) ||
      (isDarkChosen === "false" && !prefersDark)
    ) {
      // @ts-ignore
      setIsDark(false);
    } else {
      // @ts-ignore
      setIsDark(true);
    }
  }, []);

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
        className={`${styles.navbar} ${
          burgerVisible
            ? styles.open
            : `${styles.navbar} navbar navbar-expand-lg`
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
              <ToggleOnOffSwitch
                checked={!!isDark}
                id="toggle_theme"
                onClick={onToggleTheme}
                optionLabels={["🌙", "🔆"]}
              />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
