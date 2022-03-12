import Footer from '@components/common/Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto md:px-0 px-5 mt-16 antialiased">
        {children}
      </div>
    </div>
    <Footer />
  </>
);

export default Layout;
