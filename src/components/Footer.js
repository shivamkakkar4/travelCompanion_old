import React,{Component} from 'react';
class Footer extends Component{
constructor(){
    super()
    
}
render(){
    return(
        <div id="footer">
            <h3 id="footerTitle">Travel Companion</h3>
            <p></p>
            <p id="privacy">Privacy Policy</p>
            <button id="siteMap" class="btn btn-link">Site map</button>
            <div id="iconImage">
                <a href="https://www.facebook.com/shivam.kakkar.560">
                    <img class="icon" src = {require('../images/facebook.png')}/>
                </a>
                <a href="https://twitter.com/Shivam90082918">
                    <img class="icon" src = {require('../images/twitter.png')}/>
                </a>
                <a href="https://www.linkedin.com/in/shivam-kakkar-84833b145/">
                    <img class="icon" src = {require('../images/linkedIn.png')}/>
                </a>
            </div>
        </div>
    )
}

}
export default Footer;