import { NavLink } from "react-router-dom";
import useQueryProfile from "../../../hooks/QueryProfile";
import ButtonLogin from "../../Buttons/ButtonLogin/ButtonLogin";
import Loader from "../../Waiting/Loader/Loader";
import "./AccountComponent.scss";

const AccountComponent = () => {
  const { data, isFetching, isFetched, isSuccess, isError } = useQueryProfile();

  if (isFetching) {
    return <Loader />;
  }

  if (isFetched && isSuccess) {
    return (
      <NavLink className="user" to="/user-favorites">
        {data.name}
      </NavLink>
    );
  }

  if (isFetched && isError) {
    return <ButtonLogin />;
  }
};

export default AccountComponent;
