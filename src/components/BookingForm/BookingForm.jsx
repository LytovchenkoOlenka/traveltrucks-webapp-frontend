import clsx from "clsx";
import css from "./BookingForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name must consist of at least 3 characters")
    .max(40, "The name must contain a maximum of 40 characters")
    .required("Please fill in the field"),
  email: Yup.string()
    .min(6, "Email address must contain at least 6 characters")
    .max(30, "Email address must contain no more than 30 characters")
    .required("Please fill in the field")
    .email("Please enter a valid email address"),

  // Тимчасовий варіант для дати, в подальшому буде реалізація через react-datepicker
  date: Yup.string()
    .matches(dateRegex, "Please enter a valid date in the format DD/MM/YYYY")
    .required("Please fill in the field"),
});

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};
const handleSubmit = (values, actions) => {
  toast.success("Camper successfully booked!", {
    style: {
      color: "#101828",
      backgroundColor: "lightgreen",
    },
  });
  actions.resetForm();
};

//Тут ще буде додане висвічування помилок юзеру під кожним полем після валідації. І відправка форми тільки після проходження  всіх валідацій.

// const handleSubmit = (values, actions) => {
//   if (actions.isValid) {
//     toast.success("Camper successfully booked!", {
//       style: {
//         color: "#101828",
//         backgroundColor: "lightgreen",
//       },
//     });
//   } else {
//     toast.error("Please correct the errors in the form.");
//   }
//   actions.resetForm();
// };

export default function BookingForm() {
  return (
    <div className={css.bookingContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formDescr}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form} autoComplete="off">
          <Field
            className={css.input}
            type="text"
            placeholder="Name*"
            name="name"
            required
          />
          <Field
            className={css.input}
            type="email"
            placeholder="Email*"
            name="email"
            required
          />
          <Field
            type="text"
            className={css.input}
            placeholder="Booking date*"
            name="date"
            required
          />
          <Field
            as="textarea"
            name="comment"
            className={clsx(css.input, css.textArea)}
            placeholder="Comment"
            rows={3}
          />
          <button className="button" type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
