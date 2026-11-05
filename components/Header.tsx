"use client";
import { useState } from "react";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a
        className="wordmark"
        href="#home"
        aria-label="Nurbibi Beauty Studio — в начало"
      >
        NURBIBI<span>BEAUTY STUDIO</span>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Закрыть −" : "Меню +"}
      </button>
      <nav
        id="navigation"
        className={open ? "nav open" : "nav"}
        aria-label="Главная навигация"
      >
        {[
          ["О студии", "#about"],
          ["Услуги", "#services"],
          ["Наши работы", "#works"],
        ].map(([name, url]) => (
          <a key={url} href={url} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
        <a className="nav-book" href="#booking" onClick={() => setOpen(false)}>
          Записаться <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
