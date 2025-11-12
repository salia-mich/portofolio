// Gestion simple du formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("statusMsg");

  if (!name || !email || !message) {
    status.textContent = "Veuillez remplir tous les champs.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Merci, " + name + " ! Votre message a été envoyé avec succès.";
  status.style.color = "green";

  // Réinitialiser le formulaire
  this.reset();
});
