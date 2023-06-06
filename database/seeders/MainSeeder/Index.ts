import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'


export default class extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  public async run () {
    const users = await User.query()

    if(users.length === 0) {
      await this.runSeeder(await import('../User'))
    }
  }
}
