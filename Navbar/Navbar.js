// components/Navbar/Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/mixed-reality">Mixed Reality</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
