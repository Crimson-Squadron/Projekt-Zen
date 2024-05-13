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
})