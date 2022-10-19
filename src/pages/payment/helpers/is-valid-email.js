export const isValidEmail = (email) => {

  let regex=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;

  if (!regex.test(email)) {
    return false;
  }

  return true;
}
