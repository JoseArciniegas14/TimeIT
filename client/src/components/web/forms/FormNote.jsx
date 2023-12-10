import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import { NotesValues, NotesValitations } from "../../../validations";
import { useWeb, useFormikForm } from "../../../hooks";
import { v4 as uuidv4 } from "uuid";

function FormNote({ info, handleInfo }) {
  const { updateWebState, updateBtnAside, updateFormState } = useWeb();

  const onSubmitNote = (formValues) => {
    try {
      if (!info) {
        const newValue = { id: uuidv4(), ...formValues };
        updateWebState("notes", "create", newValue);
      }
      const newValue = { id: info.id, ...formValues };
      updateWebState("notes", "update", newValue);
    } finally {
      updateBtnAside("btnNotes", false);
      updateFormState("formNotes", false);
      handleInfo(null);
    }
  };

  const NotesInfo = () => {
    const newInfo = { ...info };
    delete newInfo.id;
    return newInfo;
  };

  const { values, handleSubmit, handleBlur, handleChange } = useFormikForm(
    info !== null ? NotesInfo : NotesValues,
    NotesValitations,
    onSubmitNote
  );

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      {info && (
        <Button
          color="red"
          inverted
          onClick={() => {
            updateFormState("formNotes", false);
            updateWebState("notes", "delete", { id: info.id });
            handleInfo(null);
          }}
        >
          <Icon name="remove" /> Borrar Nota
        </Button>
      )}
      <Button
        color="red"
        inverted
        onClick={() => {
          updateBtnAside("btnNotes", false);
          updateFormState("formNotes", false);
          handleInfo(null);
        }}
      >
        <Icon name="remove" /> Cerrar Nota
      </Button>

      <Form.Field>
        <Form.Input
          name="title"
          type="text"
          placeholder="Titulo de la Nota..."
          value={values.title}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <TextArea
          name="content"
          placeholder="Contenido de la Nota..."
          value={values.content}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Button type="submit" fluid>
        {info !== null ? "Actualizar Nota" : "Crear Nota"}
      </Form.Button>
    </Form>
  );
}

export { FormNote };
