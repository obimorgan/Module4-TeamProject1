/** @format */

import { Component } from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import HorrorItem from './HorrorItem'

class Horror extends Component {
  state = {
    horrorData: []
  };

  componentDidMount() {
    this.fetchHorror();
  }

  fetchHorror = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=907b4b85&s=horror"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.Search);

        this.setState({ horrorData: data.Search });
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
          <Row>
            <HorrorItem horrorData={this.state.horrorData}/>
          </Row>
            
        }
      </>
    );
  }
}

export default Horror
