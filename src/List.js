import React,{Component} from 'react';
import axios from 'axios';
class List extends Component
{
  constructor()
  {
    super()
    this.prev=()=>{

      if(this.state.j>1)
      {
        this.setState({j:this.state.j-10})
        this.populate();
      }
    }
    this.next=()=>{


      if(this.val-this.state.j>=1)
      {
        this.setState({j:this.state.j+10})
        this.populate()
      }
    }
    this.state={
      j:1
    }
  
    this.val=0;
    this.populate=()=>
    {
      document.getElementById('itemlist').innerHTML="";
      document.getElementById('itemlist').innerHTML = `<img id="loading3" src="${require('./images/loading3.gif')}"/>`


      axios.post("http://localhost:8080/http://localhost:5000/list")
        .then((result)=>{

          localStorage.setItem('content',JSON.stringify(result));
          this.val = 30;


          if(result.data[this.state.j-1]!=undefined){
          document.getElementById('itemlist').innerHTML="";

          }
          else {
            return ; // Gets out of function
          }
  
          for(var i=this.state.j-1;i<this.state.j+9;i++)
          {
            if(result.data[i]==undefined)
              break;
            else{
              document.getElementById("itemlist").insertAdjacentHTML("beforeend",`
                <li class="items">
                  <p><img id="destinationimg" src=${result.data[i].img} /></p>
                   <p class="destinationIdentity"><b>${result.data[i].title}</b></p>
                 </li>

              `);
            }
          }
         document.getElementById("itemlist").insertAdjacentHTML('beforeend',`
           <div id="nav">
           <button id="prev" class="btn btn-primary">Prev</button>
           <button id="next" class="btn btn-primary">Next</button>
           </div>
         `)

        })

        .catch((error)=>{
          alert("something has went wrong");
        })
    }

    

    document.addEventListener("click",(e)=>{
      if(e.target.id=="next")
      {
        this.next();

      }
      else if (e.target.id=="prev")
      {
        this.prev();
      }

    })

  }
  componentDidMount(){
    this.populate();
  }
  render(){

    return(
      <div id="listcontainer">
        <div id="listCloseDiv">
          <a href="javascript:void(0)" id="listCloseButton">&times;</a>
          {/* <button type="submit" class="btn btn-light" id="listCloseButton">X</button> */}
        </div>
        <h1 id="listTitle">Trending Places</h1>
        <br/>
      <ul id="itemlist">





      </ul>


      </div>
    );
  }

}

export default List ;