import style from './payment.module.scss';

export const PaymentInput = ({
    label,
    placeholder,
    type
  }) => {
  return (
    <div className={style.paymentElement}>
        <div>
            <label>{label}</label>
        </div>
            <input
              className={style.input}
              placeholder={placeholder}
              type={type}
              required
            />
    </div>
  )
}