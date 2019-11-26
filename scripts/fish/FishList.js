
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useFish } from "./fishDataProvider.js"
import FishComponent from "./Fish.js"

useFish()
const contentElement = document.querySelector(".fishList")

// const FishListComponent = () => {

//   // Get a reference to the `<article class="content">` element
//   const fishes = useFish()

//   let allFishHTML = ""

//   for (const fish of fishes) {
//    const fishHTML = FishComponent(fish)
//    allFishHTML += fishHTML
//   }

//   // Add to the existing HTML in the content element
//   contentElement.innerHTML += `
//       <section class="fishList">
//       ${allFishHTML}

//       </section>
//   `
// }

const FishListComponent = () => {
    const fishes = useFish()

    contentElement.innerHTML += `
      <section class="fishList">
        ${
          fishes.map(
            (currentFish) => {
              return FishComponent(currentFish)
            }
          ).join("")
        }
      </section>
      `
}


export default FishListComponent