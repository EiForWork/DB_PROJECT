function submiter(req, res) {
    let nameIn = document.getElementById("name").value;
    let surnameIn = document.getElementById("surname").value;
    let phoneIn = document.getElementById("phone").value;
    let genderIn = document.querySelector('input[name="gender"]:checked').value;
    let emailIn = document.getElementById("email").value;
    let countryIn = document.getElementById('country-select').value;
    let datebirthIn = document.getElementById("datebirth").value;
    let passwordIn = document.getElementById("password").value;
    let confirmpasswordIn = document.getElementById("confirmpassword").value;
  
    // Create an object to store the data
    let data = {
      name: nameIn,
      surname: surnameIn,
      phone: phoneIn,
      gender: genderIn,
      email: emailIn,
      country: countryIn,
      datebirth: datebirthIn,
      password: passwordIn,
      confirmpassword: confirmpasswordIn
    };
  
    // Send the data to your database using Fetch API
    fetch('your-database-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        // Data sent successfully
        // You can handle the response here
      } else {
        // Handle the error if the request fails
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  module.exports = submiter;
  