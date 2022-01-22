

let arr = []

const getAll = async () => {
  try {
    const data = await axios({
      method: 'GET',
      url: '/api/get-all',
    })
    const docs = data.data
    console.log(docs)
    $('#data_users').empty()
    docs.forEach(doc => {
      $('#data_users').append(`<tr id="${doc._id}">
        <td scope="row"><input type="text" name="" value="${doc.username}" id="${doc._id}name" style="border: none" class="form-control " onchange="getName('${doc._id}')"></td>
        <td><input type="text" name="" value="${doc.email}" id="${doc._id}email"  style="border: none" class="form-control " onchange="getEmail('${doc._id}')" ></td>
        <td><input type="text" name="" value="${doc.birthday}" id="${doc._id}birthday" style="border: none" class="form-control " onchange="getBirthday('${doc._id}')"></td> 
       </tr>`)
    })

  } catch (error) {
    console.log(error)
  }
}
getAll()

const search = async () => {
  let query = $('#search_bar').val()
  if (!query) {
    alert('Please type a search term')
  } else {
    try {
      const data = await axios({
        method: 'GET',
        url: '/api/search?q=' + query,

      })
      const docs = data.data.data
      console.log(docs)
      $('#data_users').empty()
      docs.forEach(doc => {
        $('#data_users').append(`<tr id="${doc._id}">
        <td scope="row"><input type="text" name="" value="${doc.username}" id="${doc._id}name" style="border: none" class="form-control " onchange="getName('${doc._id}')"></td>
        <td><input type="text" name="" value="${doc.email}" id="${doc._id}email"  style="border: none" class="form-control " onchange="getEmail('${doc._id}')" ></td>
        <td><input type="text" name="" value="${doc.birthday}" id="${doc._id}birthday" style="border: none" class="form-control " onchange="getBirthday('${doc._id}')"></td> 
       </tr>`)
      })
      $('#search_bar').val("")
      alert(data.data.message)

    } catch (error) {
      console.log(error)
    }
  }
}

const getName = (id) => {
  let username = $(`#${id}name`).val()
  arr.push({ _id: id, username: username })
}

const getEmail = (id) => {
  let email = $(`#${id}email`).val()
  arr.push({ _id: id, email: email })
}

const getBirthday = (id) => {
  let birthday = $(`#${id}birthday`).val()
  arr.push({ _id: id, birthday: birthday })
  console.log(arr)
}


const updateMultipleRecord =  (data) => {
  if (arr.length < 1) {
    alert('No changes were made')
  } else {
    try {
      const result = axios({
        method: 'POST',
        url: '/api/multi-add',
        data: arr,
        headers: {contentType: 'application/json'}
      })
      $('#data_users').empty()
      alert("Update Successful")
      arr.length =0
      getAll()

    } catch (error) {
      alert("Update failed")
    }
  }
}


// Login-----------------------------------------

const authLogin = async   () => {
  if (!$('#user-login').val() || !$('#password').val()) {
    alert("Please enter your user name and password")
  }
  else {
    const data = {
      user: $('#user-login').val(),
      password: $('#password').val(),
    }
    console.log(data)

    try {
      const result = await  axios({
        method: 'POST',
        url: '/api/login',
        data: data
      })
      setCookie("token", result.data.token, 1)
      $(location).attr('href', '/')

   //   console.log(result)
    } catch (error) {
      console.log(error)
      alert('Login failed')
   }
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}