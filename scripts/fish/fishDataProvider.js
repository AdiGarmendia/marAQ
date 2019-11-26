/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
  {
    name: "Sam",
    food: ["Royals With Cheese", "Gourmet Coffee"],
    species: "Not a Sea McNugget",
    location: "USA",
    length: "6'2",
    image: "sam.jpg"
  },
  {
    name: "Glass",
    food: ["Smoothies", "Gourmet Coffee"],
    species: "Not a Sea McNugget",
    location: "USA",
    length: "6'2",
    image: "glass.jpg"
  },
  {
    name: "Laz",
    food: ["Metamucil", "Gourmet Coffee"],
    species: "Not a Sea McNugget",
    location: "USA",
    length: "6'2",
    image: "laz.jpg"

},
  {
    name: "Major",
    food: ["Bounties", "Gourmet Coffee"],
    species: "Not a Sea McNugget",
    location: "USA",
    length: "6'2",
    image: "major.jpg"

},
  {
    name: "Shaft",
    food: ["Suckas", "Gourmet Coffee"],
    species: "Not a Sea McNugget",
    location: "USA",
    length: "6'2",
    image: "shaft.jpg"


},
  {
    name: "Fury",
    food: ["Hydra", "Gourmet Coffee"],
    species: "Not a Sea McNugget",
    location: "USA",
    length: "6'2",
    image: "fury.jpg"

}
]

// This is new code. Add this.
export const useFish = () => {
  return fishCollection
}