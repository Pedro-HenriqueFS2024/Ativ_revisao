document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.querySelector('.faq-question').addEventListener('click', function () {
            var answer = item.querySelector('.faq-answer');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                // Close all other answers
                faqItems.forEach(function (i) {
                    i.querySelector('.faq-answer').style.display = 'none';
                });
                answer.style.display = 'block';
            }
        });
    });
});
