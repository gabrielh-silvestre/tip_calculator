document.addEventListener("DOMContentLoaded", () => {
    let people_bill = document.querySelectorAll(".input_pattern");
    people_bill.forEach((info) => {
        info.addEventListener("input", get_bill);
    })


    let people_tip = document.querySelectorAll(".ipt_tips");
    people_tip.forEach((tip_option) => {
        tip_option.addEventListener("click", get_tip);
    })

    let custom_check = document.querySelector("#custom_check");
    custom_check.addEventListener("click", focus_change_tip)

    document.querySelector("main").addEventListener("input", () => {
        min_values();
        
        show_tip(tip_person());
    })

    document.querySelector(".btn_reset").addEventListener("click", () => {
        window.location.reload();
    })    
})

function get_bill(event) {
    let input_field = event.target.name;
    let input_value = event.target.value;

    if (input_field == "total_bill") {
        bill = parseFloat(input_value);
    } else {
        people = parseFloat(input_value);
    }

    min_values();
    let total_bill = bill_person();
    show_bill(total_bill);
}
function show_bill(total) {
    let total_per_person = document.getElementById("total_amount");

    total_per_person.innerHTML = "$" + total;
}


function get_tip(event) {
    tip = parseFloat(event.target.value);

    let total_tip = tip_person();
    show_tip(total_tip);
}
function show_tip(total) {
    let total_tip_person = document.getElementById("tip_amount");

    total_tip_person.innerHTML = "$" + total;
}


function focus_change_tip() {
    let change_tip = document.getElementById("change_tip");

    change_tip.focus();
    change_tip.addEventListener("input", custom_tip);
}
function custom_tip(event) {
    tip = parseFloat(event.target.value) / 100;
    
    let total_tip = tip_person();
    show_tip(total_tip);

    console.log(tip)
}
