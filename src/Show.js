import React,{Component} from 'react';
import axios from 'axios';
import Login from "./Login";
import ReactDOM from 'react-dom';
import { bigIntLiteral } from '@babel/types';

class Show extends Component{
  
  constructor(props){
    super(props)
    this.state={
        value:"name",
        getimg:false
    }

    this.fav=()=>{
      axios.post('http://localhost:8080/http://localhost:5000/verifyToken',{'token':localStorage.getItem('token')})
      .then((result)=>{
        if(result.data.status=='valid'){
          alert("Added to Favourites");
          document.getElementById("list").innerHTML = "";
          var name = document.getElementById("destinationTitle").textContent;
          document.getElementById("listItem").insertAdjacentHTML('beforeend',
              ` <li class="alert alert-warning alert-dismissable">
                  <button type="button" class="close" data-dismiss="alert">×</button>
                  ${name}
                </li>
              `)
        }
        else{
          alert("Login first");
          document.getElementById('transparentBack').style.display="block";
          document.getElementById('form').style.height="62vh";
          ReactDOM.render(<Login/>,document.getElementById('form'));
        }
      })

    }

    

    


    document.addEventListener('click',(e)=>{

      if(e.target.className=='destinationIdentity'){
        // document.getElementById("welcome").style.display = "none";
        //document.getElementById('first').innerHTML="";
        var destinationName = e.target.textContent;
        document.getElementById('destinationTitle').textContent = destinationName;
        document.getElementById("favButtonDiv").style.display="block";
        var contentJSON = JSON.parse(localStorage.getItem('content'));
        document.getElementById('first').innerHTML = `<img id="loading2" src="${require('./images/loading2.gif')}"/>`
        document.getElementById("main").style.display = "none";
        document.getElementById("content").style.display = "block";

        axios.post("http://localhost:8080/http://localhost:5000/list")
        .then((result)=>{
          
          document.getElementById('first').innerHTML = "";
          for(var i=0;;i++){
            if(result.data[i].title==destinationName){

              //var address = "${result.data[i].img}"
              //document.getElementById("image").style.backgroundImage = "url('${result.data[i].img}')";
              document.getElementById("first").insertAdjacentHTML("beforeend",`
                      
                         <img id="destinationImg" src="${result.data[i].img}"/>`);        
              
                         break;
            }
          }
        })


        axios.post('http://localhost:8080/http://localhost:5000/sendData',{'destinationName':destinationName})
        .then((result)=>{

          // if(result.data[this.state.j-1]!=undefined){
          //   document.getElementById('itemlist').innerHTML="";
  
          // }
          // else {
          //   return ; // Gets out of function
          // }
          document.getElementById('ing').innerHTML="";
            document.getElementById('ing').insertAdjacentHTML('beforeend',`
              ${result.data}
            `)

            
        })
        .catch()

      }
    })


}
  render(){
    return(
      <div id="show" class="section-dark">
        <div id="main">
            <div class="pimg1">
              <div class="ptext">
                <span class="border">
                  Travel Companion
                </span>
              </div>
            </div>
            <section class="section section-light">
              <h2>Why Travel Companion ?</h2>
              <p>
                Travel Companion is a project started to help people find the best places to visit in the world. 
              </p>
            </section>

            <div class="pimg2">
              <div class="ptext">
                <span class="border trans">
                  Paris
                </span>
              </div>
            </div>

            <section class="section section-dark">
              <h2>Section Two</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
              </p>
            </section>

            <div class="pimg3">
              <div class="ptext">
                <span class="border trans">
                  Big City
                </span>
              </div>
            </div>
        </div>













        {/* <div id="midCloseDiv">
          <button type="submit" class="btn btn-light" id="midCloseButton">X</button>
        </div> */}
        <div id="content" class="section-dark">
          <h1 id='destinationTitle'></h1>
          <div id="first"></div>


          <section id="second" class="section section-dark">
              <p id="ing"></p>
              <div id="favButtonDiv">
                <button class="btn btn-primary" id="favButton" onClick={this.fav}>Add to Favourites</button>
              </div>
            </section>
        </div>
      </div>
    )
  }
}
export default Show;