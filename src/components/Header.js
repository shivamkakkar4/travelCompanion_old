import React,{Component} from 'react';
import Axios from 'axios';
// var Push = require('push.js');



class Header extends Component{
  constructor(props){
    super(props)

    this.menuLogin = ()=>{
      alert("asfsad")
    }


    this.verifyToken = ()=>{


      if(localStorage.getItem('token')!=undefined){


        Axios.post('http://localhost:8080/http://localhost:5000/verifyToken',{'token':localStorage.getItem('token')})
        .then((result)=>{
          console.log(result)
          if(result.data.status=='valid'){

            if(window.outerWidth<450){

              document.getElementById('home').insertAdjacentHTML('beforebegin',`
                <div id="loggedIn">
                  <img class="userIcon" src = ${require('../images/user.jpg')}/>
                  <span class="userButton">${localStorage.getItem('userName')}</span>
                </div>
              `)
            document.getElementById('loginPhoneButton').style.display="none";
            document.getElementById('logo').style.display="block";





            }
            else{
              
              document.getElementById('login').insertAdjacentHTML('afterend',`
              <div id="loggedIn">
                <img class="userIcon" src = ${require('../images/user.jpg')}/>
                <span class="userButton">${localStorage.getItem('userName')}</span>
              </div>
              `)
            document.getElementById('login').style.display="none";
            document.getElementById('logo').style.display="block";

            }

          }
          else{

          localStorage.removeItem('token')
          localStorage.removeItem('userName');
          alert('your session has expired')

          // window.location.reload();

          }

        })
        // .catch((error)=>{
        //   alert("something has went wrong");
        // })

      }

    }

  }
  
  render(){
    
    // Push.create("Travel Companion",{body:'Welcome to Travel Companion',timeout:4000,icon:require('./images/logo.jpg')});

    return(

      <div id="header">
        <img id="menu" src = {require('../images/menu.png')}/>
        <p id="headertitle">Travel Companion</p>
        <input type="text" id="searchbar" placeholder="Search here"/>
        <button className="btn btn-primary" type="button" id="searchButton">Search</button>
        
        <button  className="btn btn-success" type="button" id="login">Login</button>
        <img id="logo" src = {require('../images/logo5.jpg')}/>
        {/* <img id="heart2" src = {require('./images/heart.png')}/> */}
        <img id="heart2" src = {require('../images/heart.png')}/>
      </div>

    );
  
  }

  componentDidMount(){

    this.verifyToken();
  }


}

export default Header;