import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import ImageList from "./components/ImageList";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=36866850-741ef54c8ea18c5fa58415634&q=${entry}&image_type=photo`
    );
    setImages(response.data.hits);
  };

  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <SearchInput onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App
