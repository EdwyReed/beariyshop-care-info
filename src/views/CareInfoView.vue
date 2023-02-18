<template>
  <div class="title">
    Инструкция по экспулатации
  </div>

  <div class="carousel-container">
    <img
      @click="actualSlide <= 0 ? actualSlide = cards.length - 1 : actualSlide--"
      class="carousel__navigation--arrow"
      src="@/assets/icons/arrow-left.svg"
      alt=""
    >
    <carousel
      :items-to-show="1"
      :wrap-around="true"
      slideWidth="22rem"
      :breakpoints="breakpoints"
      v-model="actualSlide"
    >
      <slide jmkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk v-for="card in cards" :id="card.id" @click="actualSlide = cards.indexOf(card)">
        <div
          class="slide-content"
          :class="{'active animate__animated animate__headShake'  : card.id === openedCard}"
          @click="openedCard === card.id ? openedCard = null : openedCard = card.id"
          @blur="openedCard = null"
        >
          <div class="card-rules">
            <h2>{{ card.title }}</h2>
            <ul class="allowed">
              <li v-for="item in card.allowed">
                {{ item }}
              </li>
            </ul>
            <ul class="prohibited">
              <li v-for="item in card.prohibited">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        {{ card.name }}
      </slide>
      <template #addons>
        <Pagination/>
      </template>
    </carousel>
    <img
      @click="actualSlide >= cards.length - 1 ? actualSlide = 0 : actualSlide++"
      class="carousel__navigation--arrow"
      src="@/assets/icons/arrow-right.svg"
      alt=""
    >
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination} from 'vue3-carousel'

export default {
  data() {
    return {
      openedCard: null,
      actualSlide: 0,
      cards: [
        {
          id: 'amigurumi',
          name: 'Амигуруми',
          title: 'Стирка',
          allowed: [
            'сильно не отжимать',
            'ручная стирка',
            'сушить в горизонтальном положении',
            'при сушке избегать прямых солнечных лучей'
          ],
          prohibited: [
            'не использовать отбеливающие средства'
          ],
        },
        {
          id: 'pacifiers',
          name: 'Пустышки',
          title: 'Чистка',
          allowed: [
            'использовать щётку с мягким воросом',
            'использовать чуть тёплую воду',
            'избегать сушки/хранения под прямыми солнечными лучами',
            'хранить в защитном колпачке'
          ],
          prohibited: [
            'не использовать отбеливающие средства',
          ],
        },
        {
          id: 'accessories',
          name: 'Изделия из бисера',
          title: 'Чистка',
          allowed: [
            'протирать щёткой с мягким ворсом или слегка увлажнённой тряпочкой',
            'избегать хранения под прямыми солнечными лучами',
          ],
          prohibited: [
            'не мочить, влага может повредить форму/состояние изделия',
            'не использовать отбеливающие средства',
          ],
        }
      ],
      breakpoints: {
        // 700px and up
        870: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
      },
    }
  },
  components: {
    Pagination,
    Carousel,
    Slide,
  },
  watch: {
    actualSlide() {
      this.openedCard = null;
    }
  }
}
</script>

<style lang="scss">
.title {
  background: var(--color-primary);
  border-radius: 3rem;
  max-width: min(57.5rem, 76vw);
  width: 100%;

  display: grid;
  place-items: center;
  padding: 1rem 0;

  text-align: center;
  font-size: 3rem;
}

.carousel-container {
  margin: 8.4rem 0 0 0;
  width: 90vw;

  position: relative;

  .carousel__navigation--arrow {
    position: absolute;
    cursor: pointer;
    width: 5rem;
    z-index: 10;

    &:first-child {
      left: -1rem;
      top: calc(50% - 4.4rem);
    }

    &:last-child {
      right: -1rem;
      top: calc(50% - 4.4rem);
    }
  }

  .carousel__pagination {
    padding-left: 0;
    align-items: center;

    .carousel__pagination-button {

      &::after {
        border-radius: 50%;
        height: 1.2rem;
        width: 1.2rem;
        background-color: white;
      }

      &--active::after {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
}

.carousel__slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  font-size: 2rem;

  transition: padding 1s ease;

  .slide-content {
    width: 22rem;
    height: 22rem;
    overflow: hidden;
    border-radius: 3rem;

    background-size: cover;
    background-position: center;

    transition: all 1s ease;

    &.active > .card-rules {
      opacity: 1;
    }

    > .card-rules {
      transition: all .5s ease;
      height: 100%;
      width: 100%;
      opacity: 0;

      padding: 1rem 2rem;

      background: linear-gradient(180deg, rgba(238, 184, 211, 0.65) 0%, rgba(250, 207, 227, 0.65) 100%);
      backdrop-filter: blur(7.5px);

      h2 {
        margin-top: 0;
        margin-bottom: .6rem;
        font-size: 3rem;
      }

      ul {
        text-align: start;
        padding-left: 2rem;
      }

      .allowed {
        list-style: '+ ';
      }

      .prohibited {
        margin-top: 3ch;
        list-style: '- ';
      }
    }
  }

  &#amigurumi .slide-content {
    background-image: url("@/assets/img/amigurumi.png");
  }

  &#pacifiers .slide-content {
    background-image: url("@/assets/img/pacifiers.png");
  }

  &#accessories .slide-content {
    background-image: url("@/assets/img/accessories.jpg");
  }

  &--active {
    padding: 0;

    .slide-content {
      width: 29rem;
      height: 34rem;

      &.active {
        height: 49rem;
      }
    }
  }
}

@media (max-width: 530px) {
  .title {
    font-size: 2.5rem;
  }
}

@media (max-width: 465px) {
  .title {
    font-size: 2rem;
  }
}

@media (max-width: 370px) {
  .title {
    font-size: 1.75rem;
  }
}
</style>