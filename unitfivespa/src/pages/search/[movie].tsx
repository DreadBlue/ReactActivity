import { useRouter } from "next/router";
import { useState } from "react";

import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { Card } from "@/components/common/card";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { Movie } from "@/pages";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Search() {
  const router = useRouter();
  const { movie } = router.query;
  const [searchMovie, setSearchMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=es-ES&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzk2NGU5NWQyOTc0OGNhNzRlNDI0NzcyZTkzYmMxOSIsIm5iZiI6MTc0NTkzOTk1OC42NjIwMDAyLCJzdWIiOiI2ODEwZWRmNjQ2MDM1NzFlYWQwZmQ5MDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j5i3pbWtnE2EX96GY1eq98gbZNQHM3NUZgm8JdJFVYE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setSearchMovie(json.results))
      .catch((err) => console.error(err));
  }, [movie]);

  return (
    <>
      <Box className={` ${geistSans.variable} ${geistMono.variable}`} p={12}>
        <main className={styles.main}>
          <span>RESULTADO DE LA BUSQUEDA</span>
          <SimpleGrid columns={3} gap={12}>
            {searchMovie.map((value) => {
              console.log(value);
              return <Card key={value.id} movie={value} />;
            })}
          </SimpleGrid>
        </main>
      </Box>
    </>
  );
}
