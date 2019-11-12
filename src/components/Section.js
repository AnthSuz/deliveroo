import React from "react";
import Card from "./Card";

const Section = props => {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="wrapper_inside">
            {Object.keys(props.section).map((category, index) => {
              return (
                <div key={index} className="menu">
                  <h2>{category}</h2>

                  <Card category={category} section={props.section} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
