import React,{Component} from 'react';

class Welcome extends Component{
  render(){
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