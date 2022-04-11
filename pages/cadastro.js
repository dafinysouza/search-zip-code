import { useState } from "react";
import Head from "next/head";

import Header from "../src/components/Header";
import Container from "../src/components/Container";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import Text from "../src/components/Text";
import Link from "next/link";
import Footer from "../src/components/Footer";

function Cadastro() {
  const [aviso, setAviso] = useState(false);

  function cadastrarUsuario() {
    const inputNome = document.querySelector('input[type="text"]').value;
    const inputEmail = document.querySelector('input[type="email"]').value;
    const inputPassword = document.querySelector('input[type="password"]').value;

    if (inputNome != "" && inputEmail != "" && inputPassword != "") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: inputNome,
          email: inputEmail,
          password: inputPassword,
        }),
      };

      fetch("http://localhost:3000/auth/cadastro", requestOptions);
    } else {
      setAviso(true);
      setTimeout(() => {
        setAviso(false);
      }, 1000);
    }
  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>

      <Header text="Faça seu Cadastro." />

      <Container>
        <Input type="text" placeholder="Nome" />

        <Input type="email" placeholder="E-mail" />

        <Input type="password" placeholder="Senha" />

        <Button click={cadastrarUsuario} color={aviso ? "#f14545" : ""}>
          {aviso ? "Campos em branco" : "Cadastrar"}
        </Button>

        <Text tag="p">
          <Link href="/login">Conecte-se</Link>
        </Text>
      </Container>
      <Footer />
    </>
  );
}

export default Cadastro;
