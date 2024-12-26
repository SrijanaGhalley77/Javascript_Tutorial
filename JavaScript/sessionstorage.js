//Session Storage: survives only a session
// sessionSorage.setItem("name", "Seeru");
// sessionStorage.getItem("name");
// sessionStorage.removeItem("name");
// sessionStorage.clear();

// Storage Event: data gets updated in local storage or session storage when storage event is triggered with these properties:
window.onstorage = (e) => {
  alert("changed");
  console.log(e);
}


