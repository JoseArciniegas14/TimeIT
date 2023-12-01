import { useState } from "react";
import { useAuth } from "../../hooks";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, valitations } from "../../validations";
import { FetchError } from "../error/FetchError";
import { Auth } from "../../data/Auth";
import "../../css/style.css";
import "../../tailwindcss/tailwind.css"; // Import Tailwind CSS


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
    <Form className="m-5 p-10" onSubmit={handleSubmit}>
      <div className="login-black flex flex-col items-center justify-center h-screen">
        <div className="overlap">
          {/* Other overlapping elements */}
          <form action="/login" method="POST" className="gray-950">
            <div className="titulo-form mb-4">BIENVENIDO</div>
            <Form.Group widths="equal" className="mb-4">
              <Form.Input
                name="email"
                type="email"
                placeholder="Email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="email-bloque text-wrapper-2"
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="Contraseña"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="password-bloque text-wrapper-2"
                required
              />
            </Form.Group>
            <Form.Button type="submit" className="iniciar-sesion text-wrapper-4">
              Iniciar sesión
            </Form.Button>
          </form>
          {/* Other overlapping elements */}
        </div>
      </div>
      {error && <FetchError error={error} />}
    </Form>,

<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
<div className="flex-shrink-0">
  <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
</div>
<div>
  <div className="text-xl font-medium text-black">ChitChat</div>
  <p className="text-gray-500">You have a new message!</p>
</div>
</div>  
  );
}

export { LoginForm };
