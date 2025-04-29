import { Geist, Geist_Mono } from "next/font/google";
import { Card } from "@/components/common/card";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { Movie } from "@/app/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function Search({
  params,
}: {
  params: { movie: string };
}) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${params.movie}&include_adult=false&language=es-ES&page=1`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzk2NGU5NWQyOTc0OGNhNzRlNDI0NzcyZTkzYmMxOSIsIm5iZiI6MTc0NTkzOTk1OC42NjIwMDAyLCJzdWIiOiI2ODEwZWRmNjQ2MDM1NzFlYWQwZmQ5MDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j5i3pbWtnE2EX96GY1eq98gbZNQHM3NUZgm8JdJFVYE",
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Error al buscar películas");
  }

  const data = await res.json();
  const results: Movie[] = data.results;

  return (
    <>
      <Box className={` ${geistSans.variable} ${geistMono.variable}`} p={12}>
        <span>RESULTADO DE LA BUSQUEDA</span>
        <SimpleGrid columns={3} gap={12}>
          {results.map((value) => {
            console.log(value);
            return <Card key={value.id} movie={value} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
