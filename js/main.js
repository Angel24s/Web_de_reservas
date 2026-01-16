const phone = "18097090177";

document.querySelectorAll(".btn-whatsapp").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const plan = btn.dataset.plan;
    const text = `Hola, quiero cotizar una decoración de cumpleaños. Plan: ${plan}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  });
});
