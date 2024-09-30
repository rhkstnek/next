import { API_URL } from "../(movies)/movies/page";
import potato from "/styles/movie-info.module.css"

export async function getMovie(id) {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json();
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  console.log(movie)
  console.log(999)
  return (
    <div className={potato.container}>
      <img src={movie.poster_path} alt={movie.title}
        className={potato.poster}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3 >☆ : {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">Homepage &rarr;</a>
      </div>
    </div>
  )
}