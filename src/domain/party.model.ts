export interface PartyModel {
  venue: string
  date: number
  guests: {
    name: string
    email: string
  }[]
}
