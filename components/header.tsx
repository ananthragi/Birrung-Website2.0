"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/logo-mark";
import { OpenButton } from "@/components/open-button";
import { nav, visibleSolutionPages } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [menu, setMenu] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solid = pathname !== "/" && !pathname.startsWith("/solution");

  useEffect(() => {
    setMenu(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menu);
    return () => document.body.classList.remove("menu-open");
  }, [menu]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenu(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function hrefFor(id: string) {
    return pathname === "/" ? `#${id}` : `/#${id}`;
  }

  const className = ["site-header", solid ? "is-solid" : "", stuck || menu ? "is-stuck" : "", menu ? "is-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <div className="wrap bar">
        <a className="logo" href={hrefFor("home")} aria-label="Birrung">
          <LogoMark />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menu}
          aria-controls="site-nav"
          onClick={() => setMenu((open) => !open)}
        >
          <span className="sr-only">{menu ? "Close menu" : "Menu"}</span>
          <span className="burger" aria-hidden="true" />
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Primary">
          {nav.map((item) =>
            item.href === "solution" ? (
              <div
                className={solutionsOpen ? "nav-item is-open" : "nav-item"}
                key={item.href}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className="nav-parent"
                  type="button"
                  aria-expanded={solutionsOpen}
                  aria-controls="solution-menu"
                  onClick={() => {
                    if (window.matchMedia("(min-width: 900px)").matches) return;
                    setSolutionsOpen((open) => !open);
                  }}
                >
                  {item.label}
                </button>
                <div className="nav-sub" id="solution-menu">
                  <div className="nav-sub-panel">
                    <a href={hrefFor("venues")} onClick={() => setMenu(false)}>
                      Overview
                    </a>
                    {visibleSolutionPages.map((page) => (
                      <a
                        key={page.href}
                        href={page.href}
                        aria-current={pathname === page.href ? "page" : undefined}
                        onClick={() => setMenu(false)}
                      >
                        {page.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={item.href} href={hrefFor(item.href)} onClick={() => setMenu(false)}>
                {item.label}
              </a>
            ),
          )}
          <div className="nav-mobile-cta">
            <OpenButton className="btn btn-gold" modal="trial">
              Free Demo
            </OpenButton>
            <a className="btn btn-line" href="https://birrung.com.au/login" target="_blank" rel="noopener noreferrer">
              Log in
            </a>
          </div>
        </nav>
        <div className="header-cta">
          <OpenButton className="btn btn-gold" modal="trial">
            Free Demo
          </OpenButton>
          <a className="btn btn-line" href="https://birrung.com.au/login" target="_blank" rel="noopener noreferrer">
            Log in
          </a>
        </div>
      </div>
    </header>
  );
}
