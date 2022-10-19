import style from './payment.module.scss';

export const PaymentInput = ({
    label,
    placeholder,
    type,
    handleChange,
    setter
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
              onChange={(e) => handleChange(e, setter)}
            />
    </div>
  )
}