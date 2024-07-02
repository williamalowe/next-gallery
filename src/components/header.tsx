"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();
  const navLinks = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/gallery',
      label: 'Gallery',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ]
  return (
    <header className="border-y p-4 flex items-center">
      <Link href="/">
        <div className="bg-zinc-900 w-12 h-12 text-white flex items-center justify-center text-2xl font-bold rounded-md">
          WL
        </div>
      </Link>
      <ul className="ml-auto flex gap-x-4">
        {
          navLinks.map((link) => {
            return (
              <li key={link.href} className={pathname === link.href ? "text-zinc-950" : "text-zinc-400"}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          })
        }
      </ul>
    </header>
  );
}
