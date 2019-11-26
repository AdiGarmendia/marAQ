const initializeDetailButtonEventsLoc = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
    btn.addEventListener(
      "click",
      theEvent => {
        const dialogElement = theEvent.target.parentNode
        dialogElement.close()
      }
    )
  }

  
  // Get a reference to all buttons that start with "button--"
  const allDetailButtons = document.querySelectorAll("button[id^='button--']")
  
  // Add an event listener to each one
  for (const btn of allDetailButtons) {
    btn.addEventListener(
      "click",
      theEvent => {
        const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
        const theDialogs = document.querySelector(dialogSiblingSelector)
        theDialogs.showModal()
      }
      )
    }
  }  
    export default initializeDetailButtonEventsLoc






// const initializeDetailButtonEventsl = () => {
//   // CAN'T TOUCH THIS - START
//   const allCloseButtons = document.querySelectorAll(".button--close")

//   for (const btn of allCloseButtons) {
//     btn.addEventListener(
//       "click",
//       theEvent => {
//         const dialogElement = theEvent.target.parentNode
//         dialogElement.close()
//       }
//     )
//   }
//   // CAN'T TOUCH THIS - END
//    // Show Sam's details when the button is clicked
//    document.querySelector("#button--pulps").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--pulps")
//       theDialog.showModal()
//     }
//    )

//    document.querySelector("#button--pulps1").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--pulps1")
//       theDialog.showModal()
//     }
//    )

//    document.querySelector("#button--pulps2").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--pulps2")
//       theDialog.showModal()
//     }
//    )

//    document.querySelector("#button--pulps3").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--pulps3")
//       theDialog.showModal()
//     }
//    )

//    document.querySelector("#button--pulps4").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--pulps4")
//       theDialog.showModal()
//     }
//    )

//    document.querySelector("#button--pulps5").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--pulps5")
//       theDialog.showModal()
//     }
//    )
// }

// export default initializeDetailButtonEventsl