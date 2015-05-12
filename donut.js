//template for objects that are donut shops
function donutShop(hours, location, minimum, maximum, donuts) {
    this.hours = hours;
    this.location = location;
    this.minimum = minimum;
    this.maximum = maximum;
    this.donuts = donuts;

    this.getDonutsPerHour = function() {
        return this.donuts * (Math.floor(Math.random() * (this.maximum + 1 - this.minimum)) + this.minimum);
    };

    this.getDonutsPerDay = function() {
        var donutsTotal = 0;
        for (var i = 0; i < this.hours; i++) {
            var donutHour = this.getDonutsPerHour();
            donutsTotal += donutHour;
            //alert('It is hour ' + i + ' and I made ' + donutHour + ' donuts this hour which gives me ' + donutsTotal + ' for the day');
        }
        return Math.round(donutsTotal);
    };
}

function DonutMaster() {
    //create donut shop location objects
    var downtownDonut = new donutShop (8, "Downtown", 8, 43, 4.50);
    var capitolDonut = new donutShop (8, "Capitol Hill", 4, 37, 2.00);
    var southlakeDonut = new donutShop (8, "South Lake Union", 9, 23, 6.33);
    var wedgewoodDonut = new donutShop (8, "Wedgewood", 2, 28, 1.25);
    var ballardDonut = new donutShop (8, "Ballard", 8, 58, 3.75);
    this.shopList = [downtownDonut, capitolDonut, southlakeDonut, wedgewoodDonut, ballardDonut];

    this.addShop = function(hours, location, minimum, maximum, donuts) {
        var newShop = new donutShop (hours, location, minimum, maximum, donuts);
        this.shopList.push(newShop);
    }

    this.generateReport = function() {
        var shopListLength = this.shopList.length;
        for (var i = 0; i < shopListLength; i++) {
            var currentShop = this.shopList[i];
            console.log(currentShop.location + " " + currentShop.getDonutsPerHour() + " " + currentShop.getDonutsPerDay());
        }
    }
}

var master = new DonutMaster();
master.addShop(24, "Fremont", 1, 100, 5);
master.generateReport();

//updating HTML for the page
for (var i = 0; i < 5; i++) {
    var shopNumber = i + 1;
    var elDonutLocation = document.getElementById('location' + shopNumber);
    elDonutLocation.textContent += master.shopList[i].location;
    var elDonutPerHour = document.getElementById('donut' + shopNumber);
    elDonutPerHour.textContent = master.shopList[i].getDonutsPerHour();
    var elDonutPerDay = document.getElementById('day' + shopNumber);
    elDonutPerDay.textContent = master.shopList[i].getDonutsPerDay();
}

/*
var elDonut1Location = document.getElementById('location1');
elDonut1Location.textContent = downtownDonut.location;

var elDonut1PerHour = document.getElementById('donut1');
elDonut1PerHour.textContent = downtownDonut.getDonutsPerHour();

var elDonut1PerDay = document.getElementById('day1');
elDonut1PerDay.textContent = downtownDonut.getDonutsPerDay();

var elDonut2PerHour = document.getElementById('donut2');
elDonut2PerHour.textContent = capitolDonut.getDonutsPerHour();

var elDonut2PerDay = document.getElementById('day2');
elDonut2PerDay.textContent = capitolDonut.getDonutsPerDay();

var elDonut3PerHour = document.getElementById('donut3');
elDonut3PerHour.textContent = southlakeDonut.getDonutsPerHour();

var elDonut3PerDay = document.getElementById('day3');
elDonut3PerDay.textContent = southlakeDonut.getDonutsPerDay();

var elDonut4PerHour = document.getElementById('donut4');
elDonut4PerHour.textContent = wedgewoodDonut.getDonutsPerHour();

var elDonut4PerDay = document.getElementById('day4');
elDonut4PerDay.textContent = wedgewoodDonut.getDonutsPerDay();

var elDonut5PerHour = document.getElementById('donut5');
elDonut5PerHour.textContent = ballardDonut.getDonutsPerHour();

var elDonut5PerDay = document.getElementById('day5');
elDonut5PerDay.textContent = ballardDonut.getDonutsPerDay();*/


/*var detailsCapitol = capitolDonut.location + ' ';
detailsCapitol   += capitolDonut.getDonutsPerHour();
detailsCapitol += 'Day ' + capitolDonut.getDonutsPerDay();
var elDonut2 = document.getElementById('donut2');
elDonut2.textContent = detailsCapitol;

var detailsSouthlake = southlakeDonut.location + ' ';
detailsSouthlake += southlakeDonut.getDonutsPerHour();
detailsSouthlake += 'Day ' + southlakeDonut.getDonutsPerDay();
var elDonut3 = document.getElementById('donut3');
elDonut3.textContent = detailsSouthlake;

var detailsWedgewood = wedgewoodDonut.location + ' ';
detailsWedgewood  += wedgewoodDonut.getDonutsPerHour();
detailsWedgewood += 'Day ' + wedgewoodDonut.getDonutsPerDay();
var elDonut4 = document.getElementById('donut4');
elDonut4.textContent = detailsWedgewood;

var detailsBallard = ballardDonut.location  + ' ';
detailsBallard += ballardDonut.getDonutsPerHour();
detailsBallard += 'Day ' + ballardDonut.getDonutsPerDay();
var elDonut5 = document.getElementById('donut5');
elDonut5.textContent = detailsBallard;*/
