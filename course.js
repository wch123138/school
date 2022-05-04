function myfunction(){
 var user=document.getElementById("user").value;
 if (user==="student"){
  location.href="https://wch123138.github.io/school/course.html";
  return false;
 }if (user==="parent"){
  location.href="https://wch123138.github.io/school/";
  return false;
 }else{
  alert("Please enter student or parent");
  return true;
 }
}