import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BaseIcon from "./BaseIcon";

const ShowCreatedPool = (props: {
  currencyA: {
    name: string;
    symbol: string;
    image: string;
    current_price: number;
  };
  currencyB: {
    name: string;
    symbol: string;
    image: string;
    current_price: number;
  };
  pools: {
    pair: string;
  }
}) => {
  // const [pool, setpool] = useState();
  const { currencyA, currencyB, pools } = props;

  useEffect(() => {
    if (currencyA && currencyB) {
      //some logic to find the right pool and set it as created
    }
  });

  return (
    <div>
      <div className="w-500 d-flex">
        {!!currencyA.label
          ? (
            <div>
              <BaseIcon image={currencyA.image} />
              <p className="d-flex flex-column">
                <span>
                  {currencyA.label}
                </span>
              </p>
            </div>
          ) : ''}
        {!!currencyB.label
          ? (
            <div>
              <BaseIcon image={currencyB.image} />
              <p className="d-flex flex-column">
                <span>
                  {currencyB.label}
                </span>
              </p>
            </div>)
          : ''}
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  selected: {
    currencyA: Object;
    currencyB: Object;
  },
  pools: {
    pools: Object;
  }
}) => ({
  currencyA: state.selected.currencyA,
  currencyB: state.selected.currencyB,
  pools: state.pools.pools,
});

const connector = connect(mapStateToProps);
export default connector(ShowCreatedPool);
