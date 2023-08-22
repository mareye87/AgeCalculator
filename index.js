const btnElement = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please anter your date of birth");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (birthdayDate > currentDate) {
    alert("Please enter valid birthday date");
  }
  if (
    month < 0 ||
    (month === 0 && currentDate.getDay() < birthdayDate.getDay())
  ) {
    age--;
  }
  return age;
}

btnElement.addEventListener("click", calculateAge);
