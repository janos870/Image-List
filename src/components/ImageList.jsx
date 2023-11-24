import React from "react";

const ImageList = (props) => {
  const imageStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "-5px",// To compensate for default spacing between divs
    marginTop: "50px",
  };

  const images = props.images.map((image) => (
    <div key={image.id} style={{ width: "30%", marginBottom: "20px" }}>
      <img src={image.webformatURL} alt="imagelist" style={{ width: "100%" }} />
    </div>
  ));

  return <div style={imageStyle}>{images}</div>;
};

export default ImageList;

