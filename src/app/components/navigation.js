'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import styles from "/styles/navi.module.css"
// import "/styles/navi.css"


export default function Navigation() {
  let path = usePathname()
  return (
    <div className={styles.nav}>
      <ul>
        <li><Link href="/">Home{path == '/' ? <span>🔥</span> : null}</Link></li>
        <li><Link href="/list">List{path == '/list' ? <span>🔥</span> : null}</Link></li>
        <li><Link href="/cart">cart{path == '/cart' ? <span>🔥</span> : null}</Link></li>
        <li><Link href="/movies">movies{path == '/movies' ? <span>🔥</span> : null}</Link></li>
      </ul>
    </div>
  )
}
