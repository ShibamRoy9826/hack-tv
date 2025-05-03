'use client';

import { useState } from 'react';
import clsx from 'clsx';

export default function MenuToggle() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={clsx(
        'group h-20 w-20 rounded-lg outline-0 menuButton',
        { 'active-menu': isActive }
      )}
    >
      <div className="grid justify-items-center gap-1.5">
        <span className="h-1 w-12 rounded-full bg-white"></span>
        <span className="h-1 w-12 rounded-full bg-white"></span>
        <span className="h-1 w-12 rounded-full bg-white"></span>
      </div>
    </button>
  );
}
