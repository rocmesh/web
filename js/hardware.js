// Click-to-enlarge viewer for photos on hardware detail pages
(() => {
  const photos = document.querySelectorAll('.hw-hero-img, .hw-photo img')
  if (!photos.length) return

  const box = document.createElement('div')
  box.className = 'hw-lightbox'
  box.setAttribute('role', 'dialog')
  box.setAttribute('aria-modal', 'true')
  box.setAttribute('aria-label', 'Photo viewer')
  box.hidden = true
  box.innerHTML = `
    <button type="button" class="hw-lightbox-close" aria-label="Close photo">&times;</button>
    <figure class="hw-lightbox-figure">
      <img alt="">
      <figcaption></figcaption>
    </figure>`
  document.body.appendChild(box)

  const img = box.querySelector('img')
  const caption = box.querySelector('figcaption')
  const closeBtn = box.querySelector('.hw-lightbox-close')
  let opener = null

  const open = (photo) => {
    opener = photo
    img.src = photo.currentSrc || photo.src
    img.alt = photo.alt
    const fig = photo.closest('figure')
    const text = fig && fig.querySelector('figcaption') ? fig.querySelector('figcaption').textContent : photo.alt
    caption.textContent = text
    caption.hidden = !text
    box.hidden = false
    document.body.style.overflow = 'hidden'
    closeBtn.focus()
  }

  const close = () => {
    box.hidden = true
    img.src = ''
    document.body.style.overflow = ''
    if (opener) opener.focus()
  }

  photos.forEach((photo) => {
    photo.classList.add('hw-zoomable')
    photo.tabIndex = 0
    photo.setAttribute('role', 'button')
    photo.setAttribute('aria-label', `View full size: ${photo.alt}`)
    photo.addEventListener('click', () => open(photo))
    photo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        open(photo)
      }
    })
  })

  box.addEventListener('click', (e) => {
    if (e.target !== img) close()
  })
  document.addEventListener('keydown', (e) => {
    if (!box.hidden && (e.key === 'Escape' || e.key === 'Tab')) {
      if (e.key === 'Escape') close()
      else { e.preventDefault(); closeBtn.focus() }
    }
  })
})()
