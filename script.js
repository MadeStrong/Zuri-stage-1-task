document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();
    const currentUTCTime = new Date().getTime();

    // Update the current day of the week
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = daysOfWeek[currentDay];

    // Update the current UTC time
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
});
