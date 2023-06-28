# oyelabs_assigment
1. Make a api for phone number login
    a. Make add Customer api for customer, assume admin is adding customer ..
    use the input params validation, code commenting, logging and check for
    duplicates where required .
    b. Use of transaction connection in mysql is good to have (not the requirement)
   
3. Write a function in node that inserts the following data in mysql , the email should
   be unique and if the email already exists in the system then the name of the customer
   will be updated with the new name that is there in the array for that customer.
      --[const customers = [{
      email : "anurag11@yopmail.com" ,
      name : "anurag"
      },
      {
      email : "sameer11@yopmail.com" ,
      name : "sameer"
      },
      {
      email : "ravi11@yopmail.com" ,
      name : "ravi"
      },
      {
      email : "akash11@yopmail.com" ,
      name : "akash"
      },
      {
      email : "anjali11@yopmail.com" ,
      name : "anjai"
      },
      {
      email : "santosh11@yopmail.com" ,
      name : "santosh"
      },
      ]]--

5. Make a promisifed function for the functioan having callback below , after the
  function is promisifed then call the function like you call a promise
    --[const request = require('request');
    function getGoogleHomePage(finalCallBack){
    request('http://www.google.com', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    finalCallBack(error);
    console.log('statusCode:', response && response.statusCode); // Print the response status
    code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    finalCallBack(null,body);
    });
    };
    console.log(getGoogleHomePage((result)=>{
    console.log("RESULT==>",result);
    }));]--
