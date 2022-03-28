import { useState } from 'react';
import Head from 'next/head';

import Header from '../src/components/Header';
import Container from '../src/components/Container';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Text from '../src/components/Text/Index';
import Link from 'next/link';
import Footer from '../src/components/Footer';

function Cadastro() {
  const [aviso, setAviso] = useState(false);

  function cadastrarUsuario() {
    const inputNome = document.querySelector('input[type="text"]').value;
    const inputEmail = document.querySelector('input[type="email"]').value;
    const inputPassword = document.querySelector('input[type="password"]').value;

    const localStorageData = JSON.parse(window.localStorage.getItem('userAccess'));

    if (inputNome != '' && inputEmail != '' && inputPassword != '') {
      localStorageData.push({
        username: inputNome,
        email: inputEmail,
        password: inputPassword,
      });
      window.localStorage.setItem('userAccess', JSON.stringify(localStorageData));
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

        <Button click={cadastrarUsuario} color={aviso ? '#f14545' : ''}>
          {aviso ? 'Campos em branco' : 'Cadastrar'}
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
