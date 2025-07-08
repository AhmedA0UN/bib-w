document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('additional-info');
    const counter = document.getElementById('counter');
    const maxLength = 1000;

    textarea.addEventListener('input', function() {
        const remaining = maxLength - this.value.length;
        counter.textContent = remaining;
        
        if (remaining < 50) {
            counter.style.color = '#e74c3c';
        } else if (remaining < 100) {
            counter.style.color = '#f39c12';
        } else {
            counter.style.color = '#666';
        }
    });

    // Validation du formulaire
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        if (textarea.value.length > maxLength) {
            e.preventDefault();
            alert('Le message ne doit pas dépasser 1000 caractères');
        }
    });
});