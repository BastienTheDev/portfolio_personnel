document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la soumission du formulaire de contact
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupération des valeurs des champs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validation simple des champs (non exhaustive)
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Simulation d'un envoi de formulaire (à remplacer par une vraie action)
        alert('Message envoyé avec succès:\n\nNom: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
        contactForm.reset(); // Réinitialisation du formulaire
    });
});
