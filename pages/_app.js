import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../app/globals.css'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Rightaside from "@/components/Rightaside";
import Leftaside from "@/components/Leftaside";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header/>
            <main>
                <div className="row m-2 mt-3">
                    <Leftaside/>
                    <div className="col-6 r_tbdr" >
                    <Component {...pageProps} />
                    </div>
                    <Rightaside/>
                </div>
            </main>
            <Footer/> 
        </>
    );
  }