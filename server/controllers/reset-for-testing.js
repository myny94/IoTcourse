const router = require('express').Router()
const axios = require('axios');

const usersURL = 'http://db:3004/users';

router.post('/reset', async (request, response) => {

  const { data: users } = await axios.get(usersURL);

  for (let i = 0; i < users.length; i++) {
    await axios.delete(`${usersURL}/${users[i].id}`);
  }

  response.status(204).end()
})

module.exports = router
