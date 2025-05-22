'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Image
              src="/assets/deckart.png"
              alt="Logo de Deckart"
              width={40}
              height={40}
            />
            <Image
              src="/assets/deckart.svg"
              alt="Deckart"
              width={100}
              height={24}
            />
          </div>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link href="#features" className="nav-item">
              FONCTIONNALITÉS
            </Link>
            <Link href="#how-it-works" className="nav-item">
              COMMENT ÇA MARCHE
            </Link>
            <Link href="#pricing" className="nav-item">
              TARIFS
            </Link>
            <Link href="https://app.deckart.xyz" className="btn">
              COMMENCER
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 