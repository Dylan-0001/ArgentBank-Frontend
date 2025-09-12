const apiLink = "http://localhost:3001/api/v1/";

export async function postData(url: string, data: unknown) {
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

export async function getData(url: string, token: string) {
  const response = await fetch(apiLink + url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erreur serveur");
  }

  return response.json();
}

