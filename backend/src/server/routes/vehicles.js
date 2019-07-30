const Router = require('koa-router');
const queries = require('../db/queries/vehicles');

const router = new Router();
const BASE_URL = `/api/v1/vehicles`;

router.get(BASE_URL, async (ctx) => {
  try {
    const vehicles = await queries.getAll();
    ctx.body = {
      status: 'success',
      data: vehicles
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;
