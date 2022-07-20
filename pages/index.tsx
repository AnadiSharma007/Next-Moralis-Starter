import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

const Home: NextPage = () => {

  const { isAuthenticated , authenticate } = useMoralis(); 
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard");
  }, [isAuthenticated]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>Moralis IO tutorial</title>
        <meta name="description" content="A basic tutorial of Moralis IO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        className="px-7 py-4 text-xl rounded-xl bg-yellow-300 animate-pulse"
        onClick={() =>
          authenticate({ signingMessage: "Authorize linking of your wallet" })
        }
      >
        Login using Metamask
      </button>
    </div>

      
    </div>
  )
}

export default Home
