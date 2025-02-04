"use client";
import './Navbar.css'
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/asa.jpg" alt="ASA Overseas" />
        <span>Asa Overseas</span>
      </div>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Counselling</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Our Mission</a></li>
        </ul>
      </nav>
    </header>
  );
}
