import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useMutationLogin from "../../../hooks/MutationLogin";
import CreateLoginSchema from "../../../type/ZodSchemaLogin";
import ButtonChangePopup from "../ButtonChangePopup/ButtonChangepopu";
import ButtonEnter from "../ButtonEnter/ButtonEnter";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import InputPopup from "../InputPopup/InputPopup";
import "./LoginForm.scss";

type CreateLoginType = z.infer<typeof CreateLoginSchema>;

export const Login = () => {
  const [changeInput, setChangeInput] = useState(false);

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<CreateLoginType>({
    resolver: zodResolver(CreateLoginSchema),
  });

  const { mutate, isPending, isError, isSuccess } = useMutationLogin();

  return (
    <>
      <form
        onSubmit={handleSubmit(({ email, password }) => {
          mutate({ email, password });
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
          type="password"
          error={errors?.password?.message}
          register={register}
          changeInput={clearErrors}
          setChangeInput={setChangeInput}
        />

        <ButtonEnter isPending={isPending} isSuccess={isSuccess} text="Войти" />

        <ErrorMessage errors={errors} />
        <ErrorMessage
          isError={isError && changeInput && isError}
          type="login"
        />
      </form>

      <ButtonChangePopup type="register" child="Регистрация" />
    </>
  );
};
