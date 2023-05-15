function toggleMenu() {
  if (document.querySelector(".header .responsive").style.display === "none") {
  document.querySelector(".header .responsive").style.cssText = "display: block";  
  } else {
    document.querySelector(".header .responsive").style.cssText = "display: none";  
  }
}






const img = document.getElementById("myImg");
const originalSrc = img.src;
const hoverSrc = "img/Vector22.png";

img.parentElement.addEventListener("mouseover", function() {
  img.src = hoverSrc;
});

img.parentElement.addEventListener("mouseout", function() {
  img.src = originalSrc;
});

const img2 = document.getElementById("myImg2");
const originalSrc2 = img.src;
const hoverSrc2 = "img/Vector22.png";

img2.parentElement.addEventListener("mouseover", function() {
  img2.src = hoverSrc2;
});

img2.parentElement.addEventListener("mouseout", function() {
  img2.src = originalSrc2;
});



$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      items: 2,
      itemsDesktop: [1000, 2],
      itemsDesktopSmall: [990, 2],
      itemsTablet: [768, 1],
      pagination: true,
      navigation: false,
      navigationText: ["", ""],
      slideSpeed: 3000,
      autoPlay: true
    });
  });





  /*Product */
  function Filtering() {
    let buttons = document.querySelectorAll('.btns button')
    let blocks  = document.querySelectorAll('.singlee')
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            blocks.forEach(block => {
                block.classList.remove('active')
                block.style.transform = `scale(0)`;
                block.style.opacity = `0`;
                block.style.visibility = `hidden`; 
                block.style.width = `0`;
                block.style.marginLeft = `0`;
                block.style.marginRight = `0`;
                block.style.height = `0`;
            })

            // blocks.forEach(blk => {
            //     if (e.target.dataset.menu == blk.dataset.menu) {
            //         blk.classList.add('active')
            //         blk.style.transform = `scale(1)`;
            //         blk.style.opacity = `1`;
            //         blk.style.visibility = `visible`; 
            //         blk.style.width = `190px`;
            //         blk.style.marginLeft = `5px`;
            //         blk.style.marginRight = `5px`;
            //         blk.style.height = `190px`;
            //     }
            // })

            blocks.forEach(blk => {
              if (e.target.dataset.menu == blk.dataset.menu) {
                  blk.classList.add('active')
                  blk.style.transform = `scale(1)`;
                  blk.style.opacity = `1`;
                  blk.style.visibility = `visible`; 
                  blk.style.width = `370px`;
                  blk.style.marginLeft = `5px`;
                  blk.style.marginRight = `5px`;
                  blk.style.height = `448px`;
              }
          })
        if (e.target.dataset.menu == 'all'){
            blocks.forEach(block => {
                block.classList.add('active')
                    block.style.transform = `scale(1)`;
                    block.style.opacity = `1`;
                    block.style.visibility = `visible`; 
                    // block.style.width = `190px`;
                    // block.style.marginLeft = `5px`;
                    // block.style.marginRight = `5px`;
                    // block.style.height = `190px`;

                    blk.style.width = `370px`;
                    blk.style.marginLeft = `5px`;
                    blk.style.marginRight = `5px`;
                    blk.style.height = `448px`;
            })
        }


        })
    })
}
Filtering()


