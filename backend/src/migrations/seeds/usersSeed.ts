import { User } from '../../models/User'

export const usersSeed
  : Omit<User, "id" | "created_at" | "updated_at">[]
  = [
    {
      email: "teste1@teste.com",
      firstName: "Teste",
      secondName: "Um",
      phone: "+5521900000001",
      passwordHash: "123e4567-e89b-12d3-a456-426614174001",
    },
    {
      email: "teste2@teste.com",
      firstName: "Teste",
      secondName: "Dois",
      phone: "+5521900000002",
      passwordHash: "123e4567-e89b-12d3-a456-426614174002",
    },
    {
      email: "teste3@teste.com",
      firstName: "Teste",
      secondName: "Três",
      phone: "+5521900000003",
      passwordHash: "123e4567-e89b-12d3-a456-426614174003",
    },
  ]