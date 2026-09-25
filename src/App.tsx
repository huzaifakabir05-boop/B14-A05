import { Suspense } from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Technologies from './components/Technologies/technologies';
import type { Itechnology } from './types/technology';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const technologiesFetch = async(): Promise<Itechnology[]>=> {
  const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();
 return (
    <>
        
   <Nav />
   <Banner />
   <Suspense fallback={<div>Loading.... </div>}>
   <Technologies technologiesPromise={technologiesPromise} />
   </Suspense>
   <ToastContainer position="top-right" autoClose={2000} />
   <Footer />
    
    </>
  );
}

export default App;
