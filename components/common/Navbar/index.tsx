import Link from 'next/link';
import throttle from 'lodash.throttle';
import { useState, useEffect } from 'react';

import Logo from '@components/icons/Logo';
import GitHub from '@components/icons/Github';
import cx from 'clsx';

import s from './navbar.module.css';
import SwitchTheme from '@components/ui/Switch';

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;
      if (scrolled !== isScrolled) {
        setScrolled(scrolled);
      }
    }, 200);
    document.addEventListener('scroll', handleScrolled);
    return () => {
      document.removeEventListener('scroll', handleScrolled);
    };
  }, [isScrolled]);
  return (
    <nav
      className={cx(s.root, 'bg-white dark:bg-[#131415]', {
        [(s.scrollNavbar, 'shadow-magical dark:shadow-magical-dark')]:
          isScrolled,
      })}
    >
      <div className={s.container}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="flex items-center space-x-5 mt-5 md:mt-0">
          <SwitchTheme />
          <a
            href="https://github.com/markozxuu/markozxuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
