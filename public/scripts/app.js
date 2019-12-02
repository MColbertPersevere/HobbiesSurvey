"use strict";

var log = console.log;
var state = {
    name: "",
    age: "",
    nameE: false,
    emailE: false,
    ageE: false,
    area: 'Area-51',
    area2: '',
    area3: ''
};

var val = function val(e) {
    e.preventDefault();
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var age = document.querySelector('#age').value;

    if (name == null || name == '') {
        state.nameE = true;
    } else {
        state.nameE = false;
        state.name = name;
    }

    if (age >= 18) {
        state.ageE = false;
    } else {
        state.ageE = true;
    }

    if (email.indexOf('@') <= 0) {
        state.emailE = true;
    } else {
        state.emailE = false;
    }

    if (!state.nameE && !state.ageE && !state.emailE) {
        renderNext();
    } else {
        render();
    }
};

var renderNext = function renderNext() {
    var hobby = document.querySelector('#hobby').value;
    var age = document.querySelector('#age').value;
    if (hobby == 'Basketball' && age < 45) {
        state.area = state.area;
        state.area2 = 'YMCA';
        state.area3 = "Gold's Gym";
    } else if (hobby == 'Basketball' && age > 45) {
        state.area = state.area;
        state.area2 = 'Join A Senior Citizen Club';
        state.area3 = 'Watch A Basketball Game On TV!';
    }

    if (hobby == 'Coding' && age < 45) {
        state.area = state.area;
        state.area2 = 'Library';
        state.area3 = 'Shared Services Center';
    } else if (hobby == 'Coding' && age > 45) {
        state.area = state.area;
        state.area2 = 'Stay Home';
        state.area3 = 'Teach Family To Code';
    }
    if (hobby == 'Vacationing' && age < 45) {
        state.area = state.area;
        state.area2 = 'Hawaii';
        state.area3 = 'Brazil';
    } else if (hobby == 'Vacationing' && age > 45) {
        state.area = state.area;
        state.area2 = 'Ride A Cruise Ship';
        state.area3 = 'Dream About A Vacation!';
    }

    var templateNext = React.createElement(
        "div",
        { className: "bg-dark rounded shadow-sm p-5 mt-5" },
        React.createElement(
            "h1",
            { className: "text-white text-center" },
            "Hello ",
            state.name
        ),
        React.createElement(
            "h4",
            { className: "text-white text-center" },
            "Your hobby is ",
            hobby
        ),
        React.createElement(
            "p",
            { className: "text-white text-center mt-3 mb-4" },
            "This is what we have for ",
            hobby,
            " for your age group."
        ),
        React.createElement(
            "ol",
            { className: "text-center list-group" },
            React.createElement(
                "li",
                { id: "secOne", className: "text-danger text-center list-group-item" },
                state.area
            ),
            React.createElement(
                "li",
                { id: "secTwo", className: "text-center list-group-item" },
                state.area2
            ),
            React.createElement(
                "li",
                { id: "secThree", className: "text-center list-group-item" },
                state.area3
            )
        )
    );
    ReactDOM.render(templateNext, document.querySelector('#app'));
};

var render = function render() {
    var template = React.createElement(
        "form",
        { className: "bg-dark rounded shadow-sm p-5 mt-5", onSubmit: val },
        React.createElement(
            "h1",
            { className: "text-center text-white mt-4 mb-3" },
            "Explore Your Hobbies"
        ),
        React.createElement(
            "p",
            { className: "text-primary text-center" },
            "Please Provide The Following Information To Continue"
        ),
        React.createElement(
            "p",
            { className: "text-center mb-4 text-white" },
            "We will suggest activities for you to do based upon your hobby."
        ),
        React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { "for": "inputname", className: "text-white" },
                "Name"
            ),
            React.createElement("input", { type: "text", className: "form-control", id: "name", "aria-describedby": "emailHelp", placeholder: "Enter Full Name" })
        ),
        state.nameE && React.createElement(
            "p",
            { className: "text-danger" },
            "Please Enter Your Name To Continue!"
        ),
        React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { "for": "inputemail", className: "text-white" },
                "Email Address"
            ),
            React.createElement("input", { type: "email", className: "form-control", id: "email", "aria-describedby": "emailHelp", placeholder: "Enter Email" })
        ),
        state.emailE && React.createElement(
            "p",
            { className: "text-danger" },
            "Please Enter A Valid Email To Continue!"
        ),
        React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { "for": "inputage", className: "text-white" },
                "Age"
            ),
            React.createElement("input", { type: "number", className: "form-control", id: "age", placeholder: "Enter Age" })
        ),
        state.ageE && React.createElement(
            "p",
            { className: "text-danger" },
            "You Have To Be 18 Years Or Older To Continue!"
        ),
        React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { "for": "inputage", className: "text-white" },
                "Hobbies"
            ),
            React.createElement(
                "select",
                { className: "form-control", id: "hobby" },
                React.createElement(
                    "option",
                    null,
                    "N/A"
                ),
                React.createElement(
                    "option",
                    null,
                    "Basketball"
                ),
                React.createElement(
                    "option",
                    null,
                    "Coding"
                ),
                React.createElement(
                    "option",
                    null,
                    "Vacationing"
                )
            )
        ),
        React.createElement(
            "button",
            { type: "submit", className: "btn btn-primary d-block mx-auto" },
            "Submit"
        )
    );
    ReactDOM.render(template, document.querySelector('#app'));
};

render();
