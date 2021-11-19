// import PropTypes from "prop-types";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="https://ton.org/" target="_blank">
            <Image src="/logoTon.svg" alt="Ton Logo" width={72} height={48}/>
          </a>
          <div className="d-flex flex-row order-2 order-lg-3 user_info">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navDefault" aria-controls="navDefault" aria-expanded="false" aria-label="Toggle navigation" id="toggleIcon">
              <span className="bar_one"></span>
              <span className="bar_two"></span>
              <span className="bar_three"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end order-3 order-lg-2" id="navDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <span className={router.pathname === '/' ? 'btn disabled' : 'nav-link'}>
                    Home
                    </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/create-pool">
                  <span className={router.pathname === '/create-pool' ? 'btn disabled' : 'nav-link'}>
                    Create Pool
                    </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/exchange-token">
                  <span className={router.pathname === '/exchange-token' ? 'btn disabled' : 'nav-link'}>
                    Exchange Token
                    </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/liquidity-from-pool">
                  <span className={router.pathname === '/liquidity-from-pool' ? 'btn disabled' : 'nav-link'}>
                    Liquidity from Pool
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pool-statistics">
                  <span className={router.pathname === '/pool-statistics' ? 'btn disabled' : 'nav-link'}>
                    Pool Statistics
                    </span>
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