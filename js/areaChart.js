var presets = window.chartColors;
var utils = Samples.utils;
var inputs = {
  min: 20,
  max: 80,
  count: 24,
  decimals: 2,
  continuity: 24
};

function generateData() {
  return utils.numbers(inputs);
}

function generateLabels() {
  return utils.hours({ count: inputs.count });
}

utils.srand(42);

var data = {
  labels: generateLabels(),
  datasets: [
    {
      backgroundColor: utils.transparentize(presets.red),
      borderColor: presets.red,
      data: generateData(),
      hidden: true,
      label: "D0"
    },
    {
      backgroundColor: utils.transparentize(presets.orange),
      borderColor: presets.orange,
      data: generateData(),
      label: "D1",
      fill: "-1"
    },
    {
      backgroundColor: utils.transparentize(presets.yellow),
      borderColor: presets.yellow,
      data: generateData(),
      hidden: true,
      label: "D2",
      fill: 1
    },
    {
      backgroundColor: utils.transparentize(presets.green),
      borderColor: presets.green,
      data: generateData(),
      label: "D3",
      fill: "-1"
    },
    {
      backgroundColor: utils.transparentize(presets.blue),
      borderColor: presets.blue,
      data: generateData(),
      label: "D4",
      fill: "-1"
    },
    {
      backgroundColor: utils.transparentize(presets.grey),
      borderColor: presets.grey,
      data: generateData(),
      label: "D5",
      fill: "+2"
    },
    {
      backgroundColor: utils.transparentize(presets.purple),
      borderColor: presets.purple,
      data: generateData(),
      label: "D6",
      fill: false
    },
    {
      backgroundColor: utils.transparentize(presets.red),
      borderColor: presets.red,
      data: generateData(),
      label: "D7",
      fill: 8
    },
    {
      backgroundColor: utils.transparentize(presets.orange),
      borderColor: presets.orange,
      data: generateData(),
      hidden: true,
      label: "D8",
      fill: "end"
    }
  ]
};

var options = {
  maintainAspectRatio: false,
  spanGaps: false,
  elements: {
    line: {
      tension: 0.000001
    }
  },
  scales: {
    yAxes: [
      {
        stacked: true
      }
    ]
  },
  plugins: {
    filler: {
      propagate: false
    },
    "samples-filler-analyser": {
      target: "chart-analyser"
    }
  },
  legend: {
    display: false
  },
  title: {
    display: true,
    position: 'left',
    text: 'Count',
    fontStyle: 'normal'
  }
};

var chart1 = new Chart("graph-1", {
  type: "line",
  data: data,
  options: options
});

// eslint-disable-next-line no-unused-vars
function togglePropagate1(btn) {
  var value = btn.classList.toggle("btn-on");
  chart1.options.plugins.filler.propagate = value;
  chart1.update();
}

// eslint-disable-next-line no-unused-vars
function toggleSmooth1(btn) {
  var value = btn.classList.toggle("btn-on");
  chart1.options.elements.line.tension = value ? 0.4 : 0.000001;
  chart1.update();
}

// eslint-disable-next-line no-unused-vars
function randomize1() {
  chart1.data.datasets.forEach(function(dataset) {
    dataset.data = generateData();
  });
  chart1.update();
}


/* CHART TWO CONFIG */

var options2 = options;
options2.title = {
  display: true,
  position: 'left',
  text: 'Consumption (GB)',
  fontStyle: 'normal',
}

var chart2 = new Chart("graph-2", {
  type: "line",
  data: data,
  options: options2,
});

// eslint-disable-next-line no-unused-vars
function togglePropagate2(btn) {
  var value = btn.classList.toggle("btn-on");
  chart2.options.plugins.filler.propagate = value;
  chart2.update();
}

// eslint-disable-next-line no-unused-vars
function toggleSmooth2(btn) {
  var value = btn.classList.toggle("btn-on");
  chart2.options.elements.line.tension = value ? 0.4 : 0.000001;
  chart2.update();
}

// eslint-disable-next-line no-unused-vars
function randomize2() {
  chart2.data.datasets.forEach(function(dataset) {
    dataset.data = generateData();
  });
  chart2.update();
}
