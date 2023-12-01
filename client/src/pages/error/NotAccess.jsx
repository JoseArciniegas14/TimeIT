// Desc: Not Access page
import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../scss/index.scss";

function NotAccess() {
  return (
    <Container className="flex justify-center items-center h-screen">
      <div className="text-center">
        <Header as="h2" icon>
          <Icon name="lock" />
          Sin acceso
          <Header.Subheader>No tienes accesos a esta página</Header.Subheader>
        </Header>
      </div>
    </Container>
  );
}

export { NotAccess };
