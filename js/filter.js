(function () {
  const filterBtns = document.querySelectorAll('.filter__item');
  const products = document.querySelectorAll('.products__item');
  const productsList = document.querySelector('.products__list');
  const activeClass = 'filter__item--active';
  const hiddenClass = 'hidden';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      // Убираем активный класс со всех кнопок
      filterBtns.forEach(btn => btn.classList.remove(activeClass));

      // Добавляем активный класс текущей кнопке
      btn.classList.add(activeClass);

      // Получаем фильтр
      const filterLink = e.target.closest('.filter__link');
      let filter = filterLink.getAttribute('data-filter');

      // Применяем фильтрацию
      if (filter === 'all') {
        products.forEach(product => {
          product.classList.remove(hiddenClass);
          // Для плавного появления
          setTimeout(() => {
            product.style.opacity = '1';
            product.style.transform = 'scale(1)';
          }, 50);
        });
      } else {
        products.forEach(product => {
          if (product.classList.contains(filter)) {
            product.classList.remove(hiddenClass);
            setTimeout(() => {
              product.style.opacity = '1';
              product.style.transform = 'scale(1)';
            }, 50);
          } else {
            product.classList.add(hiddenClass);
            product.style.opacity = '0';
            product.style.transform = 'scale(0.95)';
          }
        });
      }

      setTimeout(() => {
        productsList.style.display = 'none';
        productsList.offsetHeight;
        productsList.style.display = 'grid';
      }, 300);
    });
  });
})();
