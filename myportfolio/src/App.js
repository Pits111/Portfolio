import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Home from './components/Intro';

function App() {

  const myStyle={
  }

  return (
    <div className="App">
          <Navbar/>
          <Banner/>
          <Switch>
          <Route path='/Home' component={Home} />
          <Route path="/Portfolio" component={Home} />
          <Route path="/Contact" component={Contact}/>
          </Switch>
    </div>
  );
}

export default App;
