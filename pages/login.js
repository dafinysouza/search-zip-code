import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../src/components/Header";
import Container from "../src/components/Container";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import Text from "../src/components/Text";
import Link from "next/link";
import Footer from "../src/components/Footer";

function Login() {
  const [aviso, setAviso] = useState(false);
  const [dados, setDados] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (fetchStatus) {
      return router.push("/");
    }
  }, [fetchStatus]);

  function validarUsuario() {
    const inputEmail = document.querySelector('input[type="email"]').value;
    const inputPassword = document.querySelector('input[type="password"]').value;

    if (inputEmail != "" && inputPassword != "") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: inputEmail,
          password: inputPassword,
        }),
      };

      fetch("http://localhost:3000/auth/authenticate", requestOptions)
        .then((response) => {
          response.json();
          if (response.status === 200) {
            setFetchStatus(true);
          } else {
            setAviso(true);
            setTimeout(() => {
              setAviso(false);
            }, 1000);
          }
        })
        .then((data) => {
          setDados(data);
          console.log("data: ", data);
        });
    } else {
      if (!fetchStatus) {
        setAviso(true);
        setTimeout(() => {
          setAviso(false);
        }, 1000);
      }
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Header text="Faça seu Login." />

      <Container>
        <Input type="email" placeholder="E-mail" />

        <Input type="password" placeholder="Senha" />

        <Button click={validarUsuario} color={aviso ? "#f14545" : ""}>
          {aviso ? "Dados Inválidos" : "Acessar"}
        </Button>

        <Text tag="p">
          <Link href="/cadastro">Cadastre-se.</Link>
        </Text>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
