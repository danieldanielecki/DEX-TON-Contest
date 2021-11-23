
import { connect } from 'react-redux'

const BuySellSummary = (props: {
  currencyA: { name: string, symbol: string },
  currencyB: { name: string, symbol: string },
  method: { type: string },
  amount: { type: string },
}) => {
  const { currencyA, currencyB, method, amount } = props;
   // if()
    // if (currency === "A") {
    //   const newValueA: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
    //   // setCurrencyAval(newValueA);
    //   // setCurrencyBval(newValueA * (currencyB.sellRate / currencyA.sellRate));
    // } else {
    //   const newValueB: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
    //   // setCurrencyBval(newValueB);
    //   // setCurrencyAval(newValueB * (currencyA.sellRate / currencyB.sellRate));
    // }
  return (
    <>
      {currencyA.name && currencyB.name && method && amount
        ?
        (<div className="w-50">
          <div className="">
            <p>You want to {method.type} {amount} {currencyA.name}</p>
            <p>That will cost you ... {currencyB.name}</p>
          </div>
        </div>)
        :
        <span> fill in the fields</span>
      }
    </>
  );
};

const mapStateToProps = (state: { selected: { currencyA: Object, currencyB: Object, method: Object, amount: String} }) => ({
  currencyA: state.selected.currencyA,
  currencyB: state.selected.currencyB,
  method: state.selected.method,
  amount: state.selected.amount,
});

const connector = connect(mapStateToProps)

export default connector(BuySellSummary);
