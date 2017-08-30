function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.
    var messages = [];
    //If first name is empty. Add it to the array
    var firstName = getValue('firstName');
    if (firstName.length < 1) {
    messages.push(' First Name is required');
  }
    //If last name is empty. Add it to the array
    var lastName = getValue('lastName');
    if (lastName.length < 1) {
    messages.push(' Last Name is required');
  }
    //Email is empty. Add it to the array
    var emailAddress = getValue('emailAddress');
    if (emailAddress.length < 1) {
    messages.push(' Email is required');
  }
    //Loop through array
    for (i = 0; i < messages.length; i++) {
      getElm('error-list').innerHTML = messages;
    }



    //Create javascript object for the user
    var user = {
      firstname:firstName,
      lastname:lastName,
      email:emailAddress
    };

    var fullName = firstName + ' ' + lastName;
    console.log(fullName);
    //log the user object to the console
    console.log(user);

    //Check to see if everything is valid
    if (messages == 0) {
  

    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
    var submittedDate = new Date();
    var date = submittedDate.toString();
    //Make the alert box.
    var subDate = 'Submitted on ' + date;
    alert(subDate);
}
    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
