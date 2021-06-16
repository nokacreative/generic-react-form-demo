export interface UserModel {
  username: string
  password: string
  email: string
  name: string
  age: number
  gender: string
  dob: number
  bio: string
  photoFilename?: string
  targetAnnualSalary: number
  fields: string[]
  phone: string
  country: string
}
