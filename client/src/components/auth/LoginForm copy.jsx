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

  const formik = useFormik({
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
    <div className="m-5 p-10">
      <Form className="login-form login-black flex flex-col items-center justify-center h-screen" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.errors.email ? 'border-red-500' : ''}`}
          />
          {formik.errors.email && <p className="text-red-500 text-xs italic">{formik.errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.errors.password ? 'border-red-500' : ''}`}
          />
          {formik.errors.password && <p className="text-red-500 text-xs italic">{formik.errors.password}</p>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          iniciar sesión
        </button>
        {error && <FetchError error={error} />}
      </Form>
    </div>
  );
}

export { LoginForm };
