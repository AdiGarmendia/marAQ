import { useTips } from "./TipDataProvider.js";
import tipComponent from "./Tips.js";


const TipListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".tipList")
  const tipsPrime = useTips()

  let allTipsHTML = ""

  for (const tip of tipsPrime) {
   const TipsHTML = tipComponent(tip)
   allTipsHTML += TipsHTML
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="tipLists">
      ${allTipsHTML}
      </section>
  `
}

export default TipListComponent