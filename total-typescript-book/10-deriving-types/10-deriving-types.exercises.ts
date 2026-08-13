// deriving types from other types, which lets you reduce repetition in your code and create a single source of truth for your types

// 1) use interface extends to make one interface inherit from another
interface Album {
  title: string
  releaseYear: number
  artist: {
    name: string
  }
}

interface AlbumDetails extends Album {
  genre: string
}

// 2) Union type
type Triangle = {
  type: 'triangle'
  sideLength: number
}

type Rectangle = {
  type: 'rectangle'
  width: number
  height: number
}

type Shape = Triangle | Rectangle

// 3) keyof operator: allows you to extract keys from an object type into a uninon type
type AlbumKeys = keyof Album // "title" | "artist" | "releaseYear"

// 4) typeof oeprator: allows you to extract a type from a value
const albumSales = {
  'Kind of Blue': 5000000,
  'A Love Supreme': 1000000,
  'Mingus Ah Um': 3000000,
}
type AlbumSalesType = typeof albumSales //  'Kind of Blue': number; 'A Love Supreme': number; 'Mingus Ah Um': number;
type AlbumTitles = keyof AlbumSalesType //  "Kind of Blue" | "A Love Supreme" | "Mingus Ah Um"

// A common pattern is to combine keyof and typeof to create a new type from an existing object type’s keys and values:
type AlbumNames = keyof typeof albumSales
function getSales(title: AlbumNames) {
  return albumSales[title]
}

// Runtime typeof
const albumSalesType = typeof albumSales // "object"

// Type typeof
type AlbumSalesType2 = typeof albumSales // {"Kind of Blue": number; "A Love Supreme": number; "Mingus Ah Um": number;}

// 5) Index access types
type AlbumTitle = Album['title'] // string
type AlbumTuple = [string, string, number]
type AlbumHeader = AlbumTuple[0]

// chaining them
type ArtistName = Album['artist']['name']

// union
type AlbumPropertyTypes = Album["title" | "artist" | "releaseYear"];

// getting object's values with keyof
type AlbumPropertyTypes2 = Album[keyof Album]; // string | number | {name: string}

// Using as const for JS style enums
const albumTypes = {
  CD: "cd",
  VINYL: "vinyl",
  DIGITAL: "digital",
} as const;

type UppercaseAlbumType = keyof typeof albumTypes; // "CD" | "VINYL" | "DIGITAL"

// POJO = plain old javascript object
type AlbumType = typeof albumTypes[keyof typeof albumTypes]; // "cd" | "vinyl" | "digital"