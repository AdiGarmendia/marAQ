const initializeDetailButtonEvents = () => {
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
        const theDialog = document.querySelector(dialogSiblingSelector)
        theDialog.showModal()
      }
      )
    }
  }  
    export default initializeDetailButtonEvents

// const initializeDetailButtonEvents = () => {
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
//   // Show Sam's details when the button is clicked
//   document.querySelector("#button--Sam").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--Sam")
//       theDialog.showModal()
//     }
    
//   )
//   // Show Sam's details when the button is clicked
//   document.querySelector("#button--Glass").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--Glass")
//       theDialog.showModal()
//     }
    
//   )

//   // Show Sam's details when the button is clicked
//   document.querySelector("#button--Laz").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--Laz")
//       theDialog.showModal()
//     }
    
//   )

//   // Show Sam's details when the button is clicked
//   document.querySelector("#button--Major").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--Major")
//       theDialog.showModal()
//     }
    
//   )

//   // Show Sam's details when the button is clicked
//   document.querySelector("#button--Shaft").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--Shaft")
//       theDialog.showModal()
//     }
    
//   )

//   // Show Sam's details when the button is clicked
//   document.querySelector("#button--Fury").addEventListener(
//     "click",
//     theClickEvent => {
//       const theDialog = document.querySelector("#details--Fury")
//       theDialog.showModal()
//     }

//   )


// }
// export default initializeDetailButtonEvents