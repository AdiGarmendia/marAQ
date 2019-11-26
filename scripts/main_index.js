/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import { useFish } from './fish/fishDataProvider.js'
import FishListComponent from './fish/FishList.js'
import addMouseOverEventListeners from './highlight.js'
// import addMouseOverEventListenersTips from './highTips.js'
import TipListComponent from './tips/TipList.js'
import initializeDetailButtonEvents from './dialog.js'


FishListComponent()
TipListComponent()
initializeDetailButtonEvents()
addMouseOverEventListeners()
// addMouseOverEventListenersTips


const allOfTheFish = useFish()

console.log("all of the fish:", allOfTheFish)

for (const fish of allOfTheFish) {
  console.log("individual fish object:", fish)
}
