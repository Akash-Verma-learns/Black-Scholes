import { generateHeatmap } from './heatmap.js';  
document.getElementById("generateHeatmap").addEventListener("click", async () => {
  const S = parseFloat(document.getElementById("spot").value);
  const K = parseFloat(document.getElementById("strike").value);
  const r = parseFloat(document.getElementById("rate").value);
  const sigmaMin = parseFloat(document.getElementById("volatilityMin").value);
  const sigmaMax = parseFloat(document.getElementById("volatilityMax").value);
  const TMin = parseFloat(document.getElementById("maturityMin").value);
  const TMax = parseFloat(document.getElementById("maturityMax").value);

  const sigmaValues = Array.from({ length: 10 }, (_, i) => sigmaMin + (i * (sigmaMax - sigmaMin)) / 9);
  const TValues = Array.from({ length: 5 }, (_, i) => TMin + (i * (TMax - TMin)) / 4);

  const heatmapData = await fetchHeatmapData({
    S,
    K,
    r,
    T_values: TValues,
    sigma_values: sigmaValues,
  });

  document.getElementById("heatmap").innerHTML = ""; // Clear existing canvas
  generateHeatmap("heatmap", Object.values(heatmapData), TValues, sigmaValues);
});
