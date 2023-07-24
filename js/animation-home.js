function animate() {
  // --- HOME WORK SECTION ---
  const homeWorkText = new SplitType('#home-work-text')
  console.log(homeWorkText)

  const homeWorkTextTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.work',
      // markers: true,
      start: 'top bottom-=10%',
    },
  })

  homeWorkTextTl
    .from(homeWorkText.lines, {
      y: 300,
      stagger: 0.1,
      duration: 1,
    })
    .from('.work__right img', {
      opacity: 0,
      x: 100,
    })

  // --- HOME WORK SECTION END ---

  // --- SECTION HERO CARDS ---
  gsap.from('#h-cards-line', {
    height: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '#h-cards',
      start: 'center bottom-=20%',
      end: 'center top+=20%',
      // markers: true,
      scrub: true,
    },
  })

  gsap.from(['.h-cards .card__title', '.h-cards .card__text'], {
    opacity: 0,
    y: 30,
    duration: 1.5,
    scrollTrigger: {
      trigger: '#h-cards',
      start: 'bottom bottom',
      markers: true,
    },
  })

  // SECTION BANNER
  const sectionBanner = new SplitType('.banner__heading', {
    types: 'words, lines',
  })
  const homeBannerTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#banner',
      start: 'top center',
    },
  })

  homeBannerTl.from(sectionBanner.words, {
    y: 200,
    stagger: 0.2,
  })

  // SECTION ABOUT HEADER
  const aboutHeader1 = new SplitType('#about-header-1', {
    types: 'words, lines',
  })
  console.log(aboutHeader1, "Hello")
}

// --- DOCUMENT LOAD EVENT ---
document.addEventListener('DOMContentLoaded', () => {
  animate()
})
