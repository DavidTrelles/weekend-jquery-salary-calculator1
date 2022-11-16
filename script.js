$(document).ready(onReady);

let employeeArray = [];

function onReady() {
  $("#submit").on("click", newEmployee);
}

function newEmployee() {
  if (
    $("#firstNameIn").val() === "" ||
    $("#lastNameIn").val() === "" ||
    $("#idIn").val() === "" ||
    $("#titleIn").val() === "" ||
    $("#salaryIn").val() === ""
  ) {
    console.log("Error");
  } else {
    let newEmployee = {
      firstName: $("#firstNameIn").val(),
      lastName: $("#lastNameIn").val(),
      id: $("#idIn").val(),
      title: $("#titleIn").val(),
      salary: $("#salaryIn").val(),
    };

    $("#firstNameIn").val(""),
      $("#lastNameIn").val(""),
      $("#idIn").val(""),
      $("#titleIn").val(""),
      $("#salaryIn").val(""),
      employeeArray.push(newEmployee);
    console.log(employeeArray);
  }
}
