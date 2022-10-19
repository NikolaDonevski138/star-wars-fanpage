export const isValidForm = ([
  name,
  email,
  country,
  postalCode,
  city,
  address,
]) => {

  if (
    !name.toString().length ||
    !email.toString().length ||
    !country.toString().length ||
    !postalCode.toString().length ||
    !city.toString().length ||
    !address.toString().length
  ) {
    return false
  }

  return true;
};
