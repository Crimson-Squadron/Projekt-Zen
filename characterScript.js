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

    const checkboxes = document.querySelectorAll('input')
    const cardContainers = document.querySelectorAll('.char-card-container')

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            cardContainers.forEach((container, i) => {
                if (!checkboxes[i].checked) {
                    // container.style.transform = 'translateY(1000px)'
                    // setTimeout(function() {container.style.display = 'none'}, '1000')
                } else {
                    // container.style.transform = 'translateY(0px)'
                    // setTimeout(function() {container.style.display = 'flex'}, '1000')
                }
            })
        })
    })
})