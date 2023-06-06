import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export async function profile({
  auth,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const user = await auth.authenticate();

    return response.ok(user);
  } catch (error) {
    return response.conflict(error);
  }
}
