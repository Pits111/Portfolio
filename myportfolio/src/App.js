import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Home from './components/Intro';
import CardsList from './components/CardsList';
import cards from './components/PortfolioData'; 






function App() {
  return (
    <div className="App">
          <Navbar/>
          <Banner/>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/Blog">
          <CardsList cardsInfo={cards} />
          </Route> 
          <Route path="/Contact" component={Contact}/>
          </Switch>
    </div>
  );
}

export default App;
