// import PropTypes from "prop-types";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

const Header = () => {
  const [burgerVisible, toggleburgerVisible] = useState(false);
  const router = useRouter();
 

  function handleMenu (event: { preventDefault: Function}) {
    event.preventDefault();
    toggleburgerVisible(!burgerVisible)
  }

  return (
    <header>
      <nav className={`${styles.navbar} navbar fixed-top navbar-expand-lg`}>
        <button
          onClick={handleMenu}
          className={burgerVisible ? styles.main_burger_focus : styles.main_burger}
        />
        <div className="container">
          <a className="navbar-brand" href="https://ton.org/" target="_blank" rel="noreferrer">
            <Image src="/ton/darkBgTon.svg" alt="Ton Logo" width={200} height={50} />
          </a>
          {/* <div className="d-flex flex-row order-2 order-lg-3 user_info">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navDefault" aria-controls="navDefault" aria-expanded="false" aria-label="Toggle navigation" id="toggleIcon">
              <span className="bar_one"></span>
              <span className="bar_two"></span>
              <span className="bar_three"></span>
            </button>
          </div> */}
          {/* <div className="switch_wrapper">
            <span> Theme </span>
            <button className="btn switcher" id="light" title="Switch to Light Theme">
              <i className="fas fa-star-and-crescent"></i>
              light
            </button>
            <button className="btn switcher actives" id="dark" title="Switch to Dark Theme">
              <i className="fas fa-adjust"></i>
              dark
            </button>
          </div> */}
          <div className={`collapse navbar-collapse justify-content-end order-3 order-lg-2 ${burgerVisible ? 'collapse show' : ''}`}
            id="navDefault">
            <ul className='navbar-nav'>
              <li className={`nav-item ${burgerVisible ? 'dropdown' : ''}`} >
                <Link href="/">
                  <a className={router.pathname === '/' ? `btn disabled ${styles.highlighted}` : styles.nav_link}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/create-pool">
                  <a className={router.pathname === '/create-pool' ? `btn disabled ${styles.highlighted}` : styles.nav_link}>
                    Create Pool
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/exchange-token">
                  <a className={router.pathname === '/exchange-token' ? `btn disabled ${styles.highlighted}` : styles.nav_link}>
                    Exchange Token
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/liquidity-from-pool">
                  <a className={router.pathname === '/liquidity-from-pool' ? `btn disabled ${styles.highlighted}` : styles.nav_link}>
                    Liquidity from Pool
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pool-statistics">
                  <a className={router.pathname === '/pool-statistics' ? `btn disabled ${styles.highlighted}` : styles.nav_link}>
                    Pool Statistics
                  </a>
                </Link>
              </li>
              {/* <li className="nav-item d-block d-sm-none">
                <a className="nav-link registration" href="login.html">LOG IN</a>
              </li>
              <li className="nav-item d-block d-sm-none">
                <a className="nav-link registration" href="signup.html">SIGN UP</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;