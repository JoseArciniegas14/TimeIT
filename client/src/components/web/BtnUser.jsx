import { useAuth } from "../../hooks";

function BtnUser() {
  const { user } = useAuth();

  return (
    <button>
      <p>{user.name || "Usuario1"}</p>
    </button>
  );
}

export { BtnUser };
