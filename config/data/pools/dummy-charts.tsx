export const CHARTS = {
  chart: {
    height: 260,
    width: 450,
    type: "area",
  },
  options: {
    chart: {
      id: "basic-bar",
      sparkline: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    colors: ["#303757"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#303757"],
      gradient: {
        shadeIntensity: 0.3,
        opacityFrom: 0.5,
        opacityTo: 1,
        stops: [0, 100],
      },
      type: "gradient",
    },
    markers: {
      hover: {
        size: 3,
        colors: ["#303757"],
      },
      size: 0,
    },
    stroke: {
      colors: ["#303757"],
      width: 3,
    },
    xaxis: {
      categories: [24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
    },
  },
  series: [
    {
      name: "Daily Value",
      data: [40, 65, 158, 68, 39, 109, 109, 259, 169, 190, 140],
    },
  ],
};
