const scriptURL = 'https://script.google.com/macros/s/AKfycby1oqNARlkB40hTE3e_gIoPNUjAlueEFL2vgl7qQ-dp52lsbIXmFFIb0hM5IMZJQbUv/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg');
msg.style.fontSize = '24px';

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Thank you for subscribing'

            setTimeout(() => {
                msg.innerHTML = ''
            }, 4000)

        })

        .catch(error => console.error('Error!', error.message))
})