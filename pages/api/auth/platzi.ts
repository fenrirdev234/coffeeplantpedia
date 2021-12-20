import { NextApiHandler } from "next-auth/internals/utils"

const credentialAuth: NextApiHandler = (request, response) => { 
  // Get or any not Ok
  if(request.method !== 'POST'){
    response.status(405).end()
  }

  // POST - Ok
  // validar credentials
  if(request.body.password === process.env.AUTH_PLATZI_SECRET){
    const platziUser: User = {
      name: 'Platzi Student',
      email: 'student@platzi.com',
      image: ''
    }

    return response.status(200).json(platziUser)
  }
}

export default credentialAuth
