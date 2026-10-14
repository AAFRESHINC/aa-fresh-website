'use strict';

(() => {
  const translations = {
    en: {
      title: 'AAFRESH | Your Neighborhood Asian Market',
      description: 'AAFRESH is your neighborhood Asian grocery in Yorba Linda. Shop Asian ingredients, familiar favorites and seasonal food finds. Visit 18226 Imperial Hwy or shop online.',
      skip: 'Skip to content', homeLabel: 'AAFRESH home', navLabel: 'Main navigation',
      navMarket: 'The Market', navPurpose: 'Our Purpose', navVisit: 'Visit Us',
      shop: 'Shop Online', languageLabel: 'Choose language', openMenu: 'Open menu', closeMenu: 'Close menu',
      heroDescription: 'Asian groceries for everyday cooking, familiar favorites and something new to try. Find your next good meal at AAFRESH.',
      visitStore: 'Visit the Store', storeAlt: 'AAFRESH storefront with the 天天买菜 sign and entrance in Yorba Linda',
      storeCaption: 'YOUR NEIGHBORHOOD ASIAN MARKET', shoppingOptions: 'Shopping options',
      factStore: 'In-store Shopping', factDelivery: 'Home Delivery', factEbt: 'EBT Accepted',
      marketLabel: 'The Market', marketHeading1: 'For everyday meals.', marketHeading2: 'And something delicious.',
      produceAlt: "Fresh green cucumbers from the store’s produce selection", produceTitle: 'Fresh Produce',
      produceDescription: 'Asian vegetables and seasonal fruit for the meals you make at home.',
      tofuAlt: 'Packaged tofu photographed in the store', tofuTitle: 'Tofu & Asian Essentials',
      tofuDescription: 'Tofu, frozen favorites and Chinese cooking essentials. The familiar ingredients your kitchen needs.',
      meatTitle: 'Meat & Seafood', meatDescription: 'Find ingredients for stir-fries, soups, hot pot and whatever is on tonight’s menu.',
      foodTitle: 'Prepared Food & Preorders', foodDescription: 'Add something delicious to dinner or pick out a weekend treat. Ask about current prepared dishes, restaurant preorders and seasonal specialties.',
      foodLink: 'Ask About Food Finds & Preorders',
      selectionNote: 'Selection changes with the season and current arrivals. Selections, order deadlines and pickup arrangements vary by offer. Please check with the store for availability.',
      purposeLabel: 'Our Purpose', purposeHeading: 'Good food. Closer to home.',
      value1Title: 'Make everyday shopping easier', value1Description: 'Shop in store, ask about delivery, or preorder for pickup.',
      value2Title: 'Keep familiar flavors close', value2Description: 'Asian vegetables, tofu and Chinese sauces for the food you love.',
      value3Title: 'Share something worth trying', value3Description: 'Explore specialty foods and seasonal preorders with us. Tell us what you would love to find here next.',
      waysLabel: 'Ways to Shop', waysHeading: 'Shop your way.',
      way1Title: 'Visit the Store', way1Description: 'Browse current arrivals and pick up what you need.', way1Link: 'Plan Your Visit',
      way2Title: 'Shop Online', way2Description: 'Browse the online store. Contact us to confirm your address, delivery fee and timing before ordering.', way2Link: 'Explore the Online Store',
      way3Title: 'Preorder & Pick Up', way3Description: 'Choose from current offers, then confirm quantities, prices and pickup details with the store.', way3Link: 'Ask About Preorders',
      visitLabel: 'Come On In', visitHeading: 'Find us in Yorba Linda.', phoneLabel: 'Call AAFRESH at (714) 983-7110',
      weekday: 'Monday–Saturday', weekdayHours: '10:00 AM–7:30 PM', sunday: 'Sunday', sundayHours: '10:00 AM–6:00 PM',
      callStore: 'Call the Store', directions: 'Get Directions', hoursNote: 'All hours are local California time. Please check store notices for holiday changes.',
      faqHeading: 'Quick Questions', ebtQuestion: 'Do you accept EBT?',
      ebtAnswer: 'Our store accepts EBT. Ask our staff about eligible items and checkout options. Please confirm payment options for online orders with the store.',
      deliveryQuestion: 'Can you deliver to my home?', deliveryAnswer: 'Contact the store with your address to confirm availability, fees and timing before ordering.',
      pickupQuestion: 'When can I collect a preorder?', pickupAnswer: 'Pickup arrangements vary by item and offer. Please follow the current offer and the store’s confirmation.',
      footer: 'AAFRESH · Asian groceries. Community first.'
    },
    zh: {
      title: 'AAFRESH 天天买菜 | 社区里的亚洲超市',
      description: 'AAFRESH 天天买菜是位于加州 Yorba Linda 的社区亚洲超市。新鲜蔬果、亚洲食材、熟悉口味与特色美食，欢迎到店选购或线上购物。地址：18226 Imperial Hwy。',
      skip: '跳转到正文', homeLabel: 'AAFRESH 天天买菜首页', navLabel: '主导航',
      navMarket: '店里有什么', navPurpose: '我们的用心', navVisit: '到店信息',
      shop: '线上购物', languageLabel: '选择语言', openMenu: '打开菜单', closeMenu: '关闭菜单',
      heroDescription: '家常菜需要的亚洲食材，想念的熟悉口味，还有值得尝试的特色美食。在 AAFRESH，日常买菜也能有新的发现。',
      visitStore: '来店里逛逛', storeAlt: '位于 Yorba Linda 的 AAFRESH 门面、天天买菜招牌和入口',
      storeCaption: '社区里的亚洲超市 · AAFRESH 天天买菜', shoppingOptions: '购物与服务',
      factStore: '到店购物', factDelivery: '送货上门', factEbt: '接受 EBT',
      marketLabel: '店里有什么', marketHeading1: '从一日三餐，', marketHeading2: '到想念的那一口。',
      produceAlt: '门店蔬果区实拍的青绿黄瓜', produceTitle: '新鲜蔬果',
      produceDescription: '亚洲常用蔬菜与时令水果，为日常家常菜添一点新鲜。',
      tofuAlt: '门店实拍的包装豆腐', tofuTitle: '豆制品与亚洲厨房常备',
      tofuDescription: '豆制品、冷冻食品与中式调味料，找到做家常菜需要的熟悉口味。',
      meatTitle: '肉类与海鲜', meatDescription: '炒菜、煲汤、涮火锅，按今天的菜单挑选合适的食材。',
      foodTitle: '熟食与特色预订', foodDescription: '给晚餐添道菜，给周末留点期待。除了日常食材，AAFRESH 也有当期熟食、餐厅菜品与季节特色预订，让你在社区里多发现几样喜欢的好味道。',
      foodLink: '咨询当期美食与预订', selectionNote: '品种随季节与到货情况调整，具体供应以门店为准。供应品项、预订截止时间和取货安排，以每次通知为准。',
      purposeLabel: '我们的服务宗旨', purposeHeading: '服务社区，把好味道带近一点。',
      value1Title: '日常买菜，更方便', value1Description: '到店购物、送货咨询和预订取货，让不同安排的家庭多一个选择。',
      value2Title: '家乡味道，更好找', value2Description: '亚洲蔬菜、豆制品与中式调味料，从真实的厨房需求出发。',
      value3Title: '好吃的东西，一起发现', value3Description: '用特色美食与季节预订，为邻居们带来新的选择。欢迎告诉我们，你还想在店里找到什么。',
      waysLabel: '怎么购买', waysHeading: '按你的日常安排来。',
      way1Title: '到店选购', way1Description: '来店里看看当期到货，选好今天需要的食材。', way1Link: '查看到店信息',
      way2Title: '线上购物与送货咨询', way2Description: '浏览线上商品，下单前与门店确认地址是否可送、费用和时间。', way2Link: '浏览线上商城',
      way3Title: '预订取货', way3Description: '选好当期品项，再确认数量、价格与取货安排。', way3Link: '咨询预订取货',
      visitLabel: '欢迎到店', visitHeading: '我们在 Yorba Linda。', phoneLabel: '致电 AAFRESH 门店：(714) 983-7110',
      weekday: '周一至周六', weekdayHours: '10:00–19:30', sunday: '周日', sundayHours: '10:00–18:00',
      callStore: '致电门店', directions: '查看路线', hoursNote: '均为加州当地时间。节假日调整以门店通知为准。',
      faqHeading: '常见问题', ebtQuestion: '接受 EBT 吗？',
      ebtAnswer: '本店接受 EBT，适用商品及结账方式请向店员咨询。线上订单的付款方式，请另向门店确认。',
      deliveryQuestion: '能送到我家吗？', deliveryAnswer: '下单前，请向门店提供地址，确认可送范围、费用和时间。',
      pickupQuestion: '预订什么时候能取？', pickupAnswer: '不同商品与当期活动的安排不同，请以当次通知及门店确认为准。',
      footer: 'AAFRESH 天天买菜 · 熟悉的亚洲味道，就在你的社区。'
    }
  };

  document.documentElement.classList.remove('no-js');
  const menu = document.querySelector('#primary-nav');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const storageKey = 'aafresh-language';
  let language = 'en';

  function closeMenu() {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', translations[language].openMenu);
  }

  function setLanguage(next, savePreference = false) {
    if (!Object.hasOwn(translations, next)) return;
    language = next;
    const text = translations[next];
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
    document.title = text.title;
    document.querySelector('meta[name="description"]').content = text.description;
    document.querySelector('meta[property="og:title"]').content = text.title;
    document.querySelector('meta[property="og:description"]').content = text.description;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = text[element.dataset.i18n];
      if (typeof value === 'string') element.textContent = value;
    });
    ['alt', 'aria-label'].forEach(attribute => {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
        const key = element.getAttribute(`data-i18n-${attribute}`);
        if (typeof text[key] === 'string') element.setAttribute(attribute, text[key]);
      });
    });
    document.querySelectorAll('[data-language-content]').forEach(element => {
      element.hidden = element.dataset.languageContent !== next;
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === next));
    });
    closeMenu();
    if (savePreference) {
      try { window.localStorage.setItem(storageKey, next); } catch { /* The site also works when storage is disabled. */ }
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', next);
        window.history.replaceState(null, '', url);
      } catch { /* Direct file previews may not allow history changes. */ }
    }
  }

  const urlLanguage = new URLSearchParams(window.location.search).get('lang');
  let rememberedLanguage = null;
  try { rememberedLanguage = window.localStorage.getItem(storageKey); } catch { /* No preference is required. */ }
  setLanguage(['en', 'zh'].includes(urlLanguage) ? urlLanguage : (['en', 'zh'].includes(rememberedLanguage) ? rememberedLanguage : 'en'));

  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language, true));
  });
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', translations[language][isOpen ? 'closeMenu' : 'openMenu']);
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header') && menu.classList.contains('is-open')) closeMenu();
  });
  const desktop = window.matchMedia('(min-width: 1001px)');
  desktop.addEventListener('change', closeMenu);

  function openLinkedAnswer() {
    if (window.location.hash === '#ebt') document.getElementById('ebt').open = true;
  }
  window.addEventListener('hashchange', openLinkedAnswer);
  openLinkedAnswer();
})();
