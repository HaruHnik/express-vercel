const hasApiUrl = localStorage.getItem("apiUrl");
const fetchData = async () => {
  if (hasApiUrl) {
    const response = await fetch(`${hasApiUrl}/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

const uploadFile = async () => {
  const inputTag = document.getElementById("inputFile");
  const formData = new FormData();
  const files = [...inputTag.files];
  files.forEach((file) => formData.append("files", file));
  const response = await fetch(`${hasApiUrl}/uploadFile`, {
    method: "POST",
    body: formData,
  });
  console.log(response);
};

uploadFile();
fetchData();
