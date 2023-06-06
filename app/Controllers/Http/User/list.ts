import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Query } from "App/Dtos/Query";
import { ListFactory } from "App/Factories/user/list";

export async function list({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const query: Query = request.qs();

    const listUseCase = ListFactory();

    const paginate = await listUseCase.execute(query);

    return response.ok(paginate);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
