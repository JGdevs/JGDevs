'use strict';

((d) => {

  const $header = d.querySelector('.header'),
  form = d.querySelector('form'),
  btnSubmit = d.querySelector('button[type="submit"]'),
  message = d.querySelector('.message'),
  asideMenu = d.querySelector('.aside-container'),
  menuIcon = d.querySelector('.menu-bars');

  menuIcon.addEventListener('click',(e) => {

    asideMenu.classList.toggle('active');

  })

  form.addEventListener('submit',async (e) => {

    e.preventDefault();

    btnSubmit.setAttribute('disabled',true);

    const options = {

      method:'POST',
      body: new FormData(e.target)

    }

    try {

      const res = await fetch('https://formsubmit.io/send/jgdevelopers69@gmail.com',options);
      message.textContent = 'Gracias por tu mensaje, nos pondremos en contacto lo mas pronto posible';

    }

    catch (err) {

      message.textContent = 'Ocurrio un error D:, intenta de nuevo';
      console.log(err);

    }

    finally {

      message.classList.add('visible');

      setTimeout(() => {

        message.classList.remove('visible');
        btnSubmit.removeAttribute('disabled');

      },5000);

    }

  })

  window.addEventListener('scroll',() => {

    const {scrollTop,clientHeight} = d.documentElement;

    if(scrollTop > clientHeight && !$header.classList.contains('normal')) $header.classList.add('normal');

    else if (scrollTop < clientHeight && $header.classList.contains('normal')) $header.classList.remove('normal');

  });

})(document);