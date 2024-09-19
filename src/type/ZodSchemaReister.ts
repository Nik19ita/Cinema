import { z } from "zod";

const CreateRegisterSchema = z
  .object({
    email: z.string().email("неправильный формат e-mail"),
    password: z.string().min(8, "Пароль должен быть не менее 8 символов"),
    passwordConfirm: z.string().min(8),
    name: z.string().min(1),
    surname: z.string().min(1),
  })
  .refine(({ passwordConfirm, password }) => passwordConfirm === password, {
    message: "Пароли должны совпадать",
    path: ["passwordConfirm"],
  });

export default CreateRegisterSchema;
