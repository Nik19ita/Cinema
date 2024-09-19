import { useState } from "react";
import useQueryLogout from "../../../hooks/QueryLogout";
import Loader from "../../Waiting/Loader/Loader";

const ButtonLogout = () => {
  const [logoutState, setLogoutState] = useState(false);
  const { isFetching } = useQueryLogout(logoutState);

  return (
    <button className="button-purple" onClick={() => setLogoutState(true)}>
      {isFetching ? <Loader /> : "Выйти из аккаунта"}
    </button>
  );
};

export default ButtonLogout;
