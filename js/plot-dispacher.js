var plot_dispatcher = {
    'dedx-ke': {
        xAxis: {title: {text: 'Kinetic Energy [Mev]'}, type: 'logarithmic', min: 0.05, max: 10},
        yAxis: {title: {text: 'dE/dx [Mev/cm]'}, min: 2, max: 4.5}
    },
    'dedx-residual-range': {
        xAxis: {title: {text: 'Residual Range [cm]'}, min: 0, max: 100},
        yAxis: {title: {text: 'dE/dx [Mev/cm]'}, min: 2, max: 10}
    }
}
