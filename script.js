
    gsap.registerPlugin(ScrollTrigger);
   
    
  
    const tl = gsap.timeline({
      scrollTrigger: {
       trigger: '.section_1_01',
       scrub: 3,
       start: "top 7%",
       
      pin:'.first-section',
       markers:true
    }
    });

    tl.from('.section_1_01',  {
        y: -100,
        x: -150,
        duration:4,
        ease: Power3.easeInOut
    })
    .from('.section_1_02',  {
        y: -150,
        x: -250,
        duration:4,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_03',  {
        duration:4,
        y: -80,
        x: -100,
        ease: Power3.easeInOut
    }, '-=4' )
    .from('.section_1_04', {
        duration:4,
        y: -100,
        x: -150,
        
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
        y: -80,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
        y: -100,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
        y: -50,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
        y: 50,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_09', 4, {
        y: 100,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')

    
    gsap.to('.top .image-container', {
        duration:6,
        height: 0, 
        scrollTrigger: {
           trigger: '.second-section .images-wrapper',
           
           scrub:1,
           
           pin:'.second-section',
           
           markers:true,
        }
    });

    const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: '.section_3_01',
        start:'top 35%',
        pin:'.third-section',
        scrub:1,
        markers:true,
        
    }
    })
    tl2.to('.section_3_01', 4, {
        y: -250,
        ease: Power3.easeInOut
    })
    .to('.section_3_02', 4, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_03', 4, {
        y: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_04', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_05', 4, {
        y: 150,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_06', 4, {
        y: 250,
        ease: Power3.easeInOut
    }, '-=4')

 
    const tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: '.forth-section',
            start: "top -30% ",
            pin:'.forth-section',
            scrub:1,
            markers:true,

        }
    })
    tl3.to('.section_4_01', 4, {
        autoAlpha: 0
    })
    .from('.section_4_02', 4, {
        autoAlpha: 0
    }, '-=4')
    .from('.section_4_03', 4, {
        autoAlpha: 0
    })
    .from('.section_4_04', 4, {
        autoAlpha: 0
    })

   