"use client";

import { useState } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        <span className={`arrow ${isOpen ? "rotated" : ""}`}>
          ▼
        </span>
      </button>

      <div className={`nav-links ${isOpen ? "visible" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/unit-1">Unit 1</Link>
        <Link href="/unit-2">Unit 2</Link>
        <Link href="/unit-3">Unit 3</Link>
    </div>
    
    </nav>
  );
}