"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={` p-1 ${pathName === link.url && "font-bold active"} navLinks`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
