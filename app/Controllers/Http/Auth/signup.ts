import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Signup } from "App/Dtos/User";
import { RegisterFactory } from "App/Factories/user/register";
import User from "App/Models/User";
import { SignupValidator } from "App/Validators/user/signup";

export async function signup({
  request,
  auth,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const body: Signup = await request.validate(SignupValidator);

    const registerUseCase = RegisterFactory();

    const user = await registerUseCase.execute(body);

    const token = await auth.use("api").generate(user as unknown as User);

    return response.created(token);
  } catch (error) {
    return response.conflict(error);
  }
}
