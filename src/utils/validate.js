export const checkValidData = (email, password, name = null) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  // ✅ Only check name if provided (Sign Up case)
  if (name !== null && name !== undefined) {
    const isNameValid = /^[A-Z][a-zA-Z ]{1,29}$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  return null; // No errors
};
