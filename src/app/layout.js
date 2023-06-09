import GraphQlProvider from '@/context/graphql-context';
import { PopupProvider } from '@/context/popup-context';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Prepr Patterns',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GraphQlProvider>
          <PopupProvider>
            <div className="min-h-screen pt-24 antialiased md:pt-0">
              <Nav />
              <div className="modal-container"></div>
              {children}
              <Footer />
            </div>
          </PopupProvider>
        </GraphQlProvider>
      </body>
    </html>
  );
}
