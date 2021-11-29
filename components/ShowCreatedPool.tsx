import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BaseIcon from "./BaseIcon";

const ShowCreatedPool = (props: {
  currencyA: {
    label: string;
    symbol: string;
    image: string;
    current_price: number;
  };
  currencyB: {
    label: string;
    symbol: string;
    image: string;
    current_price: number;
  };
}) => {
  const { currencyA, currencyB } = props;
  useEffect(() => {
    if (currencyA && currencyB) {
      //some logic to find the right pool and set it as created
    }
  });

  return (
    <div>
      <div className="w-500 d-flex">
        {/* @ts-ignore */}
        {!!currencyA.label ? (
          <div>
            <BaseIcon image={currencyA.image} />
            <p className="d-flex flex-column">
              {/* @ts-ignore */}
              <span>{currencyA.label}</span>
            </p>
          </div>
        ) : (
          ""
        )}
        {/* @ts-ignore */}
        {!!currencyB.label ? (
          <div>
            <BaseIcon image={currencyB.image} />
            <p className="d-flex flex-column">
              {/* @ts-ignore */}
              <span>{currencyB.label}</span>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  selected: {
    currencyA: any;
    currencyB: any;
  },
}) => ({
  currencyA: state.selected.currencyA,
  currencyB: state.selected.currencyB,
});

const connector = connect(mapStateToProps);
// @ts-ignore
export default connector(ShowCreatedPool);
