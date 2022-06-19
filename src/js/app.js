require('jquery')
require('bootstrap')
require('@fortawesome/fontawesome-free')
import axios from 'axios'

$('#confirmTeste').on('click', function () {
  let userGithub = $('#userGithub').val()
  axios
    .get(`https://api.github.com/users/${userGithub}`)
    .then((response) => {
      $('#photUser').prop('src', response.data.avatar_url)
    })
    .catch((e) => {
      console.log(e.message)
      $('#infos').append(`<h1>User not found</h1>`)
    })
})
