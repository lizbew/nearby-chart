require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

require(['echarts', 'echarts/chart/bar', 'echarts/chart/pie'], function(ec){
        var chart1 = ec.init(document.getElementById('chart-1'));
        var option1 = {
            tooltip: { show: true },
            legend: {
                data: ['销量', 'goods']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    'name': '销量',
                    'type': 'bar',
                    'data': [5, 20, 40, 10, 10, 20]
                },
                {
                    'name': 'goods',
                    'type': 'bar',
                    'data': [7, 10, 33, 10, 21, 8]
                }
            ]
        };
        chart1.setOption(option1);

        var chart2 = ec.init(document.getElementById('chart-2'));
        var option2 = {
            title: {
                text: 'Gende',
                x: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['M','F']
            },
            calculable : true,
            series: [
                {
                    name: 'Test',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value:335, name:'M'},
                        {value:90, name:'F'}
                    ]
                }
            ]
        };
        chart2.setOption(option2);
    }
);
