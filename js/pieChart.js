var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var config = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
        backgroundColor: [
          window.chartColors.website,
          window.chartColors.video,
          window.chartColors.gaming,
          window.chartColors.contentDownstream,
          window.chartColors.contentUpstream,
          window.chartColors.voip
        ],
        label: "Dataset 1"
      }
    ],
    labels: ["Website", "Video", "Gaming", "Content Downstream", "Content Upstream", "VOIP"]
  },
  options: {
	responsive: true,
	legend: {
    display: false
  },
	maintainAspectRatio: false,
	spanGaps: false
  }
};

window.onload = function() {
  var ctx = document.getElementById("pie-chart").getContext("2d");
  window.myPie = new Chart(ctx, config);
};

document.getElementById("randomizeData").addEventListener("click", function() {
  config.data.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return randomScalingFactor();
    });
  });
  window.myPie.update();
});

var colorNames = Object.keys(window.chartColors);
document.getElementById("addDataset").addEventListener("click", function() {
  var newDataset = {
    backgroundColor: [],
    data: [],
    label: "New dataset " + config.data.datasets.length
  };

  for (var index = 0; index < config.data.labels.length; ++index) {
    //newDataset.data.push(randomScalingFactor());

    //var colorName = colorNames[index % colorNames.length];
    var newColor = 'rgb(255,255,255)';
    newDataset.backgroundColor.push(newColor);
  }

  config.data.datasets.push(newDataset);
  window.myPie.update();
});

document.getElementById("removeDataset").addEventListener("click", function() {
  config.data.datasets.splice(0, 1);
  window.myPie.update();
});
