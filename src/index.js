const fastify = require("fastify")({
  logger: true,
});

const productRoutes = require("./routes/products.routes");

fastify.get('/', async(request, reply) => {
  try {
    reply.send({ hello: 'world' });
  } catch (error) {
    console.log(error)
  }
})

productRoutes.map((productRoute) =>{
  fastify.route(productRoute);
});

const start = async() => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (error) {
    console.log(error)
  }
};

start();

