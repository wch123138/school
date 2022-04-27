function validateform(){
var firstname=document.myform.firstname.value;
var lastname=document.myform.lastname.value;
var course=document.myform.course.value;
var phone=document.myform.phone.value;

if (firstname===null || firstname===""){
 alert("First name can't be blank!");
 return false;
}if (lastname===null || lastname===""){
 alert("Last name can't be blank!");
 return false;
}if (course===null || course===""){
 alert("course can't be blank!");
 return false;
}if (phone===null || phone===""){
 alert("phone can't be blank!");
 return false;
}else if (isNaN(phone)){
 alert("Phone number please enter number");
 return false;
}else{
 alert("Form completed!");
 return true;
}
} 