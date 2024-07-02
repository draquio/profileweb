import Link from "next/link";
import css from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.logo}>ProfileWeb</div>
        <ul>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}


