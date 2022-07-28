"use strict";

let subject;
// create input
function create_input(id, type, minValue, maxValue) {

    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("min", minValue);
    input.setAttribute("max", maxValue);
    input.setAttribute("required", true);
    input.setAttribute("id", id);
    return (input);

}
// create label
function create_label(id, text) {

    let label = document.createElement("label");
    label.innerHTML = text;
    label.setAttribute("for", id);
    return (label);

}

// create input for marks and credit
function create() {

    subject = document.getElementById("subject").value;
    if (subject !="" && subject>0 &&subject<21) {
        let content = document.getElementById("content");
        content.innerHTML="";
        for (let i = 1; i <= subject; i++) {

            let div_row = document.createElement("div");
            div_row.classList.add("row", "m-2");

            let div_col1 = document.createElement("div");
            div_col1.classList.add("col", "s12", "m6", "input-field", "my-2");
            div_col1.appendChild(create_input("sub-" + i, "number", 0, 100));
            div_col1.appendChild(create_label("sub-" + i, i + " Subject Marks"));

            let div_col2 = document.createElement("div");
            div_col2.classList.add("col", "s12", "m6", "input-field", "my-2");
            div_col2.appendChild(create_input("credit-" + i, "number", 1, 10));
            div_col2.appendChild(create_label("credit-" + i, i + " Subject Credit"));

            div_row.appendChild(div_col1);
            div_row.appendChild(div_col2);

            content.appendChild(div_row);
        }
        // show calculate box
        document.getElementById("calculate-section").classList.remove("hide");
        document.getElementById("sub-1").focus();
    }
    else{
        alert("Minimum subject :1\nMaximum subject :20");
    }
}

// calculate
function calculate_sgpa() {

    event.preventDefault();
    let credit_point = 0;
    let credit_total = 0;

    for (let i = 1; i <= subject; i++) {

        let marks = Number(document.getElementById("sub-" + i).value);
        let credit = Number(document.getElementById("credit-" + i).value);

        // calculate sgpa
        if (marks > 89) {
            credit_point += (credit * 10);
            credit_total += credit;
        }
        else if (marks > 79) {
            credit_point += (credit * 9);
            credit_total += credit;
        }
        else if (marks > 69) {
            credit_point += (credit * 8);
            credit_total += credit;
        }
        else if (marks > 59) {
            credit_point += (credit * 7);
            credit_total += credit;
        }
        else if (marks > 49) {
            credit_point += (credit * 6);
            credit_total += credit;
        }
        else if (marks > 39) {
            credit_point += (credit * 5);
            credit_total += credit;
        }
        else if (marks >= 35) {
            credit_point += (credit * 4);
            credit_total += credit;
        }
        else {
            credit_total += credit;
        }

    }
    // display sgpa
    swal({
        title: "SGPA : "+(credit_point / credit_total).toFixed(2),
        text: "Credit point : "+credit_point +"\nTotal credit : "+credit_total,
        icon: "success",
      });

}

// reset all 

function resetAll() {
    document.getElementById("calculate-section").classList.add("hide");
    document.getElementById("content").innerHTML = "";
    document.getElementById("subject").value = "";

}