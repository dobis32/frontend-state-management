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
const elementsToBind: Array<HTMLElement> = Array.from(document.querySelectorAll('.ggd-bound'));
elementsToBind.forEach((el: HTMLElement) => {
    
});