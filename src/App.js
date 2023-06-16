import React from "react";
import SearchInput from "./components/SearchInput";
import ImageList from "./components/ImageList";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  async onSearchSubmit(entry) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=36866850-741ef54c8ea18c5fa58415634&q=${entry}&image_type=photo`
    );
    console.log(response.data.hits);
    this.setState({ images: response.data.hits });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
