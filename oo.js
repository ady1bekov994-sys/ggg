
const config = {
  phoneWhatsApp: '996220248706',  // номер для WhatsApp
  phoneTelegram: '79150165068',  // номер для Telegram
  phoneMax: '79150165068'        // номер для Max
};



// 1️⃣ WhatsApp
function openWhatsApp() {
    const url = 'https://wa.me/${config.phoneWhatsApp}?text=${message}';
    window.open(url, '_blank');
}

// 2️⃣ Telegram
function openTelegram() {
    const url = 'https://t.me/${config.phoneTelegram}?text=${message}';
    window.open(url, '_blank');
}

// 3️⃣ Max (пробуем разные варианты)
function openMax() {
    // Вариант 1: Если Max использует WhatsApp API
    const url1 = 'https://wa.me/${config.phoneMax}?text=${message}';
    
    // Вариант 2: Если Max использует свою схему (как Viber)
    const url2 = 'max://chat?phone=${config.phoneMax}&text=${message}';
    
    // Вариант 3: Если Max - это веб-версия
    const url3 = 'https://max.com/send?phone=${config.phoneMax}&text=${message}';
    
    // Пробуем открыть (сработает тот, который поддерживается)
    window.open(url2, '_blank');  // или url1, или url3
}

const message = encodeURIComponent("Записать тел хочу записать в браузер");

// WhatsApp
function openWhatsApp() {
  const url = 'https://wa.me/${config.phoneWhatsApp}?text=${message}';
  window.open(url, '_blank');
}

// Telegram
function openTelegram() {
  const url = 'tg://resolve?phone=${config.phoneTelegram}&text=${message}';
  window.open(url, '_blank');
}

// Max
function openMax() {
  const url = 'max://chat?phone=${config.phoneMax}&text=${message}';  //
  window.open(url, '_blank');
}
    // Дополнительно: плавная прокрутка и вывод в консоль
    console.log('💖 Маник Лаб — сайт готов! Настрой номера в объекте config.');
    console.log('WhatsApp:', config.phone, '| Telegram:', config.telegram, '| MAX:', config.MAX);
