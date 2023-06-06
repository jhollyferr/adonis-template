import Hash from "@ioc:Adonis/Core/Hash";
import { beforeSave, column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";

export default class User extends Base {
  @column()
  public name: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
