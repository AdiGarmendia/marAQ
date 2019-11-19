const addMouseOverEventListenersTips = () => {
  const tipsCard = document.querySelectorAll(".tips")

  for (const card of tipsCard) {
      card.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              card.classList.add("highlightTips")
          }
      )


      card.addEventListener("mouseout", theMouseOutEvent => {
          card.classList.remove("highlightTips")
      })
  }
}

export default addMouseOverEventListenersTips