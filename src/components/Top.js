import React from "react";

const Top = props => {
  return (
    <>
      <div className="top">
        <div className="wrapper">
          <div className="align_top">
            <div className="text_top">
              <h1>{props.name}</h1>
              <p>{props.description}</p>
            </div>
            <div className="img_top">
              <img src={props.photo} alt="test" className="img_top" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
