import Head from 'next/head'
import pokeball_icon from '@public/pokeball_icon.ico'

interface SeoProps {
  title: string;
  description: string;
}

const Seo = ({ title, description }: SeoProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href={pokeball_icon.src} />
  </Head>
);

export default Seo;