import { Avatar, Button, Card as Cardd } from "@chakra-ui/react";
import { Movie } from "@/pages";
import { useRouter } from "next/router";

export const Card = ({ movie }: { movie: Movie }) => {
  const router = useRouter();

  return (
    <Cardd.Root width="320px">
      <Cardd.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Cardd.Title mt="2">{movie.title}</Cardd.Title>
        <Cardd.Description>{movie.overview}</Cardd.Description>
      </Cardd.Body>
      <Cardd.Footer justifyContent="flex-end">
        <Button
          variant="outline"
          onClick={() => router.push(`/movie/${movie.id}`)}>
          Ver detalles
        </Button>
      </Cardd.Footer>
    </Cardd.Root>
  );
};
