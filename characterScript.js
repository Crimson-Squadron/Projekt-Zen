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

    var charImg = document.querySelector('.char-container img')
    var charName = document.querySelector('.char-name h1')
    var charDesc = document.querySelector('.char-desc p')
    var flagImg = document.querySelector('.char-nation img')
    var flagName = document.querySelector('.char-nation h2')

    var radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            changeCharacter(this)
        })
    })

    function changeCharacter(radio) {
        if (radio.id === 'char1') {
            charImg.src = 'images/characters/Japan_Admiral.png'
            charName.textContent = 'Naomi'
            charDesc.textContent = 'quasong.'
            flagImg.src = 'images/Flags/Japan.png'
            flagName.textContent = 'Nipon Shogunate'
        } else if (radio.id === 'char2') {
            charImg.src = 'images/characters/King.png'
            charName.textContent = 'Friedrich'
            charDesc.textContent = ''
            flagImg.src = 'images/Flags/French.png'
            flagName.textContent = 'Republic of Scandanavia'
        } else if (radio.id === 'char3') {
            charImg.src = 'images/characters/German_Officer_1.png'
            charName.textContent = 'Elster'
            charDesc.textContent = 'Erika'
            flagImg.src = 'images/Flags/Germany.png'
            flagName.textContent = 'German Kaisereich'
        } else if (radio.id === 'char4') {
            charImg.src = 'images/characters/'
            charName.textContent = 'Ryan'
            charDesc.textContent = ''
            flagImg.src = 'images/Flags/USA.png'
            flagName.textContent = 'Commonwealth of America'
        } else if (radio.id === 'char5') {
            charImg.src = 'images/characters/'
            charName.textContent = 'Argo'
            charDesc.textContent = ''
            flagImg.src = 'images/Flags/UK.png'
            flagName.textContent = 'Kingdom of Britainy'
        }
    }
})