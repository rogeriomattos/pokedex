import { Seo, Footer } from 'components/molecules';

interface LayoutProps {
  title: string;
  description: string;
  children: JSX.Element;
}

const Layout = ({ title, description, children }: LayoutProps) => (
  <div>
    <Seo
      title={title}
      description={description}
    />
    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default Layout;