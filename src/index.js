const fastify = require("fastify")({
  logger: true,
});


fastify.get('/', async(request, reply) => {
  reply.send({ hello: 'world' });
})

const start = async() => {
  await fastify.listen(3000);
  fastify.log.info(`Server listening on ${fastify.server.address().port}`);
};

start();

