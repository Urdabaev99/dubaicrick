import Swiper, { Navigation } from "swiper";

const cardSwiper = new Swiper(".card-swiper", {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,

  init: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    // when window width is >= 320px
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  on: {
    init: (swiper) => {
      document.querySelector(".swiper-all").innerHTML = Math.ceil(
        swiper.slides.length / 3
      );
    },
    update: (swiper) => {
      document.querySelector(".swiper-all").innerHTML = Math.ceil(
        swiper.slides.length / 3
      );
    },
    slideChange: (swiper) => {
      document.querySelector(".swiper-current").innerHTML = Math.ceil(
        (swiper.activeIndex + 1) / 3
      );
    },
  },
});
function loadProducts(data, name = "apartments", x = "name", obj) {
  document.querySelector(".apartmens__cards").innerHTML = "";
  // const b = obj.price.from === "All" && obj.price.to === "All" ? "All" : null;
  data.products
    .filter((item, index) => {
      if (!obj) {
        return item[x] === name.toLowerCase();
      }
      if (
        obj.type === "All" &&
        Number(item.cost) >= Number(obj.price.from) &&
        Number(item.cost) <= Number(obj.price.to)
      ) {
        console.log("0", item.cost);
        return item;
      } else if (
        obj.type === item.type &&
        Number(item.cost) >= Number(obj.price.from) &&
        (Number(item.cost) <= Number(obj.price.to)) &
          (Number(item.bedroom) == Number(obj.bedroom))
      ) {
        console.log("1");
        return item;
      } else if (
        obj.type == item.type &&
        Number(item.cost) >= Number(obj.price.from)
      ) {
        console.log("2");
        return item;
      } else if (
        obj.type == item.type &&
        Number(item.cost) <= Number(obj.price.to)
      ) {
        console.log("3");
        return item;
      } else if (
        obj.type === item.type &&
        Number(item.cost) >= Number(obj.price.from) &&
        Number(item.cost) <= Number(obj.price.to)
      ) {
        console.log("4");
        return item;
      } else if (
        obj.type === item.type &&
        Number(item.bedroom) == Number(obj.bedroom)
      ) {
        console.log("5");
        return item;
      } else if (obj.type === item.type) {
        console.log("6");
        return item;
      } else if (
        obj.type === "All" &&
        (obj.price.from === "All" || obj.price.to === "All")
      ) {
        return item;
      }
    })
    .forEach((item) => {
      const productId = item.id;
      const productTitle = item.title;
      const productSubtitle = item.subtitle;
      const productImg = item.img;
      let productInfo = item.info;
      const productCost = item.cost;

      let poroductTemplateStart = `<div data-pid=${productId} class="apartmens__card swiper-slide">`;
      let poroductTemplateEnd = `</div>`;

      let productTitleStart = `
    <div class="apartmens__card_title">
      <p>${productTitle}</p>
    </div>
    <div class="apartmens__card_subtitle">
      <p>${productSubtitle}</p>
    </div>
    `;

      let productImgStart = `
    <div class="apartmens__card_img">
      <img src="img/${productImg}" alt=""/>
    </div>
    `;

      productInfo = productInfo.map(
        (item) => `
      <div class="apartmens__card_item">
        <div class="apartmens__card_left">
          <img src="img/${item[0]}" alt="" />
          <p>${item[1]}</p>
        </div>
        <span>${item[2]}</span>
      </div>
      `
      );

      let productCostStart = `
    <div class="apartmens__card_info">
      <span>From </span>
      <p>AED ${productCost}</p>
    </div>`;

      let productBtns = `
      <div class="apartmes__card_btns">
        <div>
          <button class="apartmens__card_btn1">
            Book a unit
          </button>
        </div>
        <div>
          <button class="apartmens__card_btn2">
            About the project
            <img src="img/icon/arrow_right.svg" alt="" />
          </button>
        </div>
      </div>`;

      poroductTemplateStart += productTitleStart;
      poroductTemplateStart += productImgStart;
      poroductTemplateStart += productInfo.join("");
      poroductTemplateStart += productCostStart;
      poroductTemplateStart += productBtns;
      poroductTemplateStart += poroductTemplateEnd;

      document.querySelector(".apartmens__cards").innerHTML +=
        poroductTemplateStart;
    });
}
// tabs

function moreP(selector, data, name) {
  const tab = document.querySelector(selector);

  tab.addEventListener("click", function (e) {
    loadProducts(data, name);
    cardSwiper.update();
  });
}

// поисковик

function search(data) {
  document.querySelector(".search").addEventListener("click", (event) => {
    document.querySelector(".apartmens__cards").innerHTML = "";
    event.preventDefault();
    let selectCondition = "";
    let radio = document.querySelectorAll(".search-radio");
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        selectCondition = radio[i].value;
        break;
      }
    }
    let selectType = document.querySelector(".select-type").value;
    let selectBedroom = document.querySelector(".select-bedroom").value;
    let selectPriceFrom = document.querySelector(".select-price-from").value;
    let selectPriceTo = document.querySelector(".select-price-to").value;

    const obj = {
      type: selectType,
      bedroom: selectBedroom,
      radioBtn: selectCondition,
      price: {
        from: selectPriceFrom,
        to: selectPriceTo,
      },
    };
    console.log(obj);

    loadProducts(data, selectType, "type", obj);
    cardSwiper.update();
  });
}

function tabsActive() {
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");
  const tabCard = document.querySelector(".apartmens__card");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
    });
  });
}

// заголовок вкладки

// анимация карточек

// анимация карточек

export { loadProducts, moreP, tabsActive, search, cardSwiper };
