export function DefaultLayout(props) {
  const { children } = props;
  return (
    <div>
      <h2>Default Layout</h2>
      <p>
        Esto es para hacer una sola vez la pagina base de timeit y la usamos en
        el resto (Justo como ahora)
      </p>
      <br />
      {children}
    </div>
  );
}
