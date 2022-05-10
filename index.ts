import { iAppState } from './src/interfaces/interfaces'; 
import { iAccessors } from './src/interfaces/accessors';


// init state
const appState: iAppState = {
    foo: 'foobar'
};

const accesors: iAccessors = {
    getFoo(state: iAppState) {
        return state.foo;
    }
}

// find all DOM elements with "ggdbind" attribute
// register appropriate event listeners accordingly
const bindingElements: Array<HTMLElement> = Array.from(document.querySelectorAll('.ggd-binding'));
bindingElements.forEach((el: HTMLElement) => {
    const att: Attr = el.attributes.getNamedItem("ggd-bind");
    if (att != null) console.log('found a bound input', att.name, att.value);    
});

const elementsBoundToSomeValue: Array<HTMLElement> = Array.from(document.querySelectorAll('.ggd-bind'));
elementsBoundToSomeValue.forEach((el: HTMLElement) => {
    const att: Attr = el.attributes.getNamedItem("ggd-bound");
    // create observable
    // register it to state
});

const elementBindingMap: { [key:string]: Array<HTMLElement> } = buildElementBindingMap(bindingElements, elementsBoundToSomeValue);

function buildElementBindingMap(bindingElements: Array<HTMLElement>, boundElements: Array<HTMLElement>): { [key:string]: Array<HTMLElement> } {
    const elementBindingMap: { [key:string]: Array<HTMLElement> } = { };
    bindingElements.forEach((el: HTMLElement) => {
        const att: Attr = el.attributes.getNamedItem("ggd-binding");
        if (att != undefined) throw Error('failed to bind value, there is no ggd-binding attribute on this element! ' + el);
        const bindedElements: Array<HTMLElement> = elementsBoundToSomeValue.filter((elt: HTMLElement) => el.attributes.getNamedItem("ggd-bind") != null);
        const bindingID: string = el.id;
        elementBindingMap[bindingID] = bindedElements;
        
    });
    return elementBindingMap;
}