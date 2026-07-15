import type {Expect, Equal} from '../helpers'

// Union type
const message: string | null = Date.now() % 2 === 0 ? 'Even timestamp' : null

type Id = number | string
const logId = (id: Id) => {
    console.log(id)
}

// Literal type
type yesOrNo = 'YES' | 'NO'
type StatusCode = 200 | 401 | 500
// Combine literal types
type DigitalFormat = 'MP3' | 'FLAC'
type PhysicalFormat = 'LP' | 'CD' | 'Cassette'
type AlbumFormat = DigitalFormat | PhysicalFormat

// Exercise 5-1
export function getUsername(username: string | null) {
    if (username !== null) {
        return `User: ${username}`
    } else {
        return 'Guest'
    }
}

// Exercise 5-2
export type Direction = 'up' | 'down' | 'left' | 'right'
export type Position = { x: number; y: number }

// Returns the displacement vector for moving `distance` units in `direction`.
// Cartesian convention: up = +y, down = -y, right = +x, left = -x.
export function move(direction: Direction, distance: number): Position {
    switch (direction) {
        case 'up':
            return {x: 0, y: distance}
        case 'down':
            return {x: 0, y: -distance}
        case 'left':
            return {x: -distance, y: 0}
        case 'right':
            return {x: distance, y: 0}
    }
}

// Process of narrowing
// "small" is narrower than string, while number is wider than 22 for example.
// Unions Are Wider Than Their Members (e.g string | number is wider than string or number on its own)
// To narrow, you use: typeof + if else

export const getAlbumYear = (year: string | number): string => {
    if (typeof year === 'string') {
        return `The album was released in ${year.toUpperCase()}.`
    }
    return `The album was released in ${year.toFixed(0)}.`
}

// Exercise 5-3
export function validateUsername(username: string | null): boolean {
    if (typeof username === 'string') {
        return username.length > 5 // red squiggly line under username
    } else {
        return false
    }
}

// Exercise 5-4
export const appElement = document.getElementById('app')
if (!appElement && !document) {
    throw new Error('Could not find app element')
}

// Exercise 5-5
type APIResponse =
    | {
    data: {
        id: string
    }
}
    | {
    error: string
}

export const handleResponse = (response: APIResponse) => {
    if ('data' in response) {
        return response.data.id
    } else {
        throw new Error(response.error)
    }
}

// The Widest Type: unknown
// The Narrowest Type: never
// Disable type safety: any

// Exercise 5-6
const somethingDangerous = () => {
    if (Math.random() > 0.5) {
        throw new Error('Something went wrong.')
    }

    return 'all good.'
}

try {
    somethingDangerous()
} catch (error) {
    if (error instanceof Error) {
        const error = new Error('Some error message')
        console.error(error.message)
    } else {
        throw error
    }
}

// Exercise 5-7
export const parseValue = (value: unknown): string => {
    if (
        typeof value === 'object' &&
        value !== null &&
        'data' in value &&
        typeof value.data === 'object' &&
        value.data !== null &&
        'id' in value.data &&
        typeof value.data.id === 'string'
    ) {
        return value.data.id
    }

    throw new Error('Parsing error!')
}

// Discriminated unions
type LoadingState = {
    status: "loading";
};

type ErrorState = {
    status: "error";
    error: string;
};

type SuccessState = {
    status: "success";
    data: string;
};

type State = LoadingState | ErrorState | SuccessState;

const renderUI = (state: State) => {
    switch (state.status) {
        case 'loading':
            return "Loading. . .";
        case 'error':
            return `Error: ${state.error?.toUpperCase()}`;
        case 'success':
            return `Success: ${state.data}`
    }
}

// Exercise 5-8: Destructuring a Discriminated Union
type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    sideLength: number;
};

type Shape = Circle | Square;

export function calculateArea(shape: Shape) {
    if (shape.kind === "circle") {
        const {radius} = shape;
        return Math.PI * radius * radius;
    } else {
        const {sideLength} = shape;
        return sideLength * sideLength;
    }
}

// Exercise 5-9: Narrowing a Discriminated Union with a switch Statement
function calculateArea2(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.sideLength * shape.sideLength;
    }
}

// Exercise 5-10: Discriminated Tuples
type User = {
    id: string,
    username: string,
}

type UserAPIResponse = ["error", string] | ["success", User[]];

export async function fetchUser(): Promise<UserAPIResponse> {
    try {
        const response = await fetch("https://api.example.com/data");

        if (!response.ok) {
            return ["error", "An error has occurred"];
        }

        const data = await response.json();

        return ["success", data];
    } catch (e) {
        return ["error", "An error occurred"];
    }
}

type Shape3 = Circle | Square;

// Exercise 5-11: Handling Defaults with a Discriminated Union
export function calculateArea3(shape: Shape3) {
    if (shape.kind === "square") {
        return shape.sideLength * shape.sideLength;
    } else {
        return Math.PI * shape.radius * shape.radius;
    }
}
