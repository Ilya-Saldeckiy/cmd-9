document.querySelectorAll('.analiz-btn').forEach(function(cart){
    cart.addEventListener('click', function(event){
        document.querySelectorAll('.cart-number').forEach(function(tabContent) {
            tabContent.classList.add('open-cart')
        })
    })
})