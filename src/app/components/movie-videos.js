import { API_URL } from "../(movies)/movies/page";
import potato from "/styles/movie-videos.module.css"

async function getVideos(id) {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  // throw new Error('T^T') // 에러유도
  const response = await fetch(`${API_URL}/${id}/videos`)
  return response.json();
}

export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  // <h6>{JSON.stringify(videos)}</h6>
  return (
    <div className={potato.container}>
      {/* <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            src={`https://www.youtube.com/embed/${videos[0].key}`}
            frameborder="0"
            allowfullscreen="allowfullscreen"></iframe> */}
      {/* videos.map((aa, ii)=>{
                return(
                  <div>
                )
              }) 
                ☆★☆ { return } 생략가능!  바로()! ★☆★
               */}
      {videos.map((video) => (
        <iframe key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  )
}