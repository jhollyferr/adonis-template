import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import { signin } from "App/Controllers/Http/Auth/signin";
import { signup } from "App/Controllers/Http/Auth/signup";

Route.group(() => {
  Route.post("/auth/signup", signup);
  Route.post("/auth/signin", signin);
}).prefix(Env.get("PREFIX"));
