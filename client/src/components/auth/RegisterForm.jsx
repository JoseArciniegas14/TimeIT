import { useState } from "react";
import { useRegister } from "../../hooks";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, valitations } from "../../validations";
import { FetchError } from "../error/FetchError";
import { Auth } from "../../data/Auth";

const authController = new Auth();

function RegisterForm({ openLogin }) {
  const { updateData } = useRegister();
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
        const res = await authController.register(formValue);
        console.log(res);
        openLogin();
      } catch (err) {
        setError(err);
      }
    },
  });

  return (
    <Form className="register-form" onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Nombre:</label>
          <Form.Input
            name="name"
            type="text"
            placeholder="Nombre"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 error">{errors.name}</p>}
        </Form.Field>
        <Form.Field required>
          <label>Edad:</label>
          <Form.Input
            name="age"
            type="number"
            placeholder="Edad"
            value={values.age}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.age && <p className="text-red-500 error">{errors.age}</p>}
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Pais:</label>
          <Form.Input
            name="country"
            type="text"
            placeholder="Pais"
            value={values.country}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.country && (
            <p className="text-red-500 error">{errors.country}</p>
          )}
        </Form.Field>
        <Form.Field required>
          <label>Ciudad:</label>
          <Form.Input
            name="city"
            type="text"
            placeholder="Ciudad"
            value={values.city}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.city && <p className="text-red-500 error">{errors.city}</p>}
        </Form.Field>
      </Form.Group>
      <Form.Field required>
        <label>Telefono:</label>
        <Form.Input
          name="phone"
          type="number"
          placeholder="Telefono"
          value={values.phone}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500 error">{errors.phone}</p>}
      </Form.Field>
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
        Register
      </Form.Button>
      {error && <FetchError error={error} />}
    </Form>
  );
}

export { RegisterForm };
// ? TAREA : crear el sistema de validacion individual de cada input del formulario
