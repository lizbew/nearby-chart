require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

require(['echarts', 'echarts/chart/bar', 'echarts/chart/pie'], function(ec){
        var option_pie = {
            title: {
                text: 'Sex',
                x: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['M', 'F']
            },
            calculable : true,
            series: [
                {
                    name: 'Test',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {name: 'M', value: 20},
                        {name: 'F', value: 18}
                    ]
                }
            ]
        };

    function drawChart_1(chart_data) {
        $('#c1-total').text(chart_data.total);
        $('#c1-min-dist').text(chart_data.min_distance);
        $('#c1-max-dist').text(chart_data.max_distance);

        var chart = ec.init(document.getElementById('chart-1'));
        var legend_data = ['男性', '女性'];
        var series_data = [
            {name: '男性', value: chart_data.data['M']},
            {name: '女性', value: chart_data.data['F']}
        ];

        var option = _.clone(option_pie);
        option.title.text = '男女比例';
        option.legend.data = legend_data;
        option.series[0].name = '男女比例';
        option.series[0].data = series_data;
        chart.setOption(option);
    }

    function drawChart_2(chart_data) {
        var chart = ec.init(document.getElementById('chart-2'));
        var legend_data = ['男性', '女性'];
        var xAxis_data = chart_data.ages;
        var series = [
            {
                'name': '男性',
                'type': 'bar',
                'data': chart_data.data['M']
            },
            {
                'name': '女性',
                'type': 'bar',
                'data': chart_data.data['F']
            }
        ];
        var option =  {
            tooltip: { show: true },
            legend: {
                data: legend_data
            },
            xAxis: [
                {
                    type: 'category',
                    data: xAxis_data
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: series
        };
        chart.setOption(option);

    }

    function drawChart_3(chart_data) {

        var chart_m = ec.init(document.getElementById('chart-3-1'));
        var legend_data_m = _.keys(chart_data['M']);

        var series_data_m = _.map(chart_data['M'], function(num, key){
            return {name: key, value: num};
        });
        var option_m = _.clone(option_pie);
        option_m.title.text = '男性';
        option_m.legend.data = legend_data_m;
        option_m.series[0].name = '男性VIP比例'
        option_m.series[0].data = series_data_m;

        chart_m.setOption(option_m);

        var chart_f = ec.init(document.getElementById('chart-3-2'));
        var legend_data_f = _.keys(chart_data['F']);

        var series_data_f = _.map(chart_data['F'], function(num, key){
            return {name: key, value: num};
        });
        var option_f = _.clone(option_pie);
        option_f.title.text = '女性';
        option_f.legend.data = legend_data_f;
        option_m.series[0].name = '女性VIP比例'
        option_f.series[0].data = series_data_f;

        chart_f.setOption(option_f);

    }

    function drawChart_4(chart_data) {

        var chart_m = ec.init(document.getElementById('chart-4-1'));
        var legend_data_m = _.keys(chart_data['M']);

        var series_data_m = _.map(chart_data['M'], function(num, key){
            return {name: key, value: num};
        });
        var option_m = _.clone(option_pie);
        option_m.title.text = '男性';
        option_m.legend.data = legend_data_m;
        option_m.series[0].name = '男性使用手机类型比例'
        option_m.series[0].data = series_data_m;

        chart_m.setOption(option_m);

        var chart_f = ec.init(document.getElementById('chart-4-2'));
        var legend_data_f = _.keys(chart_data['F']);

        var series_data_f = _.map(chart_data['F'], function(num, key){
            return {name: key, value: num};
        });
        var option_f = _.clone(option_pie);
        option_f.title.text = '女性';
        option_f.legend.data = legend_data_f;
        option_m.series[0].name = '女性使用手机类型比例'
        option_f.series[0].data = series_data_f;

        chart_f.setOption(option_f);

    }

    $.getJSON('/nearby_stat.json', function(data){
        drawChart_1(data['chart-1']);
        drawChart_2(data['chart-2']);
        drawChart_3(data['chart-3']);
        drawChart_4(data['chart-4']);
    });

});
