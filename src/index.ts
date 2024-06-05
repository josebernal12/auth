import { connectDB } from './database/config'
import { env } from './helpers/envalid'
import server from './server'
import colors from 'colors'

const port = env.PORT || 4000


server.listen(port, async () => {
  await connectDB()
  console.log(colors.cyan.bold(`server listening to port ${port}`))
})
