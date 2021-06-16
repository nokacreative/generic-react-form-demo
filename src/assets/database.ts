import { PartyModel } from '../domain/party.model'
import { UserModel } from '../domain/user.model'

// Fake document DB
export interface Database {
  users: UserModel[]
  parties: PartyModel[]
}

export const database: Database = {
  users: [
    {
      username: 'user1',
      password: 'asdf@#3',
      email: 'user.1@asdf.com',
      name: 'User 1',
      age: 20,
      gender: 'male',
      dob: new Date(2001, 5, 1).getTime(),
      bio: 'Hi',
      targetAnnualSalary: 1300000,
      fields: ['engineering'],
      phone: '123-456-7890',
      country: 'CA',
      photoFilename: 'photo.jpg',
    },
    {
      username: 'user2',
      password: 'A1B2C3',
      email: 'second-user@fgsg.com',
      name: 'User 2',
      age: 30,
      gender: 'female',
      dob: new Date(1991, 8, 30).getTime(),
      bio: 'Hurray',
      targetAnnualSalary: 9000000000,
      fields: ['architecture', 'art'],
      phone: '000-000-0000',
      country: 'US',
    },
  ],
  parties: [
    {
      venue: 'Some Place',
      date: new Date().getTime(),
      guests: [
        { name: 'Person 1', email: 'person1@email.com' },
        { name: 'Person 2', email: 'person2@email.com' },
      ],
    },
  ],
}
