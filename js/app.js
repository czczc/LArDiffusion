Vue.filter('trunc', function (value, precision) {
    if (precision==undefined) precision=4;
    return value.toFixed(precision);
});

var vm = new Vue({
    el: '#app',
    data: {
        E: 0.5,
        T: 89.0,
        T0: 89.0,
        T1: 87.0,
        a0: 551.6,
        a1: 7953.7,
        a2: 4440.43,
        a3: 4.29,
        a4: 43.63,
        a5: 0.2053,
        b0: 0.0075,
        b1: 742.9,
        b2: 3269.6,
        b3: 31678.2
    },
    computed: {
        mu: function() {
            return (this.a0 + this.a1*this.E + this.a2*Math.pow(this.E, 1.5) + this.a3*Math.pow(this.E, 2.5)) / (1 + this.a1/this.a0*this.E + this.a4*Math.pow(this.E, 2) + this.a5*Math.pow(this.E, 3)) * Math.pow(this.T/this.T0, -1.5);
        },
        eps_L: function() {
            return (this.b0 + this.b1*this.E + this.b2*this.E*this.E) / (1 + this.b1/this.b0*this.E + this.b3*this.E*this.E) * this.T/this.T1;
        },
        D_L: function() {
            return this.eps_L * this.mu;
        }
    }
});


