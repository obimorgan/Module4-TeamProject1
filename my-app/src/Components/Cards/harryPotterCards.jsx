/** @format */

import { Component } from "react";
import Card from "react-bootstrap/Card";
import HarryPotterItem from "./HaryPotterItem";

class HarryPotterCards extends Component {
  state = {
    harryPotterData: []
  };

  componentDidMount() {
    this.fetcHarry();
  }

  fetcHarry = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=907b4b85&s=harry"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.Search);

        this.setState({ harryPotterData: data.Search });
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      
      <>
        {
            <HarryPotterItem harryPotterData={this.state.harryPotterData}/>
        }
      
      </>
    );
  }
}

export default HarryPotterCards
