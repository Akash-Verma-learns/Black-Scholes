


export function generateHeatmap(canvasId, heatmapData, T_values, sigma_values) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  const chartData = {
    labels: sigma_values,
    datasets: T_values.map((T, index) => ({
      label: `T=${T}`,
      data: heatmapData[index],
      borderColor: `hsl(${index * 45}, 70%, 50%)`,
      backgroundColor: `hsla(${index * 45}, 70%, 50%, 0.2)`,
      fill: true,
    })),
  };

  new Chart(ctx, {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: "Option Price Heatmap" },
      },
      scales: {
        x: { title: { display: true, text: "Volatility (σ)" } },
        y: { title: { display: true, text: "Option Price" } },
      },
    },
  });
}
