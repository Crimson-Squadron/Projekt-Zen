document.addEventListener('DOMContentLoaded', function() {
  var bgVideo = document.querySelector('.bg-video')
  var banner = document.querySelector('.banner-container')
  
  var bgOptions = {};
  
  var bgObserver = new IntersectionObserver(function(entries, bgObserver) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        bgVideo.src = 'videos/ptcl.mp4'
        bgVideo.style.opacity = '0.8'
      } else {
        bgVideo.src = 'videos/The World of Tyrrell _ Low Fantasy Setting.mp4'
        bgVideo.style.opacity = '1'
      }
    })
  }, bgOptions)
  
  bgObserver.observe(banner)
})


document.addEventListener('DOMContentLoaded', function() {
  function startFadeOut() {
      var expl_btn_container = document.querySelector('.expl_btn_container')
      var video_title = document.querySelector('.video-title')
      expl_btn_container.classList.remove('animate-delay-slow')
      expl_btn_container.classList.add('fadeOutCenter')
      video_title.classList.remove('animate-slow')
      video_title.classList.add('fadeOutCenter')
      video_title.classList.add('animate-fast')
      setTimeout(function() {
          video_title.remove()
          expl_btn_container.remove()
      }, 1500);
  }
})

