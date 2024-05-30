document.addEventListener('DOMContentLoaded', function() {
  var mobileNav = document.querySelector('.mobile-navbar-container')
  var mNavBtn = document.querySelector('.mobile-nav-btn')
  var mNavBtnIcon = mNavBtn.querySelector('.mobile-nav-btn img')

  mNavBtn.addEventListener('click', function() {
    const visibility = mobileNav.getAttribute('data-visible')

    if (visibility == 'false') {
      mobileNav.setAttribute('data-visible', true)
      mNavBtn.setAttribute('aria-expanded', true)
      mNavBtnIcon.src = 'images/logo/Close.svg'
    } else {
      mobileNav.setAttribute('data-visible', false)
      mNavBtn.setAttribute('aria-expanded', false)
      mNavBtnIcon.src = 'images/logo/Menu.svg'
    }
  })

  var currImg = document.getElementById('currImg')
  var currSrc = document.getElementById('curr')
  var nextImg = document.getElementById('nextImg')
  var nextSrc = document.getElementById('next')
  var classImg = document.querySelector('.class-info-container img')
  var className = document.querySelector('.class-name')
  var classDesc = document.querySelector('.class-desc')

  var radios = document.querySelectorAll('input[type="radio"]')
  radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      changeClass(this)
    })
  })
  nextImg.style.opacity = 0

  function changeClass(radio) {
    classImg.classList.remove('fade-in', 'fade-out')
    className.classList.remove('fade-in', 'fade-out')
    classDesc.classList.remove('fade-in', 'fade-out')

    void classImg.offsetWidth;

    className.classList.add('fade-out')
    classDesc.classList.add('fade-out')
    classImg.classList.add('fade-out')

    setTimeout(() => {
      if (radio.id === 'class1') {
        nextSrc.src = 'images/lokasi/Fire-Habitat.jpg'
        classImg.src = 'images/logo/Fire.png'
        className.textContent = 'Fire Class'
        classDesc.textContent = 'The fire element of dragons trained at the Zen Dragon Academy embodies fierce power and mesmerizing beauty. Their flames burn with vibrant hues, ranging from blazing reds to captivating oranges, symbolizing the raw intensity of nature. One unique aspect of this element is their precise control over the temperature of their fire, allowing them to manipulate it with incredible accuracy.'
      } else if (radio.id === 'class2') {
        nextSrc.src = 'images/lokasi/Electric-Habitat.jpg'
        classImg.src = 'images/logo/Electric.png'
        className.textContent = 'Electric Class'
        classDesc.textContent = 'The electric element of dragons trained at the Zen Dragon Academy embodies dynamic power and swift agility. These dragons crackle with energy, their scales often shimmering with faint sparks, showcasing their affinity with the thunderous forces of nature. Unique to this element is their ability to harness and manipulate electricity, allowing them to unleash devastating bolts of lightning with precision.'
      } else if (radio.id === 'class3') {
        nextSrc.src = 'images/lokasi/Wind-Habitat.jpg'
        classImg.src = 'images/logo/Wind.png'
        className.textContent = 'Wind Class'
        classDesc.textContent = 'The wind element of dragons trained at the Zen Dragon Academy epitomizes agility and freedom. Their presence is marked by swirling gusts and whispers of unseen currents, embodying the ethereal essence of the skies. One notable trait of this element is their mastery over air currents, allowing them to move with unparalleled speed and grace both in flight and on land.'
      } else if (radio.id === 'class4') {
        nextSrc.src = 'images/lokasi/Water-Habitat.jpg'
        classImg.src = 'images/logo/Water.png'
        className.textContent = 'Water Class'
        classDesc.textContent = 'The water element of dragons trained at the Zen Dragon Academy embodies fluidity and grace. One unique aspect of this element is their ability to manipulate moisture in the air, creating dense fogs or freezing mist to disorient opponents.'
      }

      classImg.classList.remove('fade-out')
      className.classList.remove('fade-out')
      classDesc.classList.remove('fade-out')

      nextImg.style.opacity = 1
      currImg.classList.add('fade-out')
      setTimeout(() => {
        currSrc.src = nextSrc.src
      }, 200)
      setTimeout(() => {
        currImg.classList.remove('fade-out')
      }, 200)

      classImg.classList.add('fade-in')
      className.classList.add('fade-in')
      classDesc.classList.add('fade-in')
    }, 500)
  }
})