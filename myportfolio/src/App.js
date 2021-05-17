import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import ContactForm from './components/ContactUs';

function App() {

  const myStyle={
  }

  return (
    <div className="App">
          <Navbar/>
        <Route exact path="/" component={Intro} />
        <Route path="/About" />
        <Route path="/Portfolio" />
        <Route path="/Contact" component={ContactForm}/>
   
      
    </div>
  );
}

export default App;
