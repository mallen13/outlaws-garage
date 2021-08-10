//Mobile Menu
    const mobileMenu = document.querySelector('.mobileMenuBtn');
    const popupOverlay = document.querySelector('.popupOverlay');
    const popupBtn = document.querySelector('.popupBtn');

    //event listeners
    popupOverlay.addEventListener('click', popupToggle);
    popupBtn.addEventListener('click', popupToggle);
    mobileMenu.addEventListener('click', popupToggle);
    let isOpen = false;

    //toggle popup overlay
    function popupToggle(){
      const popupContainer = document.querySelector('.popupContainer');
      const popupMenu = document.querySelector('.popupMenu');

      //if mobile menu is closed
      if (isOpen === false){
        popupContainer.style.maxWidth = '100vw';
        popupMenu.style.maxWidth = '100%';
        popupMenu.style.padding = '10px';
        isOpen = true;
      //if mobile menu is open
      } else if (isOpen === true) {
        setTimeout( () => {
          popupContainer.style.maxWidth = null;
          popupMenu.style.padding = '0px';
        }, 0400)
        popupMenu.style.maxWidth = '0%';
        isOpen = false;
      }
    }
