//template for objects that are donut shops
function donutShop(hours, location, minimum, maximum, donuts) {
    this.hours = hours;
    this.location = location;
    this.minimum = minimum;
    this.maximum = maximum;
    this.donuts = donuts;

    this.donutRandom = function() {
        return this.donuts * (Math.floor(Math.random() * (this.maximum + 1 - this.minimum)) + this.minimum);
    };

    this.donutDay = function() {
        var donutsTotal = 0;
        for (var i = 0; i < this.hours; i++) {
            var donutHour = this.donutRandom();
            donutsTotal += donutHour;
            //alert('It is hour ' + i + ' and I made ' + donutHour + ' donuts this hour which gives me ' + donutsTotal + ' for the day');
        }
        return Math.round(donutsTotal);
    };
}

//create donut shop location objects
var downtownDonut = new donutShop (8, "Downtown", 8, 43, 4.50);
var capitolDonut = new donutShop (8, "Capitol Hill", 4, 37, 2.00);
var southlakeDonut = new donutShop (8, "South Lake Union", 9, 23, 6.33);
var wedgewoodDonut = new donutShop (8, "Wedgewood", 2, 28, 1.25);
var ballardDonut = new donutShop (8, "Ballard", 8, 58, 3.75);

//updating HTML for the page
var elDonut1 = document.getElementById('donut1');
elDonut1.textContent = downtownDonut.donutRandom();

var elDonut1 = document.getElementById('day1');
elDonut1.textContent = downtownDonut.donutDay();

var elDonut2 = document.getElementById('donut2');
elDonut2.textContent = capitolDonut.donutRandom();

var elDonut2 = document.getElementById('day2');
elDonut2.textContent = capitolDonut.donutDay();

var elDonut3 = document.getElementById('donut3');
elDonut3.textContent = southlakeDonut.donutRandom();

var elDonut3 = document.getElementById('day3');
elDonut3.textContent = southlakeDonut.donutDay();

var elDonut4 = document.getElementById('donut4');
elDonut4.textContent = wedgewoodDonut.donutRandom();

var elDonut4 = document.getElementById('day4');
elDonut4.textContent = wedgewoodDonut.donutDay();

var elDonut5 = document.getElementById('donut5');
elDonut5.textContent = ballardDonut.donutRandom();

var elDonut5 = document.getElementById('day5');
elDonut5.textContent = ballardDonut.donutDay();


/*var detailsCapitol = capitolDonut.location + ' ';
detailsCapitol   += capitolDonut.donutRandom();
detailsCapitol += 'Day ' + capitolDonut.donutDay();
var elDonut2 = document.getElementById('donut2');
elDonut2.textContent = detailsCapitol;

var detailsSouthlake = southlakeDonut.location + ' ';
detailsSouthlake += southlakeDonut.donutRandom();
detailsSouthlake += 'Day ' + southlakeDonut.donutDay();
var elDonut3 = document.getElementById('donut3');
elDonut3.textContent = detailsSouthlake;

var detailsWedgewood = wedgewoodDonut.location + ' ';
detailsWedgewood  += wedgewoodDonut.donutRandom();
detailsWedgewood += 'Day ' + wedgewoodDonut.donutDay();
var elDonut4 = document.getElementById('donut4');
elDonut4.textContent = detailsWedgewood;

var detailsBallard = ballardDonut.location  + ' ';
detailsBallard += ballardDonut.donutRandom();
detailsBallard += 'Day ' + ballardDonut.donutDay();
var elDonut5 = document.getElementById('donut5');
elDonut5.textContent = detailsBallard;*/
