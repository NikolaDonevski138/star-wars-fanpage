export const isValidEmail = (email) => {

  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email)) {
    alert('enter valid email');
    return false;
  }

  return true;
}
