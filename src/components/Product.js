import React from "react";
import Moins from "./Moins";
import Plus from "./Plus";

const Product = props => {
  let tab = [];
  const getProduct = () => {
    for (let i = 0; i < props.product.length; i++) {
      tab.push(
        <div className="product_test">
          <div className="product_quantity">
            <span
              onClick={() => {
                props.quantityDecrease(props.product[i]);
              }}
            >
              <Moins />
            </span>
            {props.product[i].quantity}
            <span
              onClick={() => {
                props.quantityAdd(props.product[i]);
              }}
            >
              <Plus />
            </span>
          </div>
          <div className="product_reste">{props.product[i].title}</div>
          <div className="product--price">{props.product[i].price} €</div>
        </div>
      );

      console.log(props.product[i].id);
      console.log(props.product[i].price);
    }
  };
  getProduct();

  const sousTotal = toto => {
    let sousTotal = 0;
    for (let i = 0; i < props.product.length; i++) {
      sousTotal =
        sousTotal + props.product[i].price * props.product[i].quantity;
    }
    return toto ? sousTotal + toto + props.tip : sousTotal;
  };

  return (
    <>
      {props.product.length !== 0 ? (
        <div className="product_align">
          <div className="product_content">
            <button className="green">Valider mon panier</button>
            <div className="product_align_green">{tab}</div>
            {/* {props.product} */}
            <div className="ss-total-total">
              <div className="test-ss-total">
                <p>Sous-total</p>
                <p>{sousTotal().toFixed(2)} €</p>
              </div>
              <div className="test-ss-total">
                <p>Frais de livraison</p>
                <p>2,50 €</p>
              </div>
              <div className="test-ss-total">
                <p>Tips</p>
                <div className="counter_tips">
                  {props.tip !== 0 ? (
                    <span
                      onClick={() => {
                        props.tipDecrease();
                      }}
                    >
                      <Moins />
                    </span>
                  ) : null}

                  <p>{props.tip}</p>
                  <span
                    onClick={() => {
                      props.tipAdd();
                    }}
                  >
                    <Plus />
                  </span>
                </div>
              </div>
            </div>

            <div className="product_total">
              <span>Total</span>
              <span className="product--price--total">
                {sousTotal(2.5).toFixed(2)} €
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="product_align">
          <div className="product_content">
            <button>Valider mon panier</button>
            <div className="product_quantity">{tab}</div>
            {/* {props.product} */}

            <p className="panier--vide">Votre panier est vide</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
