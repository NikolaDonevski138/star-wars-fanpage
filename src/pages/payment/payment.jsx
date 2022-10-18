import { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import { useSwapiShop } from '../../store/useSwapiShop';
import axios from 'axios';
import { PaymentInput } from './payment-input';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import style from './payment.module.scss';

const Payment = () => {

  const { setTotalPriceForPayments, totalPriceForPaymentInChart } = useSwapiShop();

  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    setTotalPriceForPayments();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
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
            address: address
          });

          if(response.data.success) {
            console.log("Successful payment");
            setSuccess(true);
          }

        } catch (error) {
          console.log("Error", error)
        }
      } else {
        console.log(error.message)
      }
  }


  return (
    <>
      {!success ? (
        <form  onSubmit={handleSubmit}>
          <div className={style.paymentContainer}>
            <div className={style.paymentElements}>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className={style.paymentElement}>
               <PaymentInput
                  placeholder="Country"
                  type="text"
                />
              </div>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="Postal Code"
                  type="text"
                />
              </div>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="City"
                  type="text"
                />
              </div>
              <div className={style.paymentElement}>
                <PaymentInput
                  placeholder="Address"
                  type="text"
                />
              </div>
              <div className={style.cardElementContainer}>
                <CardElement className={style.cardElement} />
              </div>
              <div className={style.paymentButtonContainer}>
                <Button sx={{minWidth: '150px'}}>Pay</Button>
              </div>
            </div>
          </div>
        </form>
        ): (
          <div>
            <h2>You just bought our products !</h2>
          </div>
        )}
    </>
  )
}

export default Payment;