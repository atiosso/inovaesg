import Link from "next/link";
import BaseLogo from "./Logo/BaseLogo";
import SimpleLogo from "./Logo/SimpleLogo";

export default function Header() {
  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2 h-24 w-24" href="/">
            <SimpleLogo />
          </Link>

          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-12 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li>
                <Link
                  href="/courses"
                  className="hover:text-brand-700 transition-colors duration-200"
                >
                  Cursos e Treinamentos
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-700 transition-colors duration-200"
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
