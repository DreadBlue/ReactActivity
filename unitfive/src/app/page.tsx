"use server";

import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { Card } from "@/components/common/card";
import { SimpleGrid, Box } from "@chakra-ui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default async function Home() {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzk2NGU5NWQyOTc0OGNhNzRlNDI0NzcyZTkzYmMxOSIsIm5iZiI6MTc0NTkzOTk1OC42NjIwMDAyLCJzdWIiOiI2ODEwZWRmNjQ2MDM1NzFlYWQwZmQ5MDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j5i3pbWtnE2EX96GY1eq98gbZNQHM3NUZgm8JdJFVYE`,
    },
    next: { revalidate: 3600 }, // Opcional: para ISR
  });

  const data = await res.json();
  const popularMovies: Movie[] = data.results;

  return (
    <>
      <Head>
        <title>Movie app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={` ${geistSans.variable} ${geistMono.variable}`} p={12}>
        <span>PELICULAS POPULARES</span>
        <SimpleGrid columns={3} gap={12}>
          {popularMovies.map((value) => {
            console.log(value);
            return <Card key={value.id} movie={value} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
