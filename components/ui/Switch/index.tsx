import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';

import Moon from '@components/icons/Moon';
import Sun from '@components/icons/Sun';

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState<boolean>(false);
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (theme === 'dark') {
      setEnabled(true);
    }
    if (theme === 'light') {
      setEnabled(false);
    }
    setMounted(true);
  }, [theme]);

  if (!isMounted) return null;

  return (
    <div className="flex items-center space-x-3">
      <span className="sr-only">Sun</span>
      <Sun />
      <Switch
        checked={enabled}
        onChange={(action) => {
          if (action) {
            setTheme('dark');
          }
          if (action === false) {
            setTheme('light');
          }
        }}
        className={`${enabled ? 'bg-[#0070f3]' : 'bg-[#eaeaea]'}
      relative inline-flex flex-shrink-0 h-[18px] w-[35px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
        pointer-events-none inline-block h-[14px] w-[15px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
      <span className="sr-only">Moon</span>
      <Moon />
    </div>
  );
};

export default SwitchTheme;
