import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  useEffect(() => {
    const currentUser = window.localStorage.getItem('currentUser');

    if (currentUser == null) {
      router.push('/login');
    }
  }, []);

  const router = useRouter();

  return <h1>Home</h1>;
}
