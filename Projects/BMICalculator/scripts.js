// Function to clear inputs
const inputClearer = () => {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
};

// Event listener for the 'Get BMI' button
document.getElementById("sub").addEventListener("click", function () {
  // Get values from input
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;

  let hVal = parseFloat(h);
  let wVal = parseFloat(w);

  // Validation
  if (!h || !w) {
    alert("Empty inputs detected! Please enter both height and weight.");
    inputClearer();
    return;
  }
  if (hVal <= 0 || wVal <= 0) {
    alert("Please enter valid positive numbers for height and weight!");
    inputClearer();
    return;
  }

  // Convert height to meters
  let heightM = hVal / 100;

  // Calculate BMI
  let bmi = wVal / (heightM * heightM);
  bmi = bmi.toFixed(2);

  // Determine BMI category and image
  let category = "";
  let imgSrc = "";

  if (bmi < 18.5) {
    category = "Underweight";
    imgSrc = "./assets/underweight.jpg";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Healthy";
    imgSrc = "./assets/healthy.jpg";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    imgSrc = "./assets/overweight.jpg";
  } else {
    category = "Obese";
    imgSrc = "./assets/obese.jpg";
  }

  // Display results
  document.getElementById("body").src = imgSrc;
  document.getElementById("res").innerText = `You are ${category}.`;
  document.getElementById("result").innerHTML = `Your BMI is <strong>${bmi}</strong>.`;
  document.getElementById("info").classList.remove("hide");

  // Extra info: weight in lbs, height in m & ft
  const weightLbs = (wVal * 2.20462).toFixed(2);
  const heightFt = (hVal / 30.48).toFixed(2);

  document.getElementById("weight-extra").innerText = `Weight: ${wVal} kg (${weightLbs} lbs)`;
  document.getElementById("height-extra").innerText = `Height: ${hVal} cm (${heightM.toFixed(2)} m / ${heightFt} ft)`;
});

