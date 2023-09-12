function incrementNumber(targetId, targetNumber, speed) {
  const targetElement = document.getElementById(targetId);
  let currentNumber = 0;
  const incrementSpeed = speed;

  function increment() {
    if (currentNumber < targetNumber) {
      currentNumber += incrementSpeed;
      targetElement.textContent = currentNumber;
      setTimeout(increment, 100); // Delay between increments
    } else {
      targetElement.textContent = targetNumber;
    }
  }
  increment();
}
incrementNumber("projectCount", 150, 6);
incrementNumber("clientCount", 130, 5);
incrementNumber("awardCount", 25, 1);
incrementNumber("teamCount", 40, 2);
