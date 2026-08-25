function openMax() {
  window.open(config.maxProfileUrl, '_blank', 'noopener');
}

const config = {
  phoneWhatsApp: '79150165068',
  telegramUsername: 'manic_lab',
  maxProfileUrl: 'https://max.ru/u/https://max.ru/u/f9LHodD0cOJK3JB_rKJIhU1jXG90wtzyNEv8hahjJiuZBqgZ4Hu-EogRRnU'
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
