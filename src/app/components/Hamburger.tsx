'use client';

import clsx from 'clsx';

export default function MenuToggle({ isActive, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className={clsx(
        'group h-12 w-12 rounded-lg outline-none focus:outline-none hover:bg-[#2a0d4f] transition-colors duration-200',
        { 'active-menu bg-[#2a0d4f]': !isActive }
      )}
    >
      <div className="grid justify-items-center gap-1.5 relative">
        <span 
          className={clsx(
            'h-1 w-8 rounded-full bg-white transition-all duration-300',
            {
              'rotate-45 absolute top-1/2 -translate-y-1/2': !isActive,
              'translate-y-0': isActive
            }
          )}
        ></span>
        <span 
          className={clsx(
            'h-1 w-8 rounded-full bg-white transition-all duration-300',
            { 'opacity-0': !isActive }
          )}
        ></span>
        <span 
          className={clsx(
            'h-1 w-8 rounded-full bg-white transition-all duration-300',
            {
              '-rotate-45 absolute top-1/2 -translate-y-1/2': !isActive,
              'translate-y-0': isActive
            }
          )}
        ></span>
      </div>
    </button>
  );
}