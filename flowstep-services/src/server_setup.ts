import http from 'http'
import express, { Request, Response } from 'express'
import cors, { CorsOptions } from 'cors'
import fileUpload from 'express-fileupload'
// Create the express app
const app = express()

// Middleware
const corsOptions: CorsOptions = {
  origin: process.env.CORS_WHITELIST && process.env.CORS_WHITELIST.split(','),
  methods: ['GET', 'POST'],
}
// Configure for development
if (process.env.NODE_ENV === 'development') {
  corsOptions.origin = '*'
}

app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cors(corsOptions))
app.get('/health', (req: Request, res: Response) => {
  res.send('OK')
})
app.use(
  fileUpload({
    tempFileDir: 'temp',
    useTempFiles: true,
  })
)
// // Use JSON parser for all non-webhook routes
app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    const webhookURLs = process.env.WEBHOOK_URLS?.split(';')

    if (webhookURLs?.includes(req.originalUrl)) {
      express.raw({ type: 'application/json' })(req, res, next)
    } else {
      express.json({ limit: '50mb' })(req, res, next)
    }
  }
)

// Create server from http module so socket can also use it
const server = http.createServer(app)

export { app, server, corsOptions }
