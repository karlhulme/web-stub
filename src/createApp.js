import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import hpp from 'hpp'
import compression from 'compression'

/**
 * Create an express web app with a universal route that reports
 * the details of the request.
 */
export function createApp () {
  const app = express()

  app.use(helmet())
  app.use(hpp())
  app.use(compression())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cookieParser())

  app.use((req, res) => {
    res.send(`
      <html>
        <body>
          <h1>Web Request</h1>
          <p>The details of the request sent to the web-stub server.</p>
          <h2>Headline</h2>
          <pre>method: <strong>${req.method}</strong></pre>
          <pre>url:    <strong>${req.url}</strong></pre>
          <h2>Query Parameters</h2>
          <pre>${JSON.stringify(req.query, null, 2)}</pre>
          <h2>Body</h2>
          <pre>${JSON.stringify(req.body, null, 2)}</pre>
          <h2>Headers</h2>
          <pre>${JSON.stringify(req.headers, null, 2)}</pre>
          <h2>Cookies</h2>
          <pre>${JSON.stringify(req.cookies, null, 2)}</pre>
        </body>
      </html>`)
  })

  return app
}
