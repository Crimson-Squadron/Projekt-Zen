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
        nextSrc.src = 'images/lokasi/A cinematic view of.jpg'
        classImg.src = 'images/logo/Academy-Emblem.png'
        className.textContent = 'Naomi'
        classDesc.textContent = 'A dedicated Japanese student at Zen Dragon Academy, Naomi is part of her nation\'s ground forces, driven by a desire to ensure peace and prevent the devastation caused by past dragon conflicts.'
      } else if (radio.id === 'class2') {
        nextSrc.src = 'images/lokasi/Aska Mountain.jpg'
        classImg.src = 'images/characters/Scandanavia.png'
        className.textContent = 'Björn'
        classDesc.textContent = 'The esteemed Norwegian principal of Zen Dragon Academy, Björn is a wise and experienced leader committed to fostering cooperation and understanding among students from diverse backgrounds.'
      } else if (radio.id === 'class3') {
        nextSrc.src = 'images/lokasi/A mighty mountain of.jpg'
        classImg.src = 'images/characters/German.png'
        className.textContent = 'Falke'
        classDesc.textContent = 'A skilled German lecturer and pilot, Falke shares his extensive knowledge of aerial dragon maneuvers with students, motivated by a deep-seated commitment to preventing future wars.'
      } else if (radio.id === 'class4') {
        nextSrc.src = 'images/lokasi/Svartkuk Kingdom-1.png'
        classImg.src = 'images/characters/USA.png'
        className.textContent = 'Maverick'
        classDesc.textContent = 'An adventurous American student and pilot at the academy, Maverick thrives on the thrill of dragon flight and seeks to master their use for innovative and peaceful applications.'
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