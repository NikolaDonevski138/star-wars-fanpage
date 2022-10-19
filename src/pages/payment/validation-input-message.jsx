export const ValidationInputMessage = ({validationFormMessage, inputStateValue, inputLabel}) => {
  console.log('validationMessage', validationFormMessage)
  return (validationFormMessage.length && !inputStateValue.length) ? (
    <p style={{ fontSize: "12px", color: "red"}}>Please enter {inputLabel}</p>
  ): null
}