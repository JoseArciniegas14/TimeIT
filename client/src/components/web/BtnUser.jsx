import { useAuth } from "../../hooks";
import "../../css/inicio/style.css";

function BtnUser() {
  const { user } = useAuth();

  return (
    <button className="PROFILE absolute w-48 h-12">
      <img src="#" alt="" className="PROFILE-ICON absolute w-12 h-12 top-0 object-cover" />
      <p className="PROFILE-NAME absolute h-8 left-0 font-extrabold text-gray-600 text-xl text-center tracking-normal">{"Usuario1"}</p>
    </button>
  );
}

export { BtnUser };
