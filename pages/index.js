import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Container from '../src/components/Container';
import Footer from '../src/components/Footer';

export default function Home() {
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
        <h1>Home</h1>
      </Container>
      <Footer />
    </>
  );
}
