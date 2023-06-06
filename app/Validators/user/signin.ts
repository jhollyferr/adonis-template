import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, rules, schema } from "@ioc:Adonis/Core/Validator";

export class SigninValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [
      rules.email(),
      rules.exists({ table: "users", column: "email" }),
    ]),
    password: schema.string(),
  });

  public messages: CustomMessages = {
    "email.exists": "Usuário não cadastrado no sistema",
  };
}
