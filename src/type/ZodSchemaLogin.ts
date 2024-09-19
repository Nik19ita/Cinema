import { z } from "zod";

const CreateLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Пароль должен быть не менее 8 символов"),
});

export default CreateLoginSchema;
