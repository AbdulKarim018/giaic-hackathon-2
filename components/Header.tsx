import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Handbag, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Blog", href: "/blog" },
  { name: "Pages", href: "/pages" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <div className="w-full">
      <MaxWidthWrapper
        element={"header"}
        className="my-4 flex max-w-4xl flex-wrap items-center justify-center gap-4 md:justify-between"
      >
        {/* nav links */}
        <nav className="flex items-center gap-4 text-xs">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-4 rounded-full border border-primary p-2">
            <input
              placeholder="Search..."
              className="flex-1 bg-transparent text-xs"
            />
            <MagnifyingGlass size={20} />
          </div>
          <Handbag />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
