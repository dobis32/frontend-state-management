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

const elementBindingMap: { [key:string]: Array<HTMLElement> } = { };

// find all DOM elements with "ggdbind" attribute
// register appropriate event listeners accordingly
const bindingElements: Array<HTMLInputElement> = Array.from(document.querySelectorAll('.ggd-binding')).filter((el: HTMLInputElement) => el.attributes.getNamedItem("ggd-bind") != null) as Array<HTMLInputElement>;
bindingElements.forEach((el: HTMLInputElement) => {
    const att: Attr = el.attributes.getNamedItem("ggd-bind");
    elementBindingMap[att.value] = [];
    console.log('found a bound input', att.name, att.value);
    el.addEventListener('change', (event: Event) => {
        const inputElt: HTMLInputElement = event.target as HTMLInputElement;
        const updatedValue = inputElt.value;
        elementBindingMap[att.value].forEach((elementToUpdate: HTMLElement) => elementToUpdate.innerText = updatedValue);
        console.log('updated value', updatedValue);
    });
});

const elementsToBind: Array<HTMLElement> = Array.from(document.querySelectorAll('.ggd-bound'));
elementsToBind.forEach((el: HTMLElement) => {
    try {
        const boundTo: Attr = el.attributes.getNamedItem("ggd-bound");
        if (boundTo == null) throw new Error('[ BINDING PROCESSING ] failed to find a ggd-bound attribute on element ' + el);
        const boundElements = elementBindingMap[boundTo.value];
        if (boundElements == undefined) throw Error('[ BINDING PROCESSING ] failed to find a bind control (' + boundTo.value + ') for the following element:') 
        boundElements.push(el)
    } catch(e: any) {
        console.log(e, el);
    }
});

console.log(elementBindingMap);