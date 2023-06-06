import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Signin } from "App/Dtos/User";
import { SigninValidator } from "App/Validators/user/signin";

export async function signin({
  request,
  auth,
  response,
}: HttpContextContract): Promise<void> {
  const { email, password }: Signin = await request.validate(SigninValidator);

  const token = await auth.attempt(email, password);

  return response.ok(token);
}
