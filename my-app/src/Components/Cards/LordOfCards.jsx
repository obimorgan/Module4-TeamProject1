/** @format */

import { Component } from "react";
import Card from "react-bootstrap/Card";
import LordOfItem from "./LordOfItem";

class LordOfCards extends Component {
  state = {
    LordOfData: []
  };

  componentDidMount() {
    this.fetchLord();
  }

  fetchLord = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=907b4b85&s=Lord"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.Search);

        this.setState({ LordOfData: data.Search });
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
            <LordOfItem LordOfData={this.state.LordOfData}/>
        }
      
      </>
    );
  }
}

export default LordOfCards