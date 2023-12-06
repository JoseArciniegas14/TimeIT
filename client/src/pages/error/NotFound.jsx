import { Container, Header, Icon } from "semantic-ui-react";

function NotFound() {
  return (
    <Container className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Header as="h2" icon>
          <Icon name="exclamation triangle" />
          Error 404: Página no encontrada
          <Header.Subheader>
            Lo sentimos, la página que estás buscando no existe.
          </Header.Subheader>
        </Header>
      </div>
    </Container>
  );
}

export { NotFound };
