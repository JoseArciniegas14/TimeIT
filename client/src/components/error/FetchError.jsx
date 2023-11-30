function FetchError({ error }) {
  return (
    <div className="fetch-error">
      <p className="error">{error}</p>
    </div>
  );
}

export { FetchError };
