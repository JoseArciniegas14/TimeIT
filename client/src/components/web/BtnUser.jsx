import { useAuth } from "../../hooks";

function BtnUser() {
  const { user } = useAuth();

  return (
    <button>
      <p>{"Usuario1"}</p>
    </button>
  );
}

export { BtnUser };
