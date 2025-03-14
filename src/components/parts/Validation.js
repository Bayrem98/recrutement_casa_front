export default function Validation(values) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

  if (values.nom === "") {
    errors.nom = "Name is Required";
  }

  if (values.email === "") {
    errors.email = "Email is Required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email did'nt match";
  }

  return errors;
}
