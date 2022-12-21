import "./App.css";
import { mockData } from "./config/mockData";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

function App() {
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <>
      <div className="App">
        <h1>Checkout Integration with PayPal!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          {mockData.cart.products.map((product) => (
            <div className="product" key={product.id}>
              <div>{product.name}</div>
              <div>{product.quantity}</div>
              <div>${product.price}</div>
            </div>
          ))}
          <div className="cart-total">Total: ${mockData.cart.total}</div>
        </div>
      </div>
      <>
        {isPending ? <div className="spinner" /> : null}
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: mockData.cart.total.toString(),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            // @ts-ignore
            return actions.order.capture().then((details) => {
              // @ts-ignore
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name}`);
            });
          }}
        />
      </>
    </>
  );
}

export default App;
