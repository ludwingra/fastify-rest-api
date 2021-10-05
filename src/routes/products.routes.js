
const routes = [
  {
    url: '/products',
    method: 'GET',
    handler: (request, reply) => {
      reply.send('products');
    }
  },
  {
    url: '/products/:id',
    method: 'GET',
    handler: (request, reply) => {
      reply.send('single product');
    }
  },
  {
    url: '/products',
    method: 'POST',
    handler: (request, reply) => {
      reply.send('creating product');
    }
  },
  {
    url: '/products/:id',
    method: 'DELETE',
    handler: (request, reply) => {
      reply.send('deleting a product');
    }
  },
  {
    url: '/products/:id',
    method: 'PUT',
    handler: (request, reply) => {
      reply.send('updating a product');
    }
  },
];

module.exports = routes;