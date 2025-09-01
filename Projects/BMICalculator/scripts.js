// Attach an event listener to the 'sub' element when clicked
const inputClearer = () => {
  const hElement = document.getElementById("height");
  const wElement = document.getElementById("weight");
  hElement.value = "";
  wElement.value = "";
};

document.getElementById("sub").addEventListener("click", function () {
  // Get the height and weight values from the input fields
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;

  let hVal = parseInt(h);
  let wVal = parseInt(w);

  if (h.length === 0 || w.length === 0) {
    alert("Empty inputs detected! Please enter both height and weight");
    inputClearer();
    return;
  }
  if (hVal === 0) {
    alert("Zero height entered! Enter a valid value");
    inputClearer();
    return;
  }

  if (hVal < 0 || wVal < 0) {
    alert("Negative values found! Enter valid inputs");
    inputClearer();
    return;
  }

  // Convert height to meters
  let heightM = hVal / 100.0;

  // Calculate BMI
  let bmi = wVal / (heightM * heightM);
  bmi = parseFloat(bmi).toFixed(2);

  let img;
  let data = "";

  // Determine the BMI category and corresponding image
  if (bmi < 18.5) {
    data = "You Are Underweight";
    img = "./assets/underweight.jpg";
  } else if (bmi >= 18.5 && bmi < 25) {
    data = "You Are Healthy";
    img = "./assets/healthy.jpg";
  } else if (bmi >= 25 && bmi < 30) {
    data = "You Are Overweight";
    img = "./assets/overweight.jpg";
  } else if (bmi >= 30) {
    data = "You Are Obese";
    img = "./assets/obese.jpg";
  } else {
    data = "Please Enter a Valid Input";
  }

  // Display images and result
  document.getElementById("body").setAttribute("src", img);
  document.getElementById("res").innerHTML = ` ${data}.`;
  document.getElementById("result").innerHTML = `Your BMI is <strong>${bmi}</strong>.`;
  document.getElementById("info").setAttribute("class", "card show");

  // Extra conversions
  const weightLbs = (wVal * 2.20462).toFixed(2); // kg → lbs
  const heightFt = (hVal / 30.48).toFixed(2);    // cm → feet

  // Show extra info
  document.getElementById("weight-extra").innerHTML = `Weight: ${wVal} kg (${weightLbs} lbs)`;
  document.getElementById("height-extra").innerHTML = `Height: ${hVal} cm (${heightM.toFixed(2)} m / ${heightFt} ft)`;
});

