import "./globals.css"; //초기css
import "/styles/global.css"; //전역css
import Navigation from "./components/navigation";
// import Run from './run/page'


export const metadata = {
  title: "Ha S",
  description: "Sorento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
        {/* <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          <Link href="/cart">cart</Link>
        </div>  */}
        {/* <Run/> */}
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
