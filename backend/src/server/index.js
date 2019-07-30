const Koa = require('koa');
const app = new Koa();
const port = process.env.PORT;
const indexRoutes = require('./routes/index');
const vehiclesRoutes = require('./routes/vehicles');

app.use(indexRoutes.routes());
app.use(vehiclesRoutes.routes());

const server = app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});

module.exports = server;
