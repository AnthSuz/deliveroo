import React from "react";
import Card from "./Card";
import Product from "./Product";

const Section = props => {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="wrapper_inside">
            {Object.keys(props.section).map((category, index) => {
              if (props.section[category].length > 0) {
                return (
                  <div key={index} className="menu">
                    <h2>{category}</h2>

                    <Card
                      category={category}
                      section={props.section}
                      product={props.product}
                      quantityAdd={props.quantityAdd}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <Product
            product={props.product}
            quantityDecrease={props.quantityDecrease}
            quantityAdd={props.quantityAdd}
            tip={props.tip}
            tipDecrease={props.tipDecrease}
            tipAdd={props.tipAdd}
          />
        </div>
      </section>
    </>
  );
};

export default Section;
