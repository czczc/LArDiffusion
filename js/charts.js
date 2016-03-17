var all_charts= {};

Highcharts.setOptions({
    chart: {zoomType: 'xy', animation: false,
        style: {
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '14px'
        },
        alignTicks: false,
    },
    exporting: {
        buttons: {
            contextButton: {x: 5}
        }
    },
    credits: { enabled: false },
    title: {text: ''},
    legend: {
        backgroundColor: '#FFFFFF',
        layout: 'vertical',
        floating: true,
        align: 'right',
        verticalAlign: 'top',
        x: -20,
        y: 25,
        itemMarginTop: 3,
        itemMarginBottom: 3,
        shadow: true
        // borderWidth: 0
    },
    plotOptions: {
        series: {
            animation: false
        }
    },
    xAxis: {gridLineWidth: 1, startOnTick: true, tickPosition: 'inside'},
    yAxis: {gridLineWidth: 1, startOnTick: true, tickPosition: 'inside'}
    // yAxis: { title: {text: ''}, tickPixelInterval: 24, endOnTick: false },
    // tooltip: { formatter: datetime_formatter },
    // plotOptions: {
    //     scatter: { marker: {radius: 1} }
    // }
});


function create_chart(id, options) {
    $.getJSON('data/'+id+'.json', function(series){
        var highchartsOptions = {
            chart: {renderTo: id},
            series: series
        };
        $.extend(true, highchartsOptions, options);
        all_charts[id] = new Highcharts.Chart(highchartsOptions);
        // console.log(all_charts);
    });
}

var dispatcher = {
    'dedx-ke': {
        xAxis: {title: {text: 'Kinetic Energy [Mev]'}, type: 'logarithmic', min: 0.05, max: 10},
        yAxis: {title: {text: 'dE/dx [Mev/cm]'}, min: 2, max: 4.5}
    },
    'dedx-residual-range': {
        xAxis: {title: {text: 'Residual Range [cm]'}, min: 0, max: 100},
        yAxis: {title: {text: 'dE/dx [Mev/cm]'}, min: 2, max: 10}
    }
}

$('.list-group-item').click(function(e){
    e.preventDefault();
    var $el = $(this).next();
    var id = $el.attr('id');
    if (all_charts[id] == undefined) {
        create_chart(id, dispatcher[id]);
    }
    $el.toggle();
    // console.log(id);
});

// create_chart('dedx-ke', {
//     title: {text: 'dE/dx vs. Kinetic Energy'},
//     xAxis: {title: {text: 'Kinetic Energy [Mev]'}, type: 'logarithmic', min: 0.05, max: 10},
//     yAxis: {title: {text: 'dE/dx [Mev/cm]'}, min: 2, max: 4.5}
// });

// create_chart('dedx-residual-range', {
//     title: {text: 'dE/dx vs. Residual Range'},
//     xAxis: {title: {text: 'Residual Range [cm]'}, min: 0, max: 100},
//     yAxis: {title: {text: 'dE/dx [Mev/cm]'}, min: 2, max: 10}
// });

