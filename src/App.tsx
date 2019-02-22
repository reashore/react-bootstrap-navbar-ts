import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MenuBar from './Components/MenuBar';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

class App extends Component {
  public render() {
    return (
      <Router>
        <div className="container">
          <MenuBar />

          <Route path="/" exact component={Page1} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </div>
      </Router>
    );
  }
}

export default App;
