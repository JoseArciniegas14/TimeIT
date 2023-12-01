import { useState } from "react";
import { useAuth } from "../../hooks";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, valitations } from "../../validations";
import { FetchError } from "../error/FetchError";
import { Auth } from "../../data/Auth";
import "../../css/style.css";
import "../../css/tailwindcss/tailwind.css"; // Import Tailwind CSS


const authController = new Auth();

function LoginForm({ openLogin }) {


  
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
    <body className="m-5 p-10">
    <div className="overlap">
    <div className="background"></div>
    <div className="swich-mode">
            <div className="overlap-group">
                <div className="register-mode"></div>
                <div className="login-mode"></div>
            </div>
        </div>
    <Form className="login-form login-black flex flex-col items-center justify-center h-screen" onSubmit={handleSubmit}>
    {/* <div className="background "></div> */}
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
          {errors.email && <p className="text-red-500 error">{errors.password}</p>}
        </Form.Field>
      </Form.Group>
      <Form.Button type="submit" fluid>
        iniciar sesión
      </Form.Button>
      {error && <FetchError error={error} />}
    </Form>
    </div>
    </body>
  );
}

export { LoginForm };
