import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useMutationRegister from "../../../hooks/MutateRegister";
import CreateRegisterSchema from "../../../type/ZodSchemaReister";
import ButtonChangePopup from "../ButtonChangePopup/ButtonChangepopup";
import ButtonEnter from "../ButtonEnter/ButtonEnter";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import InputPopup from "../InputPopup/InputPopup";
import "./RegisterForm.scss";

type CreateRegisterType = z.infer<typeof CreateRegisterSchema>;

const Register = () => {
  const [changeInput, setChangeInput] = useState(false);

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<CreateRegisterType>({
    resolver: zodResolver(CreateRegisterSchema),
    shouldFocusError: false,
  });

  const { mutate, isPending, isError, isSuccess } = useMutationRegister();

  console.log(isError);

  return (
    <>
      <form
        onSubmit={handleSubmit(({ email, password, name, surname }) => {
          mutate({ email, password, name, surname });
          setChangeInput(true);
        })}
      >
        <InputPopup
          type="email"
          error={errors?.email?.message}
          register={register}
          changeInput={clearErrors}
          setChangeInput={setChangeInput}
        />

        <InputPopup
          type="name"
          error={errors?.name?.message}
          register={register}
          changeInput={clearErrors}
          setChangeInput={setChangeInput}
        />

        <InputPopup
          type="surname"
          error={errors?.surname?.message}
          register={register}
          changeInput={clearErrors}
          setChangeInput={setChangeInput}
        />

        <InputPopup
          type="password"
          error={errors?.password?.message}
          register={register}
          changeInput={clearErrors}
          setChangeInput={setChangeInput}
        />

        <InputPopup
          type="passwordConfirm"
          error={errors?.passwordConfirm?.message}
          register={register}
          changeInput={clearErrors}
          setChangeInput={setChangeInput}
        />

        <ErrorMessage errors={errors} />
        <ErrorMessage
          isError={isError && changeInput && isError}
          type="register"
        />

        <ButtonEnter
          type="succes"
          isPending={isPending}
          isSuccess={isSuccess}
          text="Создать аккаунт"
        />
      </form>

      <ButtonChangePopup type="login" child="У меня есть пароль" />
    </>
  );
};

export default Register;
