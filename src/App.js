import React,{Component} from 'react';
import './App.css';
import Header from './Header';
import List from './List';
import Show from './Show';
import Favlist from './Favlist';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div id="appcontainer">
        <Header/>
        <div id="middle">
          <List/>
          <Show />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
