import { useState, useEffect } from "react";
import axios from "axios";
import { useSwapiShop } from "../../store/useSwapiShop";
import { isValidForm } from "./helpers/is-valid-form";
import { isValidEmail } from "./helpers/is-valid-email";
import { ValidationInputMessage } from "./validation-input-message";
import { PaymentInput } from "./payment-input";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "@mui/joy/Button";

import style from "./payment.module.scss";

const Payment = () => {
  const { setTotalPriceForPayments, totalPriceForPaymentInChart } =
    useSwapiShop();

  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [validationFormMessage, setValidationFormMessage] = useState("");

  useEffect(() => {
    setTotalPriceForPayments();
  }, []);

  const handleChange = (e, setter) => {
    e.preventDefault();
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (
      !isValidForm([name, email, country, postalCode, city, address])
    ) {
      setValidationFormMessage("please populate all fields");
      return;
    }

    if (!isValidEmail(email)) {
      return false;
    }

    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: totalPriceForPaymentInChart * 100,
          id,
          name: name,
          email: email,
          state: country,
          postalCode: postalCode,
          city: city,
          address: address,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form>
          <div className={style.paymentContainer}>
            <div className={style.paymentElements}>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="Name"
                  type="text"
                  handleChange={handleChange}
                  setter={setName}
                />
                <ValidationInputMessage
                  validationFormMessage={validationFormMessage}
                  inputStateValue={name}
                  inputLabel={"name"}
                />
              </div>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="Email"
                  type="email"
                  handleChange={handleChange}
                  setter={setEmail}
                />
                <ValidationInputMessage
                  validationFormMessage={validationFormMessage}
                  inputStateValue={email}
                  inputLabel={"email"}
                />
              </div>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="Country"
                  type="text"
                  handleChange={handleChange}
                  setter={setCountry}
                />
                <ValidationInputMessage
                  validationFormMessage={validationFormMessage}
                  inputStateValue={country}
                  inputLabel={"country"}
                />
              </div>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="Postal Code"
                  type="text"
                  handleChange={handleChange}
                  setter={setPostalCode}
                />
                <ValidationInputMessage
                  validationFormMessage={validationFormMessage}
                  inputStateValue={postalCode}
                  inputLabel={"postal Code"}
                />
              </div>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="City"
                  type="text"
                  handleChange={handleChange}
                  setter={setCity}
                />
                <ValidationInputMessage
                  validationFormMessage={validationFormMessage}
                  inputStateValue={city}
                  inputLabel={"city"}
                />
              </div>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="Address"
                  type="text"
                  handleChange={handleChange}
                  setter={setAddress}
                />
                <ValidationInputMessage
                  validationFormMessage={validationFormMessage}
                  inputStateValue={address}
                  inputLabel={"address"}
                />
              </div>
              <div className={style.cardElementContainer}>
                <CardElement className={style.cardElement} />
              </div>
              <div className={style.paymentButtonContainer}>
                <Button onClick={handleSubmit} sx={{ minWidth: "150px" }}>
                  Pay
                </Button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <h2>You just bought our products !</h2>
        </div>
      )}
    </>
  );
};

export default Payment;
