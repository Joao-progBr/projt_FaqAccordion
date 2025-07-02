const faqQuestion = document.querySelectorAll('.faq__question')
const faqAnswer = document.querySelectorAll('.faq__answer')

faqQuestion.forEach(function(btn){
    btn.addEventListener('click', function(){
        const faqAnswer = btn.nextElementSibling
        faqAnswer.classList.toggle('active')
    })
})