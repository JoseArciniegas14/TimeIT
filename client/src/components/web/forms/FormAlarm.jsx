import { AlarmValues, AlarmValitations } from "../../../validations";
import { useWeb, useFormikForm } from "../../../hooks";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  TextArea,
  Button,
  Icon,
  Checkbox,
  Select,
} from "semantic-ui-react";

function FormAlarm({ info, handleInfo }) {
  const { updateWebState, updateBtnAside, updateFormState } = useWeb();

  const onSubmitAlarm = (formValues) => {
    try {
      if (!info) {
        const newValue = { id: uuidv4(), ...formValues };
        updateWebState("alarms", "create", newValue);
      }
      console.log(formValues);
      // const newValue = { id: info.id, ...formValues };
      // updateWebState("alarms", "update", newValue);
    } finally {
      updateBtnAside("btnAlarms", false);
      updateFormState("formAlarms", false);
      handleInfo(null);
    }
  };

  const AlarmInfo = () => {
    const newInfo = { ...info };
    delete newInfo.id;
    return newInfo;
  };

  const { values, handleSubmit, handleBlur, handleChange } = useFormikForm(
    info !== null ? AlarmInfo : AlarmValues,
    AlarmValitations,
    onSubmitAlarm
  );

  const minutesOptions = [
    { value: 5, text: "5 Minutos" },
    { value: 10, text: "10 Minutos" },
    { value: 30, text: "30 Minutos" },
    { value: 60, text: "1 hora" },
  ];
  const toneOptions = [
    { value: 0, text: "Sin Tono" },
    { value: "Beep", text: "Beep" },
    { value: "Alarm", text: "Alarm" },
    { value: "Dawn", text: "Dawn" },
    { value: "Hasty", text: "Hasty" },
  ];

  const intervalOptions = [
    { value: 0, text: "Sin Intervalos" },
    { value: 5, text: "5 Minutos" },
    { value: 10, text: "10 Minutos" },
    { value: 30, text: "30 Minutos" },
    { value: 60, text: "1 hora" },
  ];

  return (
    <Form className="alarm-form" onSubmit={handleSubmit}>
      {info && (
        <Button
          color="red"
          inverted
          onClick={() => {
            updateFormState("formAlarms", false);
            updateWebState("alarms", "delete", { id: info.id });
            handleInfo(null);
          }}
        >
          <Icon name="remove" /> Borrar Alarma
        </Button>
      )}
      <Button
        color="red"
        inverted
        onClick={() => {
          updateBtnAside("btnAlarms", false);
          updateFormState("formAlarms", false);
          handleInfo(null);
        }}
      >
        <Icon name="remove" /> Cerrar Alarma
      </Button>

      <Form.Field>
        <Form.Input type="time" list="timeOptions" />
      </Form.Field>
      <Form.Field>
        <label className="check-label">
          <span>SU</span>
          <Checkbox name="sunday" />
        </label>
        <label className="check-label">
          <span>MO</span>
          <Checkbox name="monday" />
        </label>
        <label className="check-label">
          <span>TU</span>
          <Checkbox name="tuesday" />
        </label>
        <label className="check-label">
          <span>WE</span>
          <Checkbox name="wednesday" />
        </label>
        <label className="check-label">
          <span>TH</span>
          <Checkbox name="thursday" />
        </label>
        <label className="check-label">
          <span>FR</span>
          <Checkbox name="Friday" />
        </label>
        <label className="check-label">
          <span>SA</span>
          <Checkbox name="Santurday" />
        </label>
      </Form.Field>
      <Form.Field>
        <Select
          name="minutes"
          placeholder="Seleccionar Minutos"
          options={minutesOptions}
        />
      </Form.Field>
      <Form.Field>
        <Select
          name="tone"
          placeholder="Seleccionar Tono"
          options={toneOptions}
        />
      </Form.Field>
      <Form.Field>
        <Select
          name="interval"
          placeholder="Seleccionar Intervalos"
          options={intervalOptions}
        />
      </Form.Field>
      <Form.Field>
        <label>Estado</label>
        <Checkbox
          toggle
          name="state"
          checked={values.state}
          onChange={handleChange}
        />
      </Form.Field>
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
        {info !== null ? "Actualizar Alarma" : "Crear Alarma"}
      </Form.Button>
    </Form>
  );
}

export { FormAlarm };
