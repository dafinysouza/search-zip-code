import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Container from '../src/components/Container';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const [dados, setDados] = useState();

  const buscarCep = (cep) => {
    fetch('https://viacep.com.br/ws/' + cep + '/json').then((response) => response.json()).then((json) => setDados(json));
  }


  const mostrarCep = () => {
    const inputCep = document.querySelector('input[name="cep"]').value;

    buscarCep(inputCep);
  }

  useEffect(() => {
    const currentUser = window.localStorage.getItem('currentUser');

    if (currentUser == null) {
      router.push('/login');
    }
  }, []);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <div className='form'>
          <Input id="cep" type="text" name="cep" placeholder="CEP"></Input>

          <div>
            <Button click={mostrarCep}>Pesquisar por CEP</Button>
          </div>
        </div>

        {dados && (
          <table border="1">
            <tr>
              <td>CEP:</td>
              <td>{dados.cep}</td>
            </tr>
            <tr>
              <td>Endereço:</td>
              <td>{dados.logradouro}</td>
            </tr>
            <tr>
              <td>Bairo:</td>
              <td>{dados.bairro}</td>
            </tr>
            <tr>
              <td>Cidade:</td>
              <td>{dados.localidade}</td>
            </tr>
            <tr>
              <td>UF:</td>
              <td>{dados.uf}</td>
            </tr>
          </table>
        )}
      </Container>
      <Footer />
    </>
  );
}
