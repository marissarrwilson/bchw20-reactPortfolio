import './App.css';
import Navbar from './components/Navbar';
import Portfolio from './views/Portfolio';
import Home from './views/Home';
import Contact from './views/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Switch>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
