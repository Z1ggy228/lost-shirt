(function () {
  const openBtn = document.querySelector('.sidebar__hamburger');
  const closeBtn = document.querySelector('.sidebar__close');
  const sidebar = document.querySelector('.sidebar');

  function openSidebar() {
    sidebar.classList.add('sidebar--opened');
  }

  function closeSidebar() {
    sidebar.classList.remove('sidebar--opened');
  }

  openBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
})();
