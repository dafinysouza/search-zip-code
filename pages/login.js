import { useEffect } from 'react';

import Input from '../src/components/Input';
import Container from '../src/components/Container';
import Button from '../src/components/Button';
import Text from '../src/components/Text/Index';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();

  const user = [
    {
      username: 'gabriel',
      email: 'gabriel@email.com',
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
      }
    });
  }

  return (
    <>
      <Container>
        <Text tag="h1">Faça seu Login.</Text>

        <Input type="email" placeholder="E-mail" />

        <Input type="password" placeholder="Senha" />

        <Button click={validarUsuario}>Acessar</Button>

        <Text tag="p">
          <Link href="/cadastro">Cadastre-se.</Link>
        </Text>
      </Container>
    </>
  );
}

export default Login;
