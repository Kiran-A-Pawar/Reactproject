import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

//import blankImg from "./blank.gif";

//import React, { useState } from "react";

import "./Style.css";
import "./flags.min.css";
//import Pagination from "./components/Pagination1";
//import countriesList from "./countries2.json";
import review from "./review.json";

class App extends Component {

  state = {
    search: ""
  };


  


  renderCountry = review => {
    const { search } = this.state;
    var code = review.reviewText.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
      }*/
      
    return (
        
      <div className="col-md-7" style={{ marginTop: "10px" }} >
        <Card >
          <CardBody>
            
            
            <CardTitle title={review.reviewText, review.countryName}>
             <div class="row"><button> <h6>{review.appStoreName}</h6></button>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

             <h4>{review.reviewHeading} </h4></div>
            <h5>  {review.reviewText.substring(0, 205)}
              {review.reviewText.length > 205 && "..."}</h5>
              <br/>
            <div class="row"> <b> <h5>{review.reviewUserName}</h5> </b> &nbsp; &nbsp; &nbsp; &nbsp; <b><h5>{review.reviewDate}</h5></b>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b><h5>{ review.version}</h5></b> &nbsp; &nbsp; &nbsp;<b><h5>{ review.countryName}</h5></b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <h5>{review.rating}</h5></div>
              
            </CardTitle>
          </CardBody>
        </Card>
      </div>
      
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCountries = review.filter( review => {
      return review.rating.toLowerCase().indexOf(search.toLowerCase()) !== -1;

    });
    



    return (
        <html>
        <body>
        <table>
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
   
              <div className="col"    class="stop" bgcolor = "#FFFFFF" width = "20%" height="70%">
              <tr><td>
                <Input
                  label="Search "
                  icon="search"
                  onChange={this.onchange}
                />
                
  </td></tr><br/><br/>

<h5>Filter by Rating</h5>
  
  <div className="col"    class="search2" bgcolor = "#FFFFFF" width = "40%" height="90%">
  <tr><td>
    <Input
      label="Search By Rating"
      icon="search"
      onChange={this.onchange}
    /><br/><br/>
    
    <h5>Filter by Version</h5><br/>
    <h6>   {review.rating}</h6>
</td></tr>
</div>
              </div>


              <div className="col" />
            </div>
            <div className="row">
              {filteredCountries.map(review => {
                return this.renderCountry(review);
              })}
            </div>
          </div>
        </main>


      </div>      
      </table>
      </body>
      </html>
    );
  }
}

export default App;
