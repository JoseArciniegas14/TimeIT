import { useState } from "react";
import { useAuth, useRegister } from "../../hooks";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, valitations } from "../../validations";
import { FetchError } from "../error/FetchError";
import { Auth } from "../../data/Auth";


const authController = new Auth();

function LoginForm({openLogin}) {


  
  const { updateData } = useAuth();
  const [error, setError] = useState(null);

  const { values, errors, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: initialValues(),
    validationSchema: valitations(),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (formValue) => {
      try {
        setError(null);
        updateData(formValue);
        const res = await authController.login(formValue);
        console.log(res);
        openLogin();
      } catch (err) {
        setError(err);
      }
    },
  });

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Email:</label>
          <Form.Input
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 error">{errors.email}</p>}
        </Form.Field>
        <Form.Field required>
          <label>Contraseña:</label>
          <Form.Input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 error">{errors.email}</p>}
        </Form.Field>
      </Form.Group>
      <Form.Button type="submit" fluid>
        Login
      </Form.Button>
      {error && <FetchError error={error} />}
    </Form>
  );
}

export { LoginForm };
