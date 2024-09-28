import clsx from "clsx";
import css from "./BookingForm.module.css";
import { Field, Form, Formik } from "formik";

export default function BookingForm() {
  return (
    <div className={css.bookingContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formDescr}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
      // onSubmit={handleSubmit}
      // initialValues={initialValues}
      // validationSchema={FeedbackSchema}
      >
        <Form className={css.form} autoComplete="off">
          <Field
            className={css.input}
            type="text"
            placeholder="Name*"
            label="name"
            name="name"
            // id={nameId}
            required
          />
          <Field
            className={css.input}
            type="email"
            placeholder="Email*"
            label="email"
            name="email"
            // id={emailId}
            required
          />
          <Field
            className={css.input}
            type="email"
            placeholder="Email*"
            label="email"
            name="email"
            // id={emailId}
            required
          />
          <Field
            as="textarea"
            name="comment"
            className={clsx(css.input, css.textArea)}
            // id={comentId}
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
