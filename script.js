function getFormvalue(event) {
    //Write your code here
		event.preventDefault();
   const fName=  document.getElementById("fname").value;
   const lName=  document.getElementById("lname").value;
	
alert(fName + " "+lName)
}
