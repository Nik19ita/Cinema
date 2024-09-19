import useQueryProfile from "../../../hooks/QueryProfile.ts";
import ButtonLogout from "../../Another/ButtonLogout/ButtonLogout.tsx";
import UserComponent from "../../Another/UserPageComponent/UserPageComponent.tsx";
import "./UserPersonalData.scss";

const UserPersonalData = () => {
  const { data, isSuccess } = useQueryProfile();
  if (isSuccess) {
    return (
      <div className="user-personal-data">
        <UserComponent
          className="component-1"
          params="Имя Фамилия"
          text={`${data.name} ${data.surname}`}
        />
        <UserComponent
          className="component-2"
          params="Электронная почта"
          text={data.email}
        />

        <ButtonLogout />
      </div>
    );
  }
};

export default UserPersonalData;
