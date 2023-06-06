import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'

export default class extends BaseSeeder {
  public static environment = ['development', 'staging', 'test' ]

  public async run () {
    await UserFactory.createMany(3)
  }
}
