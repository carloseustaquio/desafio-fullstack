import { SetupServer } from "./server"

(async (): Promise<void> => {
  const server = new SetupServer(8080)
  await server.init()
  server.start()
})()