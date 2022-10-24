
import style from './successful-payment.module.scss';

export const SuccessfulPayment = () => {
  return (
    <div className={style.successfulPaymentContainer}>
      <div className={style.imgContainer}>
        <img className={style.img} src="assets/images/dart_vader/dart_vader.png" alt="dart-vader" />
        <p className={style.content}>Thanks for buying our products !</p>
      </div>
    </div>
  )
}