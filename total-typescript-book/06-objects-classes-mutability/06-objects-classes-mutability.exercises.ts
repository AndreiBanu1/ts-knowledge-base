// Intersection types
export type Album = {
    title: string;
    artist: string;
    releaseYear: number;
    genre?: string;
};

export type SalesData = {
    unitsSold: number;
    revenue: number;
};

export type AlbumSales = Album & SalesData;

export const wishYouWereHereSales: AlbumSales = {
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    releaseYear: 1975,
    unitsSold: 13000000,
    revenue: 65000000,
};

// Combining incompatible types results in never
type User1 = {
    age: number;
};

type User2 = {
    age: string;
};

type User3 = User1 & User2; // never

// Interfaces have the ability to extend other types
export interface Albom {
    title: string;
    artist: string;
    releaseYear: number;
}

export interface StudioAlbum extends Albom {
    studio: string;
    producer: string;
}

export interface LiveAlbum extends Albom {
    concertVenue: string;
    concertDate: Date;
}

export const americanBeauty: StudioAlbum = {
    title: "American Beauty",
    artist: "Grateful Dead",
    releaseYear: 1970,
    studio: "Wally Heider Studios",
    producer: "Grateful Dead and Stephen Barncard",
};

export const oneFromTheVault: LiveAlbum = {
    title: "One from the Vault",
    artist: "Grateful Dead",
    releaseYear: 1991,
    concertVenue: "Great American Music Hall",
    concertDate: new Date("1975-08-13"),
};

export interface BonusConcertEdition extends StudioAlbum, LiveAlbum {
    numberOfDiscs: number;
}

/**
 * Intersections vs. interface extends -> choose interface
 * Better Errors When Merging Incompatible Types
 * Better TypeScript Performance
 * Interfaces are faster. TypeScript can cache the resultant type of an interface based on its name.
 * intersections are slow because they are recomputed everytime
 */

// Exercise 6-1: Creating an Intersection Type
export type User = {
    name: string;
    email: string;
} & BaseEntity;

export type Product = {
    name: string;
    price: number;
} & BaseEntity;

export type BaseEntity = {
    id: string;
    createdAt: Date;
}

export const product: Product = {
    id: "dasdsa",
    createdAt: new Date(8.64e15),
    name: "name",
    price: 2314,
}

// Exercise 6-2: Extending Interfaces
export interface IBaseEntity {
    id: string;
    createdAt: Date;
}

export interface IProduct extends IBaseEntity {
    name: string;
    price: number;
}

export interface IUser extends IBaseEntity {
    name: string;
    email: string;
}

// Object keys can not be added dynamically, if you don't declare index signature
const albumAwards: {
    [index: string]: boolean
} = {};

albumAwards.Grammy = true;
albumAwards.MercuryPrize = false;
albumAwards.Billboard = true;

interface AlbumAwards {
    [index: string]: boolean;
}

// Record type supports dynamic keys
const albumRewards: Record<string, boolean> = {};
albumRewards.Grammy = true;

const albumAwards2: Record<"Grammy" | "MercuryPrize" | "Billboard", boolean> = {
    Grammy: true,
    MercuryPrize: false,
    Billboard: true,
};

type BaseAwards = "Grammy" | "MercuryPrize" | "Billboard";

type ExtendedAlbumAwards = Record<BaseAwards, boolean> & {
    [award: string]: boolean;
};

const extendedNominations: ExtendedAlbumAwards = {
    Grammy: true,
    MercuryPrize: false,
    Billboard: true, // Additional awards can be dynamically added.
    "American Music Awards": true,
};

interface IBaseAwards {
    Grammy: boolean;
    MercuryPrize: boolean;
    Billboard: boolean;
}

interface IExtendedAlbumAwards extends IBaseAwards {
    [award: string]: boolean;
}

// The Property Key Type
type AlbumPK = {
    [key: PropertyKey]: string;
};

// Exercise 6-3: Using an Index Signature for Dynamic Keys

// method I:
// type Scores = {
//     [key: string]: number;
// };

// method II:
// interface Scores {
//     [key: string]: number;
// }

// method III:
// const scores: {
//     [key: string]: number;
// } = {};

// method IV:
const scores: Record<string, number> = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;


// Exercise 6-4: Default Properties with Dynamic Keys
interface Scores {
    [subject: string]: number;

    math: number;
    english: number;
    science: number;
}

const scores2: Scores = {
    math: 95,
    english: 90,
    science: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;

// Exercise 6-5: Restricting Object Keys with Records
export type Environment = "development" | "production" | "staging";

export type Configurations = Record<
    Environment,
    {
        apiBaseUrl: string;
        timeout: number;
    }
>;

export const configurations: Configurations = {
    development: {
        apiBaseUrl: "http://localhost:8080",
        timeout: 5000,
    },
    production: {
        apiBaseUrl: "https://api.example.com",
        timeout: 10000,
    },
    staging: {
        apiBaseUrl: "https://staging.example.com",
        timeout: 8000,
    },
    // @ts-expect-error // red squiggly line under @ts-expect-error
    notAllowed: {
        apiBaseUrl: "https://staging.example.com",
        timeout: 8000,
    },
};

// Exercise 6-6: Dynamic Key Support
export const hasKey = (obj: object, key: PropertyKey) => {
    return obj.hasOwnProperty(key);
};

// The Partial Type: create a new object type from an existing one, except all of its properties are optional.
type PartialAlbum = Partial<Album>;

const updateAlbum = (album: PartialAlbum) => {
    // . . .
};

updateAlbum({title: "Geogaddi", artist: "Boards of Canada"});

// The Required Type: ll the properties of a given object type are required.
type RequiredAlbum = Required<Album>;

const doubleCup: RequiredAlbum = {
    title: "Double Cup",
    artist: "DJ Rashad",
    releaseYear: 2013,
    genre: "Juke",
};

type AlbumData = Pick<Album, "title" | "artist">;

type AlbumDataWithOmit = Omit<Album, "id" | "releaseYear" | "genre">;;

// Exercise 6-7: Expecting Certain Properties
interface User67 {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const fetchUser = async (): Promise<Pick<User67, 'name' | 'email'>> => {
  const response = await fetch("/api/user");
  const user = await response.json();
  return user;
};