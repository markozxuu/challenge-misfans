import Link from 'next/link';
import throttle from 'lodash.throttle';
import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';

import Logo from '@components/icons/Logo';
import cx from 'clsx';

import s from './navbar.module.css';
import SwitchTheme from '@components/ui/Switch';

import { createUser } from '@utils/api';
import PopoverUser from '@components/ui/PopoverUser';
import { KEY_CAHE } from '@utils/const';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY_CAHE)) {
      if (session) {
        createUser(session?.user);
      }
    }

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
  }, [isScrolled, session]);
  if (status === 'loading') return null;
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
          {session ? (
            <div>
              <PopoverUser profileImage={session?.user?.image} />
            </div>
          ) : (
            <button
              onClick={() => signIn('github')}
              className="bg-black dark:bg-white py-1 px-4 rounded-md text-white dark:text-black text-center"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
