import { useFormikForm, useAuth } from "../../hooks";
import { Form } from "semantic-ui-react";
import { UserValues, UserValitations } from "../../validations";

function UserForm() {
  const { user, updateUser } = useAuth();

  const newValueForm = (preValue, newValue) => {
    let newObject = { ...preValue };
    for (let key in newValue) {
      if (preValue.hasOwnProperty(key) && newValue[key] !== "") {
        newObject[key] = newValue[key];
      }
    }
    return newObject;
  };

  const onSubmitUser = (formValues, setRes) => {
    const nullValidation = Object.values(formValues).every((valor) => !valor);
    if (nullValidation) {
      setRes("No envies datos vacios");
      return;
    }

    const newFormValue = newValueForm(user, formValues);
    updateUser(newFormValue);
    setTimeout(() => {
      location.reload();
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
  } = useFormikForm(UserValues, UserValitations, onSubmitUser);

  return (
    <Form className="register-form" onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field>
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
        <Form.Field>
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
        <Form.Field>
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
        <Form.Field>
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
      <Form.Field>
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
        <Form.Field>
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
        <Form.Field>
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
      {res && <p className="res">{res}</p>}
      <Form.Button type="submit" fluid disabled={loading}>
        {loading ? "Actualizando..." : "Actualizar"}
      </Form.Button>
    </Form>
  );
}

export { UserForm };
