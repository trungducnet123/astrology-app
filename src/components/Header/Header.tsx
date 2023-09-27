import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openClose = isOpen ? 'open' : 'close';
  const hamburger = isOpen ? 'line line-rotate' : 'line';

  return (
    <header>
      <nav className={`nav ${openClose}`}>
        <div className="nav__options">
          <NavLink className="logo" to="/">
            lunar
          </NavLink>
          <ThemeToggle />
          <div
            className={`menu ${openClose}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span className={hamburger}></span>
            <span className={hamburger}></span>
            <span className={hamburger}></span>
          </div>
        </div>
        <ul className={`nav__list ${openClose}`}>
          <li className="nav__item">
            <NavLink
              to="/"
              className={location.pathname === '/' ? 'active' : 'nav__link'}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/about"
              className={
                location.pathname === '/about' ? 'active' : 'nav__link'
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/zodiac"
              className={location.pathname === '/' ? 'active' : 'nav__link'}
              onClick={closeMenu}
            >
              Zodiac Signs
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/tarot"
              className={
                location.pathname === '/about' ? 'active' : 'nav__link'
              }
              onClick={closeMenu}
            >
              Tarot Card Library
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/reading"
              className={
                location.pathname === '/reading' ? 'active' : 'nav__link'
              }
              onClick={closeMenu}
            >
              Card Reading
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
