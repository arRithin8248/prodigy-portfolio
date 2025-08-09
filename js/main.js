// main.js - simple helpers

// Smooth scroll for nav links (internal)
document.querySelectorAll('a.nav-link').forEach(a=>{
  a.addEventListener('click', function(e){
    // allow normal navigation for external pages
    const href = this.getAttribute('href');
    if(href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Contact form validation & fake send
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // simple validation
    if(!name.value.trim()){
      name.classList.add('is-invalid'); return;
    } else name.classList.remove('is-invalid');

    if(!email.value.includes('@')) {
      email.classList.add('is-invalid'); return;
    } else email.classList.remove('is-invalid');

    if(!message.value.trim()){
      message.classList.add('is-invalid'); return;
    } else message.classList.remove('is-invalid');

    // show success message (replace with server call as needed)
    const fm = document.getElementById('formMsg');
    fm.style.display = 'block';
    fm.className = 'alert alert-success';
    fm.innerText = 'Thanks — your message was sent (demo).';

    // reset
    form.reset();
    setTimeout(()=> fm.style.display='none', 4000);
  });
}
