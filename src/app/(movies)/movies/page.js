
import styles from "/styles/home.module.css"
import Movie from "../../components/movie"

export const metadata = {
  title: '~~~'
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getM() {
  const ree = await fetch(API_URL);
  const daa = await ree.json();
  return daa
}

export default async function rhkstn() {
  
  let movies = await getM();
  return (
    <div className={styles.container}>
        {movies.map((movie) => (
          <Movie id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
        )
        )}
    </div>
  )
}