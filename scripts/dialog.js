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
  // CAN'T TOUCH THIS - END
  // Show Sam's details when the button is clicked
  document.querySelector("#button--sam").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--sam")
      theDialog.showModal()
    }
    
  )
  // Show Sam's details when the button is clicked
  document.querySelector("#button--glass").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--glass")
      theDialog.showModal()
    }
    
  )

  // Show Sam's details when the button is clicked
  document.querySelector("#button--laz").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--laz")
      theDialog.showModal()
    }
    
  )

  // Show Sam's details when the button is clicked
  document.querySelector("#button--maj").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--maj")
      theDialog.showModal()
    }
    
  )

  // Show Sam's details when the button is clicked
  document.querySelector("#button--shaft").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--shaft")
      theDialog.showModal()
    }
    
  )

  // Show Sam's details when the button is clicked
  document.querySelector("#button--fury").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--fury")
      theDialog.showModal()
    }

  )


}
export default initializeDetailButtonEvents