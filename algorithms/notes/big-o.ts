const color = "blue";

function createFunc() {
    const color = "red";
    return function () {
        console.log(color);
    };
}

const myFunc = createFunc();

myFunc(); // ???
