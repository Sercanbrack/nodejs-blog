const dashboardHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/dashboard");
};

const loginHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/login");
  console.log("clicked!");
};

document
  .getElementById("dashButton")
  .addEventListener("click", dashboardHandler);
