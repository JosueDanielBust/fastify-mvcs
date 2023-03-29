import HomeModel from '../models/home.js'

const getHome = async (request, reply) => {
  const home = await HomeModel.getHome()
  reply.send(home)
}

const Home = {
  model: HomeModel,
  getHome,
}

export default Home
