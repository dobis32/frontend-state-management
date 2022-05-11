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
var elementBindingMap = {};
// find all DOM elements with "ggdbind" attribute
// register appropriate event listeners accordingly
var bindingElements = Array.from(document.querySelectorAll('.ggd-binding')).filter(function (el) { return el.attributes.getNamedItem("ggd-bind") != null; });
bindingElements.forEach(function (el) {
    var att = el.attributes.getNamedItem("ggd-bind");
    elementBindingMap[att.value] = [];
    console.log('found a bound input', att.name, att.value);
    el.addEventListener('change', function (event) {
        var inputElt = event.target;
        var updatedValue = inputElt.value;
        elementBindingMap[att.value].forEach(function (elementToUpdate) { return elementToUpdate.innerText = updatedValue; });
        console.log('updated value', updatedValue);
    });
});
var elementsToBind = Array.from(document.querySelectorAll('.ggd-bound'));
elementsToBind.forEach(function (el) {
    try {
        var boundTo = el.attributes.getNamedItem("ggd-bound");
        if (boundTo == null)
            throw new Error('[ BINDING PROCESSING ] failed to find a ggd-bound attribute on element ' + el);
        var boundElements = elementBindingMap[boundTo.value];
        if (boundElements == undefined)
            throw Error('[ BINDING PROCESSING ] failed to find a bind control (' + boundTo.value + ') for the following element:');
        boundElements.push(el);
    }
    catch (e) {
        console.log(e, el);
    }
});
console.log(elementBindingMap);
