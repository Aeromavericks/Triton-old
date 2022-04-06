

//This script is currently animating the pressure gauge at the push of a button,
//but the concept works. The gauge is able to be animated through this code and the value given to
//the animation is a variable.

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(cb) {
        var i = 0, s = this.length;
        for (; i < s; i++) {
            cb && cb(this[i], i, this);
        }
    }
}

document.fonts && document.fonts.forEach(function(font) {
    font.loaded.then(function() {
        if (font.family.match(/Led/)) {
            document.gauges.forEach(function(gauge) {
                gauge.update();
                gauge.options.renderTo.style.visibility = 'visible';
            });
        }
    });
});

var timers = [];

function animateGauges() {
    timers.forEach(function(timer) {
        clearInterval(timer);
    });
    document.gauges.forEach(function(gauge) {
        timers.push(setInterval(function() {
            //--pull pressure data from pi and input here--
            var pressureOne = 600;
            gauge.value = pressureOne
        }, gauge.animation.duration + 50)); // time it takes to animate (0.5s)
    });
}

function resetGaugesAnimation() {
    timers.forEach(function(timer) {
        clearInterval(timer);
    });
    document.gauges.forEach(function(gauge) {
        timers.push(setInterval(function() {
            var pressureZero = 0;
            gauge.value = pressureZero 
        }, gauge.animation.duration + 50)); // time it takes to animate (0.5s)
    });
}

function setText() {
    var text = document.getElementById('gauge-text').value;

    document.gauges.forEach(function (gauge) {
        gauge.update({ valueText: text });
    });
}