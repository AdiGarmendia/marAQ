import { useLoc } from "./locDataProvider.js";
import locComponent from "./loc.js";


const contentElement = document.querySelector(".locList")

const locListComponent = () => {
  const locs = useLoc()
  
  contentElement.innerHTML += `
    <section class="locsList">
      ${
        locs.map(
          (currentLoc) => {
            return locComponent(currentLoc)
          }
          ).join("")
          }
        </section>
    `
}

export default locListComponent