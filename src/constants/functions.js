export const scrollToSmooth = (e, targetId) => {
  e.preventDefault();
  const target = document.getElementById(targetId);
  if (target) {
    const offset = window.innerHeight * 0.05;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }
};

export const handleMouseMove = (index, cardRefs) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //angle of the mouse to card center
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    //normalize angle to 0-360
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };