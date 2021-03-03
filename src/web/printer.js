const Router = require('koa-router')
const router = new Router()
const printerService = require('../controller/printerService')

router.get('/', async ctx => {
    ctx.body = 'printer handler online'
})

router.get('/list', async ctx => {
    ctx.body = await printerService.list()
})

router.get('/info', async ctx => {
    const {name} = ctx.query
    ctx.body = await printerService.printer(name)
})

router.get('/direct', async ctx => {
    const {name} = ctx.query
    printerService.direct()
})

module.exports = router
