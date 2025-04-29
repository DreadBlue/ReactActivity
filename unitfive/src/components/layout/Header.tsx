"use client";
import React from "react";
import { InputSearch } from "@/components/common/InputSearch";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <Flex justify="center" p={10} gap={10}>
        <Button
          onClick={() => {
            router.push("/");
          }}>
          Inicio
        </Button>
        <InputSearch />
      </Flex>
    </>
  );
};
