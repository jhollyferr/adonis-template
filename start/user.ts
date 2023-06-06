import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import { list } from "App/Controllers/Http/User/list";
import { profile } from "App/Controllers/Http/User/profile";

Route.group(() => {
  Route.get("/profile", profile);
  Route.get("/users", list);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
