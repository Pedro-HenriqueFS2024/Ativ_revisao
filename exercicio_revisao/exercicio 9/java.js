document.getElementById('animacao').addEventListener('click', function() {
    var button = this;

    // R
    button.classList.remove('grow');

    // Trigger reflow to restart the animation
    void button.offsetWidth;

    // Add the animation class
    button.classList.add('grow');
});
