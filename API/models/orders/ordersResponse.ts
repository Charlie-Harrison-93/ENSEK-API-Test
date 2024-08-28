export type Orders = Order[]

export interface Order {
  fuel: string
  id: string
  quantity: number
  time: Date
}
