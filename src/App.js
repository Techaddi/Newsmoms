import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsHolder from './components/NewsHolder';

function App() {
  let pagesize=3;
  return (
    <>
    <Navbar title="MyNews"/>
    <NewsHolder pagesize={pagesize}/> 
   
    <Footer/>
    
    
    </>
  );
}

export default App;
