import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Home from './components/Intro';
import CardsList from './components/BooksList';
import cards from './components/PortfolioData'; 






function App() {
  return (
    <div className="App">
          <Navbar/>
          
          <Banner/>
          <Switch>
          <Route path='/Home' component={Home} />
          <Route path="/Portfolio">
          <CardsList cardsInfo={cards} />
          </Route> 
          <Route path="/Contact" component={Contact}/>
          </Switch>
    </div>
  );
}

export default App;
