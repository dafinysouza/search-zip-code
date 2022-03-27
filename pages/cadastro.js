import { useEffect } from 'react';

import Input from '../src/components/Input';
import Container from '../src/components/Container';
import Button from '../src/components/Button';
import Text from '../src/components/Text/Index';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Cadastro() {
  const router = useRouter();

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
      <Container>
        <Text tag="h1">Faça seu Cadastro.</Text>

        <Input type="text" placeholder="Nome" />

        <Input type="email" placeholder="E-mail" />

        <Input type="password" placeholder="Senha" />

        <Button click={cadastrarUsuario}>Cadastrar</Button>

        <Text tag="p">
          <Link href="/login">Conecte-se</Link>
        </Text>
      </Container>
    </>
  );
}

export default Cadastro;
