import React,{Component} from 'react';
var Push = require('push.js');

class Welcome extends Component{
  render(){
    Push.create("Travel Companion",{body:'Welcome to Travel Companion',timeout:4000,icon:require('../images/logo.jpg')});
    return(
      <div id="welcome">
          <div class="title">
            <h1 class="design">welcome<br/>to<br/>travel<br/>companion</h1>
            <button class="white-mode" id="explore">Explore</button>
          </div>
      </div>
    )
  }
}
export default Welcome;