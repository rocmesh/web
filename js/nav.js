// Site-wide navbar
(() => {
  const s = document.currentScript
  const root = new URL('..', s.src).href

  s.insertAdjacentHTML('beforebegin', `
  <nav id="navScroll" class="navbar navbar-expand-lg navbar-light fixed-top" tabindex="0">
    <div class="container">
      <a class="navbar-brand pe-4 fs-4" href="${root}index.html">
        <svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          class="bi bi-layers-half">
          <image href="${root}img/ROCMesh_SMALL_Transparant.png" width="16" height="16" />
        </svg>
        <span class="ms-1 fw-bolder">ROCMesh</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="${root}index.html">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">MeshCore</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="${root}meshcore/channels.html">Channels</a></li>
              <li><a class="dropdown-item" href="${root}meshcore/companion-settings.html">Companion Settings</a></li>
              <li><a class="dropdown-item" href="${root}meshcore/repeater-settings.html">Repeater Settings</a></li>
            </ul>
          </li>
        </ul>
        <a href="https://discord.gg/aBsNaKy2u5" data-splitbee-event="Join Discord" aria-label="Join our discord"
          class="link-dark pb-1 link-fancy me-2">
          Join Our Discord!
          <svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            class="bi bi-layers-half">
            <image href="${root}img/discord.svg" width="16" height="16" />
          </svg>
        </a>
      </div>
    </div>
  </nav>`)

  const header = document.getElementById('navScroll')
  const header_height = header.offsetHeight
  window.addEventListener('scroll', () => {
    const y = window.scrollY >= header_height
    header.classList.toggle('scrolled', y)
    header.classList.toggle('shadow-sm', y)
  })
})()
