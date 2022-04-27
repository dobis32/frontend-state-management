"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// init state
var appState = {
    foo: 'foobar'
};
var accesors = {
    getFoo: function (state) {
        return state.foo;
    }
};
// find all DOM elements with "ggdbind" attribute
// register appropriate event listeners accordingly
var elementsToBind = Array.from(document.querySelectorAll('.ggd-bound'));
elementsToBind.forEach(function (el) {
    var att = el.attributes.getNamedItem("ggd-bind");
    console.log('found a bound input', att.name, att.value);
    // create observable
    // register it to state
});
