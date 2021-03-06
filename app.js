const Koa = require('koa')
const koa = new Koa()
const Router = require('koa-router')
const router = new Router()

const port = 4000

const indexRouter = require('./src/web/index')
const printerRouter = require('./src/web/printer')

const routes = router.use('/', indexRouter.routes())
    .use('/printer', printerRouter.routes())

koa
    .use(routes.routes())
    .use(router.allowedMethods())

koa.listen(port, () => {
    console.log('port ' + port + ' opened.')
})
