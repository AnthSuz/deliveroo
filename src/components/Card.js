import React from "react";
import Icon from "./Icon";
const Card = props => {
  return (
    <>
      <div className="menu-section">
        {props.section[props.category].map(meal => {
          return (
            <div key={meal.id} className="menuItem">
              <div
                className="card"
                onClick={() => {
                  console.log("clic card");
                  console.log(meal);

                  // props.quantityAdd(toto);
                  props.quantityAdd(meal);
                }}
              >
                <div className="card_text">
                  <h3>{meal.title}</h3>
                  <p className="card_description">
                    {meal.description === undefined ? null : meal.description}
                  </p>
                  <div className="align_price_popular">
                    <p className="card_price">{meal.price} €</p>
                    <p>
                      {meal.popular === true ? (
                        <span className="card_popular">
                          <Icon />
                          Populaire
                        </span>
                      ) : null}{" "}
                    </p>
                  </div>
                </div>
                <div className="card_img">
                  {meal.picture === undefined ? null : meal.id ===
                    "1519055545-97" ? null : (
                    <img src={meal.picture} alt="kiff" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
