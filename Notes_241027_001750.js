function selectCaptcha(element) {
    const options = document.querySelectorAll('.captcha-option');
    options.forEach(option => option.classList.remove('active'));
    element.classList.add('active');
}