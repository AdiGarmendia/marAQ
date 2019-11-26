const locComponent = (loc) => {
  return `
    <div class="loc">
      <div>
          <img class="loc__image" src="${loc.image}" alt="">
      </div>
      <div class="loc__name">${loc.name}</div>
      <button id="button--${loc.name.replace(/\s/g, '') }">Details</button>

      <dialog class="dialog--loc" id="details--${loc.name}">
          <div>Location: ${loc.name}</div>
          <div>Movie: ${loc.movie}</div>

          <button class="button--close">Close Dialog</button>
      </dialog>
          </div>
    `
}

export default locComponent