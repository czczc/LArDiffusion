Vue.filter('trunc', function (value, precision) {
    if (precision==undefined) precision=4;
    return value.toFixed(precision);
});

var vm = new Vue({
    el: '#app',
    data: {
        E: 0.5,
        T: 87.0,
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
        },
        v: function() {
            return this.mu * this.E /1000; // cm / us
            // // if(this.E > 4.0) {
            // //     return "E-field too high";
            // // }
            // // if(this.T < 87.0 || this.T > 94.0) {
            // //     return "T out of range";
            // // }
            // var tshift = -87.203+this.T;
            // var xFit = 0.0938163-0.0052563*tshift-0.0001470*tshift*tshift;
            // var uFit = 5.18406+0.01448*tshift-0.003497*tshift*tshift-0.000516*tshift*tshift*tshift;
            // var vd;

            // // Icarus Parameter Set, use as default
            // var  P1 = -0.04640; // K^-1
            // var  P2 = 0.01712;  // K^-1
            // var  P3 = 1.88125;  // (kV/cm)^-1
            // var  P4 =  0.99408; // kV/cm
            // var  P5 =  0.01172; // (kV/cm)^-P6
            // var  P6 =  4.20214;
            // var  T0 =  105.749; // K
            // // Walkowiak Parameter Set
            // var  P1W = -0.01481;
            // var  P2W = -0.0075;
            // var  P3W =  0.141;
            // var  P4W =  12.4;
            // var  P5W =  1.627;
            // var  P6W =  0.317;
            // var  T0W =  90.371;

            // // From Craig Thorne . . . currently not documented
            // // smooth transition from linear at small fields to
            // // icarus fit at most fields to Walkowiak at very high fields
            // if (this.E < xFit) { vd=this.E*uFit; }
            // else if (this.E<0.619) {
            //     vd = ((P1*(this.T-T0)+1)
            //            *(P3*this.E*Math.log(1+P4/this.E) + P5*Math.pow(this.E,P6))
            //            +P2*(this.T-T0));
            // }
            // else if (this.E<0.699) {
            //     vd = 12.5*(this.E-0.619)*((P1W*(this.T-T0W)+1)
            //            *(P3W*this.E*Math.log(1+P4W/this.E) + P5W*Math.pow(this.E,P6W))
            //            +P2W*(this.T-T0W))+
            //          12.5*(0.699-this.E)*((P1*(this.T-T0)+1)
            //            *(P3*this.E*Math.log(1+P4/this.E) + P5*Math.pow(this.E,P6))
            //            +P2*(this.T-T0));
            //    }
            // else {
            //     vd = ((P1W*(this.T-T0W)+1)
            //            *(P3W*this.E*Math.log(1+P4W/this.E) + P5W*Math.pow(this.E,P6W))
            //            +P2W*(this.T-T0W));
            // }

            // vd /= 10.;

            // return vd; // in cm/us
        }
    }
});


