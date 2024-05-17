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

    var radios = document.querySelectorAll('input[type="radio"]')
    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            changeCharacter(this)
        })
    })

    function changeCharacter(radio) {
        charImg.classList.remove('slide-in', 'slide-out')
        charName.classList.remove('fade-in', 'fade-out')
        charDesc.classList.remove('fade-in', 'fade-out')
        flagImg.classList.remove('fade-in', 'fade-out')
        flagName.classList.remove('fade-in', 'fade-out')
    
        void charImg.offsetWidth;
    
        charName.classList.add('fade-out')
        charDesc.classList.add('fade-out')
        flagImg.classList.add('fade-out')
        flagName.classList.add('fade-out')
        charImg.classList.add('slide-out')
    
        setTimeout(() => {
            if (radio.id === 'char1') {
                charImg.src = 'images/characters/Japan.png'
                charName.textContent = 'Naomi'
                charDesc.textContent = 'A dedicated Japanese student at Zen Dragon Academy, Naomi is part of her nation\'s ground forces, driven by a desire to ensure peace and prevent the devastation caused by past dragon conflicts.'
                flagImg.src = 'images/Flags/Japan.png'
                flagName.textContent = 'Arasaka Shogunate'
            } else if (radio.id === 'char2') {
                charImg.src = 'images/characters/Scandanavia.png'
                charName.textContent = 'Björn'
                charDesc.textContent = 'The esteemed Norwegian principal of Zen Dragon Academy, Björn is a wise and experienced leader committed to fostering cooperation and understanding among students from diverse backgrounds.'
                flagImg.src = 'images/Flags/Scandanavia.png'
                flagName.textContent = 'Republic of Scandanavia'
            } else if (radio.id === 'char3') {
                charImg.src = 'images/characters/German.png'
                charName.textContent = 'Falke'
                charDesc.textContent = 'A skilled German lecturer and pilot, Falke shares his extensive knowledge of aerial dragon maneuvers with students, motivated by a deep-seated commitment to preventing future wars.'
                flagImg.src = 'images/Flags/Germany.png'
                flagName.textContent = 'German Kaiserreich'
            } else if (radio.id === 'char4') {
                charImg.src = 'images/characters/USA.png'
                charName.textContent = 'Maverick'
                charDesc.textContent = 'An adventurous American student and pilot at the academy, Maverick thrives on the thrill of dragon flight and seeks to master their use for innovative and peaceful applications.'
                flagImg.src = 'images/Flags/USA.png'
                flagName.textContent = 'Commonwealth of America'
            } else if (radio.id === 'char5') {
                charImg.src = 'images/characters/British.png'
                charName.textContent = 'Argo'
                charDesc.textContent = 'A British lecturer and member of the ground forces, Argo teaches strategies for utilizing dragons in military and peacekeeping operations, driven by a personal mission to create a safer world.'
                flagImg.src = 'images/Flags/UK.png'
                flagName.textContent = 'Kingdom of Britainy'
            }
    
            charImg.classList.remove('slide-out')
            charName.classList.remove('fade-out')
            charDesc.classList.remove('fade-out')
            flagImg.classList.remove('fade-out')
            flagName.classList.remove('fade-out')
    
            charImg.classList.add('slide-in')
            charName.classList.add('fade-in')
            charDesc.classList.add('fade-in')
            flagImg.classList.add('fade-in')
            flagName.classList.add('fade-in')
        }, 500)
    }
})