
$(document).ready(() => {
    //Api     https://ti-react-test.herokuapp.com/users

    let addData = (data) => {
        for(i=0 ; i < data.length ; i++){
            let usersData = $('#users')
            // let modal = $('#modal')
            usersData.append(`<tr>
                                <th scope="row">${data[i].id}</th>
                                <td>${data[i].name}</td>
                                <td>${data[i].occupation}</td>
                                <td>${data[i].email}</td>
                                <td>${data[i].bio}</td>
                                <td>${data[i].updated_at}</td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                            <form>
                            <input type="hidden" id="formid${data[i].id}" value="${data[i].id}">

                            <!-- Name input -->
                            <div class="form-outline mb-4">
                              <input type="text" id="profilename${data[i].id}" class="form-control" value="${data[i].name}" />
                              <label class="form-label" for="profilename${data[i].id}">Name</label>
                            </div>

                            <!-- Occupation -->
                            <div class="form-outline mb-4">
                              <input type="text" id="profile-occupation${data[i].id}" class="form-control" value="${data[i].occupation}"/>
                              <label class="form-label" for="profile-occupation${data[i].id}">Occupation</label>
                            </div>
                          
                            <!-- Email input -->
                            <div class="form-outline mb-4">
                              <input type="email" id="profile-email${data[i].id}" class="form-control" value="${data[i].email}"/>
                              <label class="form-label" for="profile-email${data[i].id}">Email address</label>
                            </div>
                          
                            <!-- Message input -->
                            <div class="form-outline mb-4">
                              <textarea class="form-control" id="profile-bio${data[i].id}" rows="4">${data[i].bio}</textarea>
                              <label class="form-label" for="profile-bio${data[i].id}">Bio</label>
                            </div>
                          
                            <!-- Submit button -->
                            <button type="submit" id="btn-submit${data[i].id}" class="btn btn-primary btn-block mb-4">Edit</button>
                          </form>
                          <td>
                            </tr>`)
        }


        for(i = 0 ; i < data.length ; i++){
            let test = data[i].id
            $(`#btn-submit${data[i].id}`).click((e)=>{
                
                e.preventDefault()
                let profileId = $(`#formid${test}`).val()
                let profileName = $(`#profilename${test}`).val()
                let profileOccupation = $(`#profile-occupation${test}`).val()
                let profileEmail = $(`#profile-email${test}`).val()
                let profileBio = $(`#profile-bio${test}`).val()

                console.log(profileId)

                axios.patch(`https://ti-react-test.herokuapp.com/users/${profileId}`,{
                name:profileName,
                occupation:profileOccupation,
                email:profileEmail,
                bio:profileBio,
    })
    .then(response => alert(`Succesfuly updated data Name:${profileName} Occupation:${profileOccupation} email:${profileEmail} Bio: ${profileBio}`))
    .catch(err => console.log(err))
                
        })
    }
    }

    axios.get('https://ti-react-test.herokuapp.com/users')
        .then(response => addData(response.data))
        .catch(err => console.log(err))

})