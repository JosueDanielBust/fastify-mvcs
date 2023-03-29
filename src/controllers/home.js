import HomeService from '../services/home.js'

const Home = {
  service: HomeService,
}

Home.routes = async (Fastify) => {
  Fastify.get('/', Home.service.getHome)
}

export default Home.routes
