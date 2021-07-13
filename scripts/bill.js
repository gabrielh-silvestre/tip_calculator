// let bill_value = bill.value;
// let n_people_value = n_people.value;
// let tip_value = custom_tips.value/100;

var bill = 0;
var people = 1;
var tip = 0;

function bill_person() {
    let bill_per_person = bill/people;

    // console.log(bill_per_person);
    return bill_per_person.toFixed(2);
}

function tip_person() {
    let tip_per_person = (bill*tip)/people;

    // console.log(tip_per_person);
    return tip_per_person.toFixed(2);
}

function min_values() {
    if (isNaN(bill)) {
        bill = 0;
    } else if (isNaN(people)) {
        people = 1;
    } else if (isNaN(tip)) {
        tip = 0;
    }
}