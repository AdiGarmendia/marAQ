/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialog.js'
import addMouseOverEventListeners from './highlight.js'
import addMouseOverEventListenersTips from './highTips.js'
import { useFish } from './fishDataProvider.js'


initializeDetailButtonEvents()
addMouseOverEventListeners()
addMouseOverEventListenersTips()

const allOfTheFish = useFish()

console.log("all of the fish:", allOfTheFish)

for (const fish of allOfTheFish) {
  console.log("individual fish object:", fish)
}