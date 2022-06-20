require('jquery')
require('bootstrap')
require('@fortawesome/fontawesome-free')
import axios from 'axios'

$('#submitUser').on('click', function () {
  let userGithub = $('#userGithub').val()
  axios
    .get(`https://api.github.com/users/${userGithub}`)
    .then((response) => {
      let data = response.data
      $('#infos').empty()

      if (data.avatar_url) {
        $('#infos').append(`
      <figure class="rounded-circle">
        <img class="rounded-circle" src="${data.avatar_url}" alt="">
      </figure>
      `)
      }

      if (data.name) {
        $('#infos').append(`<h1>Name: ${data.name}</h1>`)
      }

      if (data.company) {
        $('#infos').append(`<h2>${data.company}</h2>`)
      }

      if (data.id) {
        $('#infos').append(`<h2>ID: ${data.id}</h2>`)
      }

      if (data.bio) {
        $('#infos').append(`<h2>BIO: ${data.bio}</h2>`)
      }

      if (data.created_at) {
        let created = new Date(data.created_at),
          dayCreated = created.getDate(),
          monthCreated = created.getMonth() + 1,
          yearCreated = created.getFullYear()

        if (monthCreated.toString().length < 2) {
          monthCreated = '0' + monthCreated
        }
        $('#infos').append(`<h2>CREATED AT: ${dayCreated + '/' + monthCreated + '/' + yearCreated}</h2>`)
      }
    })
    .catch((e) => {
      console.log(e.message)
      $('#infos').empty()
      $('#infos').append(`<h1>User not found</h1>`)
    })
})
