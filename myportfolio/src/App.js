import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Home from './components/Intro';
import CardsList from './components/CardsList';
import cards from './components/CardData'; 
import SkillsList from './components/SkillsList';
import skillcards from './components/SkillData';
import Footer from './components/Footer';
import BlogDetails from './components/BlogDetails';
import SkillDetails from './components/SkillDetails';




function App() {
  return (
    <div className="App">
          <Navbar/>
          <Banner/>
           <Switch>
             <Route exact path='/' component={Home} />

             <Route path ='/portfolio/:skilltitle' render={(routeProps) => <SkillDetails routeProps={routeProps} /> }/>
             <Route path="/portfolio">
                <SkillsList skillsInfo={skillcards}/>
             </Route>
             

             <Route path='/blog/:blogtitle' render={(routeProps) => <BlogDetails routeProps={routeProps} /> }/>
             <Route path="/blog">
                <CardsList cardsInfo={cards} />
             </Route> 
             <Route path="/contact" component={Contact}/>
           </Switch>
          <Footer />
    </div>
  );
}

export default App;
