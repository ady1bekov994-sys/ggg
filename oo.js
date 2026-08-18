const config = {
  phoneWhatsApp: '996220248706',
  phoneTelegram: '79150165068',
  phoneMax: '79150165068'
};

const message = encodeURIComponent("Записаться хочу, запишите в браузер");

// 📂  WhatsApp - работает везде
function openWhatsApp() {
  const phone = config.phoneWhatsApp.replace('+', '');
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, '_blank');
}

// 📂  Telegram - универсальный
function openTelegram() {
  const phone = config.phoneTelegram.replace('+', '');
  
  // Проверяем, мобильное устройство или нет
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  
  if (isMobile) {
    // 📱  Телефон - сначала пытаемся открыть приложение
    window.location.href = `tg://resolve?domain=${phone}`;
    
    // Через 1.5 секунды, если не открылось, открываем веб-версию
    setTimeout(() => {
      window.open(`https://t.me/+${phone}`, '_blank');
    }, 1500);
  } else {
    // 💻 Компьютер - открываем веб-версию Telegram
    window.open(`https://t.me/+${phone}`, '_blank');
  }
}

// 📂  MAX - универсальный
function openMax() {
  const phone = config.phoneMax.replace('+', '');
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  
  if (isMobile) {
    // 📱  Телефон - пытаемся открыть Viber
    window.location.href = `viber://chat?number=${phone}`;
    
    // Если Viber не открылся, через 2 секунды предлагаем звонок
    setTimeout(() => {
      window.location.href = `tel:${phone}`;
    }, 2000);
  } else {
    // 💻 Компьютер - открываем WhatsApp (как запасной вариант)
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
}
