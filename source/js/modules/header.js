const headerNav = document.querySelector('.header__nav');
const burger = document.querySelector('.header__button');

const toggleBodyScroll = (lock) => {
    document.body.style.overflow = lock ? 'hidden' : '';
};

// Показываем меню на десктопе
const handleWideScreen = () => {
    if (!headerNav) return;

    if (window.matchMedia('(min-width: 1440px)').matches) {
        headerNav.classList.remove('header__nav--closed');
        headerNav.classList.add('header__nav--opened');
    } else {
        headerNav.classList.add('header__nav--closed');
        headerNav.classList.remove('header__nav--opened');
    }
};

// Закрытие меню и отмена блокировки скролла
const closeMenu = () => {
    burger.classList.remove('header__button--opened');
    burger.classList.add('header__button--closed');
    headerNav.classList.remove('header__nav--opened');
    headerNav.classList.add('header__nav--closed');
    toggleBodyScroll(false);
};

// Функция открытия меню
const openMenu = () => {
    headerNav.classList.remove('header__nav--opened');
    headerNav.classList.add('header__nav--closed');

    burger.addEventListener('click', () => {
        if (headerNav.classList.contains('header__nav--opened')) {
            closeMenu();
        } else {
            burger.classList.add('header__button--opened');
            burger.classList.remove('header__button--closed');
            headerNav.classList.add('header__nav--opened');
            headerNav.classList.remove('header__nav--closed');
            toggleBodyScroll(true);
        }
    });
    const menuItems = headerNav.querySelectorAll('.nav__link');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.matchMedia('(max-width: 1439px)').matches) {
                closeMenu();
            }
            window.scrollTo(0, 0);
        });
    });
};

const initialize = () => {
    window.addEventListener('load', handleWideScreen);
    window.addEventListener('resize', handleWideScreen);
    openMenu();
};

export { handleWideScreen, initialize };