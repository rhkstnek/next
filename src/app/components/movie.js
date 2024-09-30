"use client";
import Link from "next/link";
import styles from "/styles/movie.module.css"
import { useRouter } from "next/navigation";


export default function Movie({title, id, poster_path}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`movies/${id}`);
  }
  return (
    // { return () } 중에 ----> {return}생략
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`movies/${id}`}>{title}</Link>
    </div>
  )
}