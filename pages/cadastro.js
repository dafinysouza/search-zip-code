import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from '../src/components/Header';
import Container from '../src/components/Container';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Text from '../src/components/Text/Index';
import Link from 'next/link';
import Footer from '../src/components/Footer';

function Cadastro() {
  useEffect(() => {}, []);

  function cadastrarUsuario() {
    const inputNome = document.querySelector('input[type="text"]').value;
    const inputEmail = document.querySelector('input[type="email"]').value;
    const inputPassword = document.querySelector('input[type="password"]').value;

    const localStorageData = JSON.parse(window.localStorage.getItem('userAccess'));

    localStorageData.push({
      username: inputNome,
      email: inputEmail,
      password: inputPassword,
    });
    window.localStorage.setItem('userAccess', JSON.stringify(localStorageData));
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

        <Button click={cadastrarUsuario}>Cadastrar</Button>

        <Text tag="p">
          <Link href="/login">Conecte-se</Link>
        </Text>
      </Container>
      <Footer />
    </>
  );
}

export default Cadastro;
