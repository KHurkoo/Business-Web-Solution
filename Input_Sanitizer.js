// Obtain the references to the input elements.
const companyNameInput = document.getElementById("company-name");
const numOfEmployeesInput = document.getElementById("num-employees");
const revenueInput = document.getElementById("revenue");
const costsInput = document.getElementById("costs");
const additionalIncomeInput = document.getElementById("additional-income");
const additionalExpensesInput = document.getElementById("additional-expenses");

// Establish regular expressions to verify the accuracy of the input
const companyNameRegex = /^[a-zA-Z0-9 ]*$/;
const numericRegex = /^\d+(\.\d{1,2})?$/;

// Enhance input components using event listeners to sanitize input values.
companyNameInput.addEventListener("blur", event => {
  if (!companyNameRegex.test(event.target.value)) {
    event.target.classList.add("error");
    event.target.nextElementSibling.textContent = "Invalid company name";
  } else {
    event.target.classList.remove("error");
    event.target.nextElementSibling.textContent = "";
  }
});

numOfEmployeesInput.addEventListener("blur", event => {
  if (!Number.isInteger(+event.target.value)) {
    event.target.classList.add("error");
    event.target.nextElementSibling.textContent = "Invalid number of employees";
  } else {
    event.target.classList.remove("error");
    event.target.nextElementSibling.textContent = "";
  }
});

revenueInput.addEventListener("blur", event => {
  if (!numericRegex.test(event.target.value)) {
    event.target.classList.add("error");
    event.target.nextElementSibling.textContent = "Invalid revenue";
  } else {
    event.target.classList.remove("error");
    event.target.nextElementSibling.textContent = "";
  }
});

costsInput.addEventListener("blur", event => {
  if (!numericRegex.test(event.target.value)) {
    event.target.classList.add("error");
    event.target.nextElementSibling.textContent = "Invalid costs";
  } else {
    event.target.classList.remove("error");
    event.target.nextElementSibling.textContent = "";
  }
});

additionalIncomeInput.addEventListener("blur", event => {
  if (!numericRegex.test(event.target.value)) {
    event.target.classList.add("error");
    event.target.nextElementSibling.textContent = "Invalid additional income";
  } else {
    event.target.classList.remove("error");
    event.target.nextElementSibling.textContent = "";
  }
});

additionalExpensesInput.addEventListener("blur", event => {
  if (!numericRegex.test(event.target.value)) {
    event.target.classList.add("error");
    event.target.nextElementSibling.textContent = "Invalid additional expenses";
  } else {
    event.target.classList.remove("error");
    event.target.nextElementSibling.textContent = "";
  }
});
