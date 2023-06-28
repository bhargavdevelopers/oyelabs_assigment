const person = {
    id : 2 ,
    gender : 'mail'
};

const student = {
    name : "ravi" ,
    email :"ravi11@yopmail.com"
};

const mergedData = {
    ...person, ...student
};
console.log(mergedData);
