document.addEventListener('DOMContentLoaded', function () {
  function updateClock() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockElement = document.getElementById('clock');
    const statusElement = document.getElementById('status');

    const isOpen = (
      (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 8 && (hours < 16 || (hours === 16 && minutes === 0))) ||
      (dayOfWeek === 6 && hours >= 8 && (hours < 12 || (hours === 12 && minutes <= 30)))
    );

    const textColor = isOpen ? 'var(--open-color)' : 'var(--closed-color)';
    clockElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} - ${getDayName(dayOfWeek)}`;
    clockElement.style.color = textColor;
    
    statusElement.textContent = isOpen ? '- Abierto' : '- Cerrado';
    statusElement.style.color = textColor;
  }

  function getDayName(dayOfWeek) {
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return days[dayOfWeek];
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  setInterval(updateClock, 1000);
  updateClock(); 
});
