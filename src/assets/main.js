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
}


const updateMultipleRecord = (data) => {
  if (arr.length < 1) {
    alert('No changes were made')
  } else {
    try {
      const result = axios({
        method: 'POST',
        url: '/api/multi-add',
        data: arr
      })
      $('#data_users').empty()
      alert("Update Successful")
      getAll()

    } catch (error) {
      alert("Update failed")
    }
  }
}