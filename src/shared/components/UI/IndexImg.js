import React from "react";

const IndexImg = (props) => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}${props.src}`}
        alt={props.alt}
        style={{
          width: props.width,
          height: props.height,
        }}
      />
    </div>
  );
};

export default IndexImg;
