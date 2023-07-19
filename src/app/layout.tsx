import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Inter } from 'next/font/google'
import { Container, SSRProvider } from '../components/bootstrap';
import NavBarParent from './(LayoutComponents)/NavBarParent';
import Footer from './(LayoutComponents)/Footer';
import { GlobalCartCounterContextProvider } from '@/components/CartCounterContext';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <main>
            <GlobalCartCounterContextProvider>
              <NavBarParent />
              <Container className="py-4 layoutContainer">
                {children}
              </Container>
            </GlobalCartCounterContextProvider>
          </main>
          <div className='footer'>
            <Footer></Footer>
          </div>

        </SSRProvider>


      </body>
    </html>
  )
}
