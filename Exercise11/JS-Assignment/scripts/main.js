var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

    var fullName = firstName + ' ' + lastName;
    getElm('p1_fullName').innerHTML = fullName;

      if(firstName.length > 0 && lastName.length > 0){
        getElm('p1_valid').innerHTML = 'Yes';
      } else {
        getElm('p1_valid').innerHTML = 'No';
      }

      getElm('p1_fullNameLength').innerHTML = (firstName + lastName).length;

//index position
    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

    document.getElementById('p2_email').innerHTML = emailAddress;

    var emailAddress;
      if (emailAddress.indexOf("@") > -1){
        getElm('p2_valid').innerHTML = 'Yes';
    } else {
      getElm('p2_valid').innerHTML = 'No';
    }

    getElm('p2_emailLength').innerHTML = emailAddress.length;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);

    getElm('p3_number').innerHTML = randomNumber;


    if(isNaN(randomNumber)){
      getElm('p3_valid').innerHTML = 'No';
    } else {
      getElm('p3_valid').innerHTML = 'Yes';
    }

    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);

    var arrayItems = [arrayInput];

    getElm('p4_arraylength').innerHTML = arrayItems.length;

    getElm('p4_valid').innerHTML = arrayItems;








    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
