const getHome = async (Fastify, offset, take) => {
  const message = {
    message: 'Hello World!',
  }
  return message
}

const Home = {
  getHome,
}

export default Home
