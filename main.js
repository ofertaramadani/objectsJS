// 1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:
// A method that displays the car info
// A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.
// 2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:
// A function for adding two fraction objects.
// A function for subtracting two fraction objects.
// A function for multiplying two fraction objects.
// A function for dividing two fraction objects.
// A function for simplifying a fraction object.
// 3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:
// A method for displaying the time.
// A method for changing the time by a given amount of seconds.
// A method for changing the time by a given amount of minutes. 
// A method for changing the time by a given amount of hours.

//1
let car = {
    manufacturer: "Tooyota",
    model: "toyota",
    "year of release": 2015,
    "average speed": 200,
    displayInfo() {
        console.log("manufacturer:", this.manufacturer, "model:", this.model, "year of release", this["year of release"], "average speed", this["average speed"]);
    },
    countTime(distance) {
        let time=distance / this["average speed"];
        for (let i = 0; i <= time; i++) {
            if (i % 4 == 0) {
                time--;
            }
        }
        console.log("time needed is:",time);
    }
};
car.countTime(20);

let fraction = {
   numerator:20,
   denumerator:5
};
let fraction1 = {
    numerator:25,
    denumerator:13
 };
 

function addFraction(firstfraction,secondfraction){
     console.log("Mbledhja e dy thysave:",firstfraction.numerator/firstfraction.denumerator)+(secondfraction.numerator/secondfraction.denumerator);
}
addFraction(fraction,fraction1);

function substractFraction(firstfraction,secondfraction){
    console.log("Njehsimi i dy thysave:",firstfraction.numerator/firstfraction.denumerator)-(secondfraction.numerator/secondfraction.denumerator);
}
substractFraction(fraction,fraction1);

function divideFraction(firstfraction,secondfraction){
    console.log("Pjestimi i dy thysave:",firstfraction.numerator/firstfraction.denumerator)/(secondfraction.numerator/secondfraction.denumerator);
}
divideFraction(fraction,fraction1);

function multiplyFraction(firstfraction,secondfraction){
    console.log("Shumzimi i dy thysave:",firstfraction.numerator/firstfraction.denumerator)*(secondfraction.numerator/secondfraction.denumerator);
}
multiplyFraction(fraction,fraction1);

function simplify(fraction){
    for(let i=0;i<=fraction.numerator;i++){
        for(let j=0;j<=fraction.denumerator;j++){
            if(fraction.numerator%i==0 && fraction.denumerator%j==0 && i==j){
                if(i%j==0){
                    console.log(i/j);
                }else {
                console.log(i,"/",j);
                }
            }
        }
    }
}
simplify(fraction);

let time = {
    hours: 5,
    minutes: 23,
    seconds: 54,
   timeinfo(info) {
    console.log(`The time currently is: ${time.hours}:${time.minutes}:${time.seconds}`);
   },
changetimebysec(sechange){
        let sec = time.seconds + sechange;
        if(sec>=60){
            let m = (sec / 60) << 0
            time.minutes += m
            sec -= 60 * m
        }
        console.log(`The time currently is: ${this.hours}:${this.minutes}:${sec}`);
    },
changetimebymins(minchange){
        let min = time.minutes + minchange;
        if(min>=60){
            let h = (min / 60) << 0
            time.hours += h
            min -= 60 * h
        }
        console.log(`The time currently is: ${this.hours}:${min}:${this.seconds}`);
    }
};

time.changetimebysec(100);
