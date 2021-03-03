const Router = require('koa-router')
const router = new Router()

router.get('/', async ctx => {
    ctx.body = 'printer handler online'
})

module.exports = router
