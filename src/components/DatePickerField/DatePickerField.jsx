import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerField.css";

export default function DatePickerField({
  className,
  field,
  form,
  placeholder,
}) {
  const { name, value } = field; // Отримуємо назву та значення поля із `field`
  const { setFieldValue } = form;

  const handleChange = (date) => {
    setFieldValue(name, date); // Оновлюємо значення у `Formik` без локального стану
  };

  return (
    <DatePicker
      {...field} // Передаємо поле `field` з `Formik`
      className={className}
      formatWeekDay={(day) => day.slice(0, 3)}
      selected={value || null} // Використовуємо значення з `Formik` замість локального стану
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
      placeholderText={placeholder}
    />
  );
}
