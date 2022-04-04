import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from '../src/components/Header';
import Container from '../src/components/Container';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Text from '../src/components/Text/index';
import Link from 'next/link';
import Footer from '../src/components/Footer';

function Login() {
  const [aviso, setAviso] = useState(false);

  const router = useRouter();

  const user = [
    {
      username: 'convidado',
      email: 'convidado@email.com',
      password: 'senha123',
    },
  ];

  useEffect(() => {
    if (window.localStorage.getItem('userAccess') == null) {
      window.localStorage.setItem('userAccess', JSON.stringify(user));
      window.localStorage.setItem('currentUser', null);
    }
  }, []);

  function validarUsuario() {
    const inputEmail = document.querySelector('input[type="email"]').value;
    const inputPassword = document.querySelector('input[type="password"]').value;

    const localStorageEmail = JSON.parse(window.localStorage.getItem('userAccess'));

    localStorageEmail.map((item) => {
      if (inputEmail === item.email && inputPassword === item.password) {
        window.localStorage.setItem('currentUser', item.username);
        return router.push('/');
      } else {
        setAviso(true);
        setTimeout(() => {
          setAviso(false);
        }, 1000);
      }
    });
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

        <Button click={validarUsuario} color={aviso ? '#f14545' : ''}>
          {aviso ? 'Dados Inválidos' : 'Acessar'}
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
