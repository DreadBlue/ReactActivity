import { Image } from "@chakra-ui/react";

interface DetailMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { name: string; id: number }[]; // Puedes ajustar según tu respuesta real
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default async function Details({ params }: { params: { id: string } }) {
  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=es-ES`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzk2NGU5NWQyOTc0OGNhNzRlNDI0NzcyZTkzYmMxOSIsIm5iZiI6MTc0NTkzOTk1OC42NjIwMDAyLCJzdWIiOiI2ODEwZWRmNjQ2MDM1NzFlYWQwZmQ5MDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j5i3pbWtnE2EX96GY1eq98gbZNQHM3NUZgm8JdJFVYE`,
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("No se pudo cargar la película");
  }
  const movieDetail: DetailMovie = await res.json();
  return (
    <>
      {movieDetail ? (
        <div>
          <h1>{movieDetail.title}</h1>
          <p>{movieDetail.overview}</p>
          <p>Presupuesto: {movieDetail.budget}</p>
          <p>Calificación: {movieDetail.popularity}</p>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}
