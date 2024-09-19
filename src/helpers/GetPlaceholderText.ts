import typeInput from "../type/InputType";

const getPlaceholderText = (type: typeInput) => {
  switch (type) {
    case "email":
      return "Электронная почта";
    case "name":
      return "Имя";
    case "surname":
      return "Фамилия";
    case "password":
      return "Пароль";
    case "passwordConfirm":
      return "Подтвердите пароль";
  }
};

export default getPlaceholderText;
