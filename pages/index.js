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
  const [endereco, setEndereco] = useState();
  const [cep, setCep] = useState();
  const [ativarStep, setAtivarStep] = useState(true);
  const [aviso, setAviso] = useState(false);

  const buscarCep = (cep) => {
    fetch('https://viacep.com.br/ws/' + cep + '/json')
      .then((response) => response.json())
      .then((json) => setEndereco(json));
  }

  const buscarEndereco = (logradouro, localidade, uf) => {
    fetch('https://viacep.com.br/ws/' + uf + '/' + localidade + '/' + logradouro + '/json/')
    .then((response) => response.json())
    .then((json) => setCep(json));
  }

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

  const mostrarEndereco = () => {
    const inputLogradouro = document.querySelector('input[name="logradouro"]').value;
    const inputLocalidade = document.querySelector('input[name="localidade"]').value;
    const inputUf = document.querySelector('input[name="uf"]').value;

    buscarEndereco(inputLogradouro, inputLocalidade, inputUf);
  }

  const ativarCep = () => {
    setAtivarStep(true);
  }

  const ativarEndereco = () => {
    setAtivarStep(false);
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

      <Header text="Pesquise seu endereço" />
      <Container>
        <div>
          <Button click={ativarCep}>Pesquisar por CEP</Button>
          <Button click={ativarEndereco}>Pesquisar por Endereço</Button>
        </div>

        {ativarStep ? (
          <div className={styles.wrapper}>
            <Input id="cep" type="text" name="cep" placeholder="CEP"></Input>

            <div>
              <Button click={mostrarCep} color={aviso ? '#f14545' : ''}>{aviso ? 'Campos em branco' : 'Pesquisar por CEP'}</Button>
            </div>

            {endereco && (
              <table width="500" className={styles.table} border="0" cellPadding="10" cellSpacing="0">
                <tbody>
                  <tr style={{ backgroundColor: '#eee' }}>
                    <td>CEP:</td>
                    <td>{endereco.cep}</td>
                  </tr>
                  <tr>
                    <td>Endereço:</td>
                    <td>{endereco.logradouro}</td>
                  </tr>
                  <tr style={{ backgroundColor: '#eee' }}>
                    <td>Bairo:</td>
                    <td>{endereco.bairro}</td>
                  </tr>
                  <tr>
                    <td>Cidade:</td>
                    <td>{endereco.localidade}</td>
                  </tr>
                  <tr style={{ backgroundColor: '#eee' }}>
                    <td>UF:</td>
                    <td>{endereco.uf}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        ) : (
          <div className={styles.wrapper}>
            <Input id="logradouro" type="text" name="logradouro" placeholder="Endereço"></Input>
            <Input id="localidade" type="text" name="localidade" placeholder="Cidade"></Input>
            <Input id="uf" type="text" name="uf" placeholder="UF"></Input>

            <div>
              <Button click={mostrarEndereco}>Pesquisar por Endereco</Button>
            </div>

            {cep && (
              <table border="1">
                <tr>
                  <td>CEP:</td>
                  <td>{cep[0].cep}</td>
                </tr>
              </table>
            )}
          </div>
        )}


      </Container>
      <Footer />
    </>
  );
}
