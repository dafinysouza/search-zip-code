import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

import Container from '../src/components/Container';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const [dados, setDados] = useState();
  const [aviso, setAviso] = useState(false);

  const buscarCep = (cep) => {
    fetch('https://viacep.com.br/ws/' + cep + '/json')
      .then((response) => response.json())
      .then((json) => setDados(json));
  };

  const mostrarCep = () => {
    const inputCep = document.querySelector('input[name="cep"]').value;

    if (inputCep != '') {
      buscarCep(inputCep);
    } else {
      setAviso(true);
      setTimeout(() => {
        setAviso(false);
      }, 1000);
    }
  };

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

      <Header text="Pesquise seu endereço" />

      <Container>
        <div className={styles.wrapper}>
          <Input id="cep" type="text" name="cep" placeholder="CEP"></Input>

          <Button click={mostrarCep} color={aviso ? '#f14545' : ''}>
            {aviso ? 'Campos em branco' : 'Pesquisar por CEP'}
          </Button>
        </div>
        <br />
        {dados && (
          <table width="500" className={styles.table} border="0" cellPadding="10" cellSpacing="0">
            <tr style={{ backgroundColor: '#eee' }}>
              <td>CEP:</td>
              <td>{dados.cep}</td>
            </tr>
            <tr>
              <td>Endereço:</td>
              <td>{dados.logradouro}</td>
            </tr>
            <tr style={{ backgroundColor: '#eee' }}>
              <td>Bairo:</td>
              <td>{dados.bairro}</td>
            </tr>
            <tr>
              <td>Cidade:</td>
              <td>{dados.localidade}</td>
            </tr>
            <tr style={{ backgroundColor: '#eee' }}>
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
