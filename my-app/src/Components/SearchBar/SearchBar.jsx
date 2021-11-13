/** @format */

import { Component } from "react";
import SearchResult from "./SearchResult";
import Form from "react-bootstrap/Form";

class SearchBar extends Component {
  state = {
    searchData: []
  };

  componentDidMount() {
    this.fetchResult()
  }
  fetchResult = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=907b4b85&s=horror"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.Search);

        this.setState({ searchData: data.Search });
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
    }
  };


  render() {
    return (
      <div>
        <Form.Group>
          <Form.Control size="sm" type="text" placeholder="Small text" />
        </Form.Group>

        <SearchResult searchData={this.state.searchData} />
      </div>

    );
  }
}

export default SearchBar;
