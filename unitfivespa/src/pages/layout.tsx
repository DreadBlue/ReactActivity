import React from "react";
import Head from "next/head";
import { InputSearch } from "@/components/common/InputSearch";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Mi App</title>
      </Head>
      <header>
        <Flex justify="center" p={10} gap={10}>
          <Button
            onClick={() => {
              router.push("/");
            }}>
            Inicio
          </Button>
          <InputSearch />
        </Flex>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
