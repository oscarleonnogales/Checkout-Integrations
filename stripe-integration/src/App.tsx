import "./App.css";
import { mockData } from "./config/mockData";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { SyntheticEvent } from "react";

const stripePromise = loadStripe(
  "pk_test_51MHZUKKyyfImt4OsJ035rBwUKSjWk3z6fEYPa7dPEI6nay3mkmpZmLBA64qBoDqlsBI4ITialGEBBm23BtXblOdk00apAmkBTw"
);

function App() {
  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: SyntheticEvent) => {
      console.log("trying to submit");

      event.preventDefault();

      if (elements == null) {
        return;
      }

      // @ts-ignore
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        // @ts-ignore
        card: elements.getElement(CardElement),
      });
      if (!error) {
        fetch("http://localhost:3000/create-checkout-session", {
          method: "POST",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              alert("Payment was Succesful");
            }
          });
      }
    };

    return (
      <form onSubmit={handleSubmit} className="stripe-form">
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay with Stripe
        </button>
      </form>
    );
  };

  return (
    <>
      <div className="App">
        <h1>Checkout Integration with Stripe!</h1>
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
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
}

export default App;
