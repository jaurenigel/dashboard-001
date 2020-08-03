let myChart = echarts.init(document.getElementById("bar"));
let myChart2 = echarts.init(document.getElementById("pie"));

// specify chart configuration item and data
let option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
    data: [
      "Users",
      "Downloads",
      "Active",
      "Changes",
      "Donations",
      "Supported",
      "Queries",
      "Pending",
      "Completed",
    ],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["JAN", "FEB", "FEB", "MAR", "APR", "MAY", "JUN"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Users",
      type: "bar",
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Downloads",
      type: "bar",
      stack: "广告",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Active",
      type: "bar",
      stack: "广告",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Changes",
      type: "bar",
      stack: "广告",
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Donations",
      type: "bar",
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [[{ type: "min" }, { type: "max" }]],
      },
    },
    {
      name: "Supported",
      type: "bar",
      barWidth: 5,
      stack: "Donations",
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: "Queries",
      type: "bar",
      stack: "Donations",
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: "Pending",
      type: "bar",
      stack: "Donations",
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: "Completed",
      type: "bar",
      stack: "Donations",
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
};



let option2 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['Users', 'Downloads', 'Donations', 'Likes', 'Changes']
    },
    series: [
        {
            name: 'Analytics',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: 'Users'},
                {value: 310, name: 'Downloads'},
                {value: 234, name: 'Donations'},
                {value: 135, name: 'Likes'},
                {value: 1548, name: 'Changes'}
            ]
        }
    ]
};

// use configuration item and data specified to show chart
myChart.setOption(option);
myChart2.setOption(option2);

