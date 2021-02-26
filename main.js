function showAlert() {
    let thankAlert = document.getElementById('alert');
    if (thankAlert.style.display === 'none') {
        thankAlert.style.display = 'block';
        setTimeout(function() {
            thankAlert.style.display = 'none';
        }, 10000);
    }
}