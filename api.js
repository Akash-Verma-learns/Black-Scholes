const API_BASE_URL = "http://localhost:5000/api";

async function fetchOptionPrice(params) {
  const response = await fetch(`${API_BASE_URL}/option-price`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  return response.json();
}

async function fetchHeatmapData(params) {
  const response = await fetch(`${API_BASE_URL}/heatmap-data`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  return response.json();
}
