const fetchData = async () => {
  const hasApiUrl = localStorage.getItem("apiUrl");
  if (hasApiUrl) {
    const response = await fetch(`${hasApiUrl}/api/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};
fetchData();
