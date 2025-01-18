const menuItems = document.querySelectorAll('.Header_row_Top-bottom-btn');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Hamma elementlardan "active" klassini olib tashlash
    menuItems.forEach(i => i.classList.remove('active'));

    // Bosilgan elementga "active" klassini qo'shish
    item.classList.add('active');
  });
});
