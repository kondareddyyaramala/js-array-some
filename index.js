// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let isItemPresent = false;
const findAnElementUsingNativeForLoop = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    console.log('Item ::', i);
    if (i === element) {
      isItemPresent = true;
      break;
    }
  }
}


const findAnElementUsingArraySomeMethod = (array, element) => {
  array.some(elm => {
    console.log('Item Array.Some :: ', elm);
    return elm === element;
  })
}

const findAnElementUsingArrayIncludesMethod =  (array, element) => {
    console.log(array.includes(element));
}


const array = new Array(1000).fill(1).map((v, i) => i);


findAnElementUsingNativeForLoop(array, 10);
findAnElementUsingArraySomeMethod(array, 10);

