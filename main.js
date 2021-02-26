const form = document.getElementById('contact');
const alert = document.getElementById('alert');

form.onsubmit = submit;

function submit(event) {
  alert.removeAttribute('hidden');
  event.preventDefault();
  setTimeout(function () {
    alert.remove();
  }, 10000);
}
