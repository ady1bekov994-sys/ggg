function openMax() {
  window.open(config.maxProfileUrl, '_blank', 'noopener');
}

const config = {
  phoneWhatsApp: '79150165068',
  telegramUsername: 'manic_lab',
  maxProfileUrl: 'https://max.ru/u/79150165068'
};

const message = encodeURIComponent('Здравствуйте! Хочу записаться.');

function openWhatsApp() {
  window.open(
    `https://wa.me/${config.phoneWhatsApp}?text=${message}`,
    '_blank',
    'noopener'
  );
}

function openTelegram() {
  window.open(
    `https://t.me/${config.telegramUsername}`,
    '_blank',
    'noopener'
  );
}

function openMax() {
  window.open(
    config.maxProfileUrl,
    '_blank',
    'noopener'
  );
}
