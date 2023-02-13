'use strict';

((d) => {

  const $header = d.querySelector('.header'),
  form = d.querySelector('form'),
  message = d.querySelector('.message'),
  asideMenu = d.querySelector('.aside-container'),
  menuIcon = d.querySelector('.menu-bars');

  menuIcon.addEventListener('click',(e) => {

    asideMenu.classList.toggle('active');

  })

  form.addEventListener('submit',async (e) => {

    e.preventDefault();

    const options = {

      method:'POST',
      body: new FormData(e.target)

    }

    try {

      const res = await fetch('https://formsubmit.co/jgdevelopers69@gmail.com',options);

      message.textContent = 'Gracias por tu mensaje, nos pondremos en contacto lo mas pronto posible';

    }

    catch (err) {

      console.log(err);

      message.textContent = 'Ocurrio un error D:, intenta de nuevo';

    }

    finally {

      message.classList.add('visible');

      setTimeout(() => {

        message.classList.remove('visible');

      },3000);

    }

  })

  window.addEventListener('scroll',() => {

    const {scrollTop,clientHeight} = d.documentElement;

    if(scrollTop > clientHeight && !$header.classList.contains('normal')) $header.classList.add('normal');

    else if (scrollTop < clientHeight && $header.classList.contains('normal')) $header.classList.remove('normal');

  });

})(document);