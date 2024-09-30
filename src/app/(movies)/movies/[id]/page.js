import MovieInfo, { getMovie } from "@/app/components/movie-info";
import MovieVideos from "@/app/components/movie-videos";
import { Suspense } from "react";

export async function generateMetadata({ params: { id } }){
  const movie = await getMovie(id)
  return{
    title:movie.title
  }
}

export default async function MovieDetail({ params: { id } }) {
  return (
    <div>
      <Suspense fallback={<div>정보 로딩</div>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<div>비디오 로딩</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}

// export const metadata = {
//   title: '영화상세'
// }