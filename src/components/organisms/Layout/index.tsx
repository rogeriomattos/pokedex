import * as S from './styles';
import { Seo, Footer } from 'components/molecules';

interface LayoutProps {
  title: string;
  description: string;
  children: JSX.Element;
}

const Layout = ({ title, description, children }: LayoutProps) => (
  <S.Content>
    <Seo
      title={title}
      description={description}
    />
    <main>
      {children}
    </main>

    <Footer />
  </S.Content>
);

export default Layout;