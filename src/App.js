import './App.css';
import './index.css';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import {useState} from 'react';
import Container from './components/Container';
import About from './components/About';

function App() {
  const pages = ["about", "contact", "resume", "portfolio"];
const [currentPage, setCurrentPage] = useState("portfolio")
  return (
    <div className="bucket-app">
      <Navigation pages={pages} setCurrentPage={setCurrentPage}/>
      <PageContent currentPage={currentPage}/>
      <Footer/>
    </div>
  );
}

export default App;
