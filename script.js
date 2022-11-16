$(document).ready(onReady);

let employeeArray = [];

function onReady() {
  $("#submit").on("click", newEmployee);
  $("#employeesOut").on("click", "#removeEmployee", remove);
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
  renderFunc();
}

function renderFunc() {
  let el = $("#employeesOut");
  el.empty();

  for (let employee of employeeArray) {
    let newList = `
  <li data-id=${employee.id}>${employee.firstName} ${employee.lastName} ${employee.id} ${employee.title} ${employee.salary} <button id="removeEmployee">Remove</button></li>
  `;
    el.append(newList);
  }
}

function remove() {
  for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].id == $(this).parent().data("id"))
      employeeArray.splice(i, 1);
  //  console.log($(this).parent().data('id'));
  }
  renderFunc();
}
