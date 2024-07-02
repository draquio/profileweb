import Link from "next/link";
import css from "./Footer.module.scss";
export const Footer = () => {
  return (
    <footer className={css.footer}>
      <Link href="https://draquioportfolio.vercel.app/" target="_blank">
      © Sergio Mercado (Draquio) | Fullstack Developer 
      </Link>
    </footer>
  )
}

