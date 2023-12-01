const useFormik = (initialValues, validations) => {
  const { values, errors, handleSubmit, handleBlur, handleChange, onSubmit } =
    useFormik({
      initialValues: initialValues(),
      validationSchema: validations(),
      validateOnChange: false,
      validateOnBlur: true,
    });

  return { values, errors, handleSubmit, handleBlur, handleChange, onSubmit };
};

export { useFormik };
