document.addEventListener("DOMContentLoaded", function () {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  function updateTime() {
    const now = new Date();
    currentTimeElement.textContent = now.toUTCString().split(" ")[4];
    currentDayElement.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  updateTime();
  setInterval(updateTime, 1000);
});
