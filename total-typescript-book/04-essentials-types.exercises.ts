import type {Expect, Equal} from './helpers'

// Exercise 1
export const add = (a: number, b: number): number => {
    return a + b
}

// Exercise 2
export const concatTwoStrings = (a: string, b: string) => {
    return [a, b].join(' ')
}

// Exercise 4
export type Rectangle = {
    width: number;
    height: number;
}
export const getRectangleArea = (rectangle: Rectangle) => {
    return rectangle.width * rectangle.height;
};
export const getRectanglePerimeter = (rectangle: Rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};

type ShoppingCart = {
    userId: string;
    items: { itemName: string, quantity: number, price: number }[];
};
const processCart = (cart: ShoppingCart) => {
    let total = 0;
    for (const item of cart.items) {
        total += item.quantity * item.price;
        console.log(`${item.itemName} ${total}$`);
    }
    console.log(`Total: ${total}$`);
};
processCart({
    userId: "user123",
    items: [
        {itemName: "apples", quantity: 5, price: 3},
        {itemName: "bananas", quantity: 3, price: 5},
        {itemName: "milk", quantity: 1, price: 10},
        {itemName: "bread", quantity: 2, price: 1},
        {itemName: "eggs", quantity: 12, price: 2},
    ],
});

interface Ingredient {
    name: string;
    quantity: string;
}

type Recipe = {
    title: string;
    ingredients: Ingredient[];
    instructions: string;
};
const processRecipe = (recipe: Recipe) => {
    let total: string = "";
    for (let ingredient of recipe.ingredients) {
        total += ingredient.quantity + ingredient.quantity;
    }
};
processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
        {name: "Flour", quantity: "2 cups"},
        {name: "Sugar", quantity: "1 cup"},
        // other ingredients here. . .
    ],
    instructions: ". . .",
});

const setRange = (range: [x: number, y: number]) => {
    const x = range[0];
    const y = range[1];

    // Do something with x and y in here
    // x and y should both be numbers!

    type tests = [
        Expect<Equal<typeof x, number>>,
        Expect<Equal<typeof y, number>>,
    ];
};

const goToLocation = (coordinates: [latitude: number, longitude: number, elevation?: number]) => {
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const elevation = coordinates[2];

    // Do something with latitude, longitude, and elevation in here

    type tests = [
        Expect<Equal<typeof latitude, number>>, // red squiggly line under Equal<> statement
        Expect<Equal<typeof longitude, number>>, // red squiggly line under Equal<> statement
        Expect<Equal<typeof elevation, number | undefined>>,
    ];
};

type User = {
    name: string;
    age: number;
};
const userMap = new Map<number, User>();

function setSomeUserMaps() {
    userMap.set(1, {name: "Max", age: 30});
    userMap.set(2, {name: "Manuel", age: 31});
// @ts-expect-error // red squiggly line under @ts-expect-error
    userMap.set("3", {name: "Anna", age: 29});
// @ts-expect-error // red squiggly line under @ts-expect-error
    userMap.set(3, "123");
}

export const parsedData: {
    name: string;
    age: number;
} = JSON.parse('{"name": "Alice", "age": 30}');

type Album = {
    title: string;
    artist: string;
    year: number;
};

const getAlbumFormats = (album: Album, ...formats: string[]) => {
    return `${album.title} is available in the following formats: ${formats.join(
        ", ",
    )}`;
}
getAlbumFormats({
    title: "Inapoi in viitor",
    artist: "BUG Mafia",
    year: 2015
}, "CD", "LP", "Cassette");

// type Mapper = (item: string) => number;
const mapOverObjects = (items: string[], map: (item: string) => number) => {
    return items.map(map);
}
const arrayOfNumbers = mapOverObjects(['1', '2', '3'], (item) => {
    return parseInt(item) * 100;
});

type WithOptional = (index?: number) => number;
type WithRest = (...rest: string[]) => number;
type WithMultiple = (first: string, second: string) => number;

// Async
export const concatName = (first: string, last?: string) => {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
}
