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
var bindingElements = Array.from(document.querySelectorAll('.ggd-binding'));
bindingElements.forEach(function (el) {
    var att = el.attributes.getNamedItem("ggd-bind");
    if (att != null)
        console.log('found a bound input', att.name, att.value);
});
var elementsBoundToSomeValue = Array.from(document.querySelectorAll('.ggd-bind'));
elementsBoundToSomeValue.forEach(function (el) {
    var att = el.attributes.getNamedItem("ggd-bound");
    // create observable
    // register it to state
});
var elementBindingMap = buildElementBindingMap(bindingElements, elementsBoundToSomeValue);
function buildElementBindingMap(bindingElements, boundElements) {
    var elementBindingMap = {};
    bindingElements.forEach(function (el) {
        var att = el.attributes.getNamedItem("ggd-binding");
        if (att != undefined)
            throw Error('failed to bind value, there is no ggd-binding attribute on this element! ' + el);
        var bindedElements = elementsBoundToSomeValue.filter(function (elt) { return el.attributes.getNamedItem("ggd-bind") != null; });
        var bindingID = el.id;
        elementBindingMap[bindingID] = bindedElements;
    });
    return elementBindingMap;
}
