import { useFormikForm } from "../../hooks";
import { Form } from "semantic-ui-react";
import { RegisterValues, RegisterValitations } from "../../validations";
import { Auth } from "../../data";

const authController = new Auth();

function RegisterForm({ openLogin }) {
  const onSubmitRegister = async (formValues, setRes) => {
    const data = await authController.register(formValues);
    if (typeof data !== "object") {
      setRes(data);
      return;
    }
    const { msg } = data;
    setRes(msg);
    setTimeout(() => {
      openLogin();
    }, 3000);
  };

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    res,
    loading,
  } = useFormikForm(RegisterValues, RegisterValitations, onSubmitRegister);

  return (
    <Form className="register-form" onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>
            Nombre:
            <Form.Input
              name="name"
              type="text"
              placeholder="Nombre"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          {errors.name && <p className="text-red-500 error">{errors.name}</p>}
        </Form.Field>
        <Form.Field required>
          <label>
            Edad:
            <Form.Input
              name="age"
              type="number"
              placeholder="Edad"
              value={values.age}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          {errors.age && <p className="text-red-500 error">{errors.age}</p>}
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>
            Pais:
            <Form.Input
              name="country"
              type="text"
              placeholder="Pais"
              value={values.country}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          {errors.country && (
            <p className="text-red-500 error">{errors.country}</p>
          )}
        </Form.Field>
        <Form.Field required>
          <label>
            Ciudad:
            <Form.Input
              name="city"
              type="text"
              placeholder="Ciudad"
              value={values.city}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          {errors.city && <p className="text-red-500 error">{errors.city}</p>}
        </Form.Field>
      </Form.Group>
      <Form.Field required>
        <label>
          Telefono:
          <Form.Input
            name="phone"
            type="number"
            placeholder="Telefono"
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </label>
        {errors.phone && <p className="text-red-500 error">{errors.phone}</p>}
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>
            Email:
            <Form.Input
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="username"
            />
          </label>
          {errors.email && <p className="text-red-500 error">{errors.email}</p>}
        </Form.Field>
        <Form.Field required>
          <label>
            Contraseña:
            <Form.Input
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </label>
          {errors.password && (
            <p className="text-red-500 error">{errors.password}</p>
          )}
        </Form.Field>
      </Form.Group>
      <Form.Button type="submit" fluid disabled={loading}>
        {loading ? "Registrando..." : "Registrarse"}
      </Form.Button>
      {res && <p className="res">{res}</p>}
    </Form>
  );
}

export { RegisterForm };
// ? TAREA : crear el sistema de validacion individual de cada input del formulario
