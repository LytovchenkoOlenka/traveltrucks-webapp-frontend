import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerField.css";
import PropTypes from "prop-types";

DatePickerField.PropTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
};

export default function DatePickerField({
  className,
  field,
  form,
  placeholder,
  ...props
}) {
  const [startDate, setStartDate] = useState(null);

  const handleChange = (date) => {
    setStartDate(date);
    form.setFieldValue(field.name, date);
  };

  return (
    <DatePicker
      className={className}
      formatWeekDay={(day) => day.slice(0, 3)}
      selected={startDate}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      placeholderText={placeholder}
      {...props}
    />
  );
}
