const apiLink = "http://localhost:3001/api/v1/";

export async function postData(url, data) {
  const response = await fetch(apiLink + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erreur serveur");
  }

  return response.json();
}
