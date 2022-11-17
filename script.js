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
   monthlyCost()
  renderFunc();
}

let dollars = Intl.NumberFormat('en-US')
function monthlyCost(){
  let total = 0
  for (let employee of employeeArray){
    total += (employee.salary/12);
  } 
  total = +total
    $('#costOut').empty().append("$", dollars.format(total))
} 

function renderFunc() {
  let el = $("#employeesOut");
  el.empty();

  for (let employee of employeeArray) {
    let newList = `
  <li data-id=${employee.id}>${employee.firstName} ${employee.lastName} ${employee.id} ${employee.title} $${dollars.format(employee.salary)} <button id="removeEmployee">Remove</button></li>
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
