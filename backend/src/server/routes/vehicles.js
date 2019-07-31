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
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const vehicle = await queries.getById(ctx.params.id);

    if (vehicle.length) {
      ctx.body = {
        status: 'success',
        data: vehicle
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'Vehicle not found'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const vehicle = await queries.add(ctx.request.body);

    ctx.status = 201;
    ctx.body = {
      status: 'success',
      data: ctx.request.body
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const vehicle = await queries.update(ctx.params.id, ctx.request.body);

    if (vehicle) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: vehicle
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'Vehicle not found.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.patch(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const vehicle = await queries.update(ctx.params.id, ctx.request.body);

    if (vehicle) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: vehicle
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'Vehicle not found.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})


router.delete(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const vehicle = await queries.remove(ctx.params.id);
    if (vehicle) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: vehicle
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'Vehicle not found.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

module.exports = router;
