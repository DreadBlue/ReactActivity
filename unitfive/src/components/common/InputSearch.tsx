"use client";
import { Button, Group, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const InputSearch = () => {
  const router = useRouter();
  const [searchMovie, setSearchMovie] = useState("");

  return (
    <Group attached w="full" maxW="sm">
      <Input
        flex="1"
        placeholder="Buscar pelicula"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <Button
        bg="bg.subtle"
        variant="outline"
        onClick={() => router.push(`/search/${searchMovie}`)}>
        Buscar
      </Button>
    </Group>
  );
};
