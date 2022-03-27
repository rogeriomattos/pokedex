import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex" />
        <link rel="icon" href="/pokeball_icon.ico" />
      </Head>

      <main>

      </main>

      <footer>
        <a
          href="https://github.com/rogeriomattos"
          target="_blank"
        >
          Developed by Rogerio Almeida de Mattos
        </a>
      </footer>
    </div>
  )
}

export default Home
