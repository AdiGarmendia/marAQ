const tipComponent = (tip) => {
  return `
    <div class="tip">
     <div class="tip__name">${tip.name}</div>
     <div>Tip: ${tip.tip}</div>
    
      </div>
    `
}

export default tipComponent