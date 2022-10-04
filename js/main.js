/*-------------------------HEADER-----------------------------*/
const btnNav = document.querySelector(".header__menu--btn");
const navContainer = document.querySelector(".nav__container");
const navLinks = document.querySelectorAll(".nav__link__main__content");
const navLinksContainer = document.querySelectorAll(".nav__link__content");
const subMenus = document.querySelectorAll(".nav__sub__menu");
const subMenuLink = document.querySelectorAll(".nav__sub--header");
btnNav.addEventListener("click",()=>{
    console.log(btnNav.childNodes[1]);
    let iconNav = btnNav.childNodes[1];
    if(iconNav.classList.contains("bi-list")){
        btnNav.childNodes[1].classList.remove("bi-list");
        btnNav.childNodes[1].classList.add("bi-x-lg");
        document.body.classList.add("nav__bar__active");
        navContainer.classList.remove("nav__disabled");
    }else{
        btnNav.childNodes[1].classList.remove("bi-x-lg");
        btnNav.childNodes[1].classList.add("bi-list");
        document.body.classList.remove("nav__bar__active"); 
        navContainer.classList.add("nav__disabled");
        subMenus.forEach(menu=>{
            menu.classList.add("nav__sub__menu__hidden");   
        })
    }
})

navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        let subMenu = link.nextElementSibling;
        if(subMenu.classList.contains("nav__sub__menu__hidden")){
            subMenus.forEach(sub=>{
                sub.classList.add("nav__sub__menu__hidden");
            })
            subMenu.classList.remove("nav__sub__menu__hidden");

        }else{
            subMenu.classList.add("nav__sub__menu__hidden");    
        } 
    });
})

subMenuLink.forEach(item=>{
    item.addEventListener("click",()=>{
        let container = item.parentElement;
        console.log(container);
        container.classList.add("nav__sub__menu__hidden"); 
    })
})

/*************************************************************/

let splide = new Splide( '#splide__banner', {
    destroy:false,
    arrows:false,
    autoplay:true,
    pagination:false,
    breakpoints:{
        768:{
            destroy:false,
            type: 'loop',
            padding:'8rem',
            focus:'center',
    }
  }
} );

splide.mount();

let products = new Splide( '#splide__products', {
    destroy:true,
    breakpoints:{
        768:{
            destroy:false,
            type: 'loop',
            focus:'center',
            pagination:false,
            arrows:false,
        }
    }
  } );
  
  products.mount();


let games = new Splide( '#games', {
    destroy:true,
    breakpoints:{
        768:{
            destroy:false,
            type   : 'loop',
            perPage: 1,
            arrows:false,
        }
    }
  } );
  
  games.mount();

let gamesComing = new Splide( '#games__coming', {
    destroy:true,
    breakpoints:{
        768:{
            destroy:false,
            type   : 'loop',
            perPage: 1,
            arrows:false,
        }
    }
  } );
  
gamesComing.mount();

let shopProducts = new Splide( '#shop__products', {
    destroy:true,
    breakpoints:{
        1200:{
            destroy:false,
            focus:'center',
            padding:'5rem',
            perPage:2,
        },
        768:{
            perPage:1.5,
        },
        590:{
            destroy:false,
            padding:'0rem',
            focus:'center',
            perPage:1,
            arrows:false,
        },
        
    }
} );
shopProducts.mount();

let newsContainer = new Splide( '#news__section', {
    perPage:3,
    perMove:1,
    breakpoints:{

        1024:{
            destroy:false,
            perPage:2,
            arrows:true,
            type:'loop',
            perMove:1,
        },
        768:{
            destroy:false,
            type   : 'loop',
            padding:'1rem',
            focus:'center',
            perPage: 1,
            arrows:false,
        }
    }
  } );
  
newsContainer.mount();


const buttonCards = document.querySelectorAll(".banner__card__control");
const bannerCards = document.querySelectorAll(".banner__card");
const animationItems = document.querySelectorAll(".animation");
function buttonHandler (){
    
    buttonCards.forEach(button=>{
        if(button.classList.contains("is-active")){
            const target = button.dataset.target;
            const bannerMain = document.getElementById(target);
            const animations = document.querySelectorAll(`.${target}__animation`);
            bannerCards.forEach(banner=>{
                banner.classList.remove("banner__active");
                banner.classList.add("banner__disabled");
            });
            bannerMain.classList.remove("banner__disabled");
            bannerMain.classList.add("banner__active");
            ScrollReveal().reveal(bannerMain,{
                cleanup:true,
            })  
            ScrollReveal().reveal(animations,{
                delay:200,
                duration:2000,
                distance:"100px",
                origin:"bottom",
                cleanup:true,
            })          
        }
    })
}

/*BANNER CONTROL PC*/
const buttonBanner = document.querySelectorAll(".banner__card__control");
buttonBanner.forEach(button=>{
    
    button.addEventListener("click",()=>{
            const target = button.dataset.target;
            const bannerMain = document.getElementById(target);
            const animations = document.querySelectorAll(`.${target}__animation`);

            buttonBanner.forEach(b=>{
                b.classList.remove("is-active");
            })
            

            bannerCards.forEach(banner=>{
                banner.removeAttribute("style");
            })
            animationItems.forEach(item=>{
                item.removeAttribute("style");
            })

            bannerCards.forEach(banner=>{
                banner.classList.remove("banner__active");
                banner.classList.add("banner__disabled");
            });
            bannerMain.classList.remove("banner__disabled");
            bannerMain.classList.add("banner__active");
            ScrollReveal().reveal(bannerMain,{
                cleanup:true,
            })  
            ScrollReveal().reveal(animations,{
                delay:200,
                duration:2000,
                distance:"100px",
                origin:"bottom",
                cleanup:true,
            })    
            button.classList.add("is-active");
    })
})


//Mutation observer reacciona a cambios en el DOM, recibe una funcion que se ejecuta luego de cada cambio
//Tiene un metodo observe que recibe el nodo que sera observado y una configuracion (objeto con los atributos a observar)
const observer = new MutationObserver(()=>{
    buttonHandler();
    bannerCards.forEach(banner=>{
        banner.removeAttribute("style");
    })
    animationItems.forEach(item=>{
        item.removeAttribute("style");
    })
     
    
})

let config = { attributes: true};
buttonCards.forEach(button=>{
    observer.observe(button,config);
})


/*Products cards*/
const productsControl = document.querySelectorAll(".products__control");
const productsCards = document.querySelectorAll(".product__card__container");
const productsImages = document.querySelectorAll(".animation__product");
function productCardHandler(){
    productsControl.forEach(card=>{
        if(card.classList.contains("is-active")){
            let target = card.dataset.target;
            let productCard = document.getElementById(target);
            let productImage = document.querySelector(`.animation__${target}`)
            productsCards.forEach(p=>{
                p.classList.add("product__card--disabled");
            })
            productCard.classList.remove("product__card--disabled");
            ScrollReveal().reveal(productImage,{
                duration:1500,
                cleanup:true,
            })
        }
    })
}

const observerProducts = new MutationObserver(()=>{
    productCardHandler();
    console.log("en mutation");
    productsImages.forEach(image=>{
        image.removeAttribute("style");
    })
});

productsControl.forEach(card=>{
    observerProducts.observe(card,config);
})


/*PRODUCTS SECTION*/
productsControl.forEach(card=>{
    card.addEventListener("click",()=>{
        let target = card.dataset.target;
        console.log(target);
        let productCard = document.getElementById(target);
        let imageAnimation = document.querySelector(`.animation__${target}`);
        console.log(imageAnimation);
        productsCards.forEach(product=>{
            product.classList.add("product__card--disabled");
        })
        productsControl.forEach(p=>{
            p.classList.remove("product__control__active");
        })
        ScrollReveal().reveal(imageAnimation,{
            duration:1000,
            cleanup:true,
        })
        productCard.classList.remove("product__card--disabled");
        card.classList.add("product__control__active");
    })
})

/*GAMES SECTION */
const gameControl = document.querySelectorAll(".game__control");
const gamesContainers = document.querySelectorAll(".section__new__games");
const containerActive = document.querySelector(".container__active");
gameControl.forEach(control =>{
    control.addEventListener("click",()=>{

        gamesContainers.forEach(container => container.classList.add("d-none"));


        let controlTarget = control.dataset.target;
        let gamesContainer = document.getElementById(controlTarget);
        console.log(gamesContainer);
        if(gamesContainer.classList.contains("d-none")){
            containerActive.classList.add("d-none");
            gamesContainer.classList.remove("d-none");
            gamesContainer.classList.add("container__active");
            
        }else{

        }
    })
})


/*FOOTER SECTION*/
const buttonsFooter = document.querySelectorAll(".active__link__footer");
const iconsFooter = document.querySelectorAll(".icon__footer");
const subItems = document.querySelectorAll(".footer__subitem");

buttonsFooter.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        buttonsFooter.forEach(b=>{
            b.classList.remove("is-clicked");
        })
            
        console.log(subItems[index].classList.contains("subitem__hidden"));
        console.log(subItems[index].classList)
            if(subItems[index].classList.contains("subitem__hidden")){
                btn.classList.add("is-clicked");
                subItems[index].classList.remove("subitem__hidden");
            }else{
                console.log("is no")
                btn.classList.remove("is-clicked");
                subItems[index].classList.add("subitem__hidden");    
            }
    })
})