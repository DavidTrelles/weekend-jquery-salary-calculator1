$(document).ready(onReady);

let employeeArray = [];

function onReady() {
  $("#submit").on("click", newEmployee);
  $("#outputs").on("click", "#removeEmployee", remove);
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
  monthlyCost();
  renderFunc();
}

let dollars = Intl.NumberFormat("en-US");
function monthlyCost() {
  let total = 0;
  for (let employee of employeeArray) {
    total += employee.salary / 12;
  }
  total = +total;
  total = Math.floor(total);
  $("#costOut").empty().append("$", dollars.format(total));
  total > 20000
    ? $("#costOut").css("background-color", "red")
    : $("#costOut").css("background-color", "white");
}


function renderFunc() {
  let el = $("#newRow");
  el.empty();

  for (let employee of employeeArray) {
    //   let newList = `
    // <li data-id=${employee.id}>${employee.firstName} ${employee.lastName} ${employee.id} ${employee.title} $${dollars.format(employee.salary)} <button id="removeEmployee">Remove</button></li>
    // `;
    let newRow = `
  <tr data-id=${employee.id}>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>$${dollars.format(employee.salary)}</td>
            <td><button id="removeEmployee">Remove</button></td>
          </tr>
  `;
    el.append(newRow);
  }
}

function remove() {
  for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].id == $(this).parent().parent().data("id"))
      employeeArray.splice(i, 1);
  }
  monthlyCost();
  renderFunc();
}
