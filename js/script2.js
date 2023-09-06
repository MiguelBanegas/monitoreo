const ctx = document.getElementById('humedadChart').getContext('2d');
const humedadData = [
    { timestamp: '2023-08-01', humedad: 25 },
    { timestamp: '2023-08-02', humedad: 27 },
    { timestamp: '2023-08-03', humedad: 24 },
    { timestamp: '2023-08-04', humedad: 21 },
    // ... agregar más datos
  ];

const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: humedadDataData.map(entry => entry.timestamp),
      datasets: [{
        label: 'Humedad',
        data: humedadData.map(entry => entry.humedad),
        borderColor: 'blue',
        fill: false
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false
    }
  });