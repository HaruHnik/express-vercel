const fetchData = async () => {
  const hasApiUrl = localStorage.getItem("apiUrl");
  if (hasApiUrl) {
    const response = await fetch(`${hasApiUrl}/users`);
    const data = await response.json();
  } else {
    window.location.href = "/api";
  }
};

const uploadFile = () => {
  const inputTag = document.getElementById("inputFile");
  console.log(inputTag);
};
uploadFile();
fetchData();
