const koaRouter = require('@koa/router')
const userRouter = new koaRouter();

userRouter.get('/',(ctx, next) => {
  ctx.body = 'hello world'
})

module.exports = userRouter