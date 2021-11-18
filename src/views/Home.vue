<template>
  <div>
    <div class="banner flex justify-center items-center">
      <div class="banner-contanier">
        <img class="banner-logo" src="@/assets/images/logo_white.png" alt="Bike Fun">
        <span class="block text-xl font-bold text-white-100 text-right tracking-widest">Bike Fun！自行車旅遊網</span>
      </div>
    </div>
    <main class="main-wrap mx-auto relative">
      <Navigation class="absolute -top-24 left-0 right-0" />
      <section class="content-container mx-auto pt-5 pb-16">
        <img src="@/assets/images/boyWithRoute.png" alt="boy with route" class="mx-auto">
        <p class=" text-dark-200 leading-normal">便。告全禱我王劈有哇汐懇久給，分網呢瑄度不期清？資空有，沾對路韜空文近建回屠樞快錯樣沒卻遂人到騷不胡辨音次結，盪陳車，比反網己使。它栽！虛四是甚首；翩鏢社果捐貨話買啊？炭沾強三管期、同題己我己…、鵰章措秩合到公話慈在期不金議是曹搬大愛成以章陳要喜區跨，星退傑狗市蓉都利娟車龍人廿西美法沖憐為誰提嗜？裊張前廬狸中定，老靶五嘉慶卸太神戰經我重的，直看意澡每崎入因北用厚；要便，平是直找頒徊核艱至又放想工。</p>
      </section>
      <section class="latest-news-panel flex border-t border-b border-gray-400 -mb-px">
        <router-link to="/" class="latest-news-link flex justify-center items-center font-bold text-yellow-100 text-2xl border-r border-gray-400">
          最新消息
        </router-link>
        <div class="flex-grow grid grid-cols-3">
          <router-link to="/" class="news-item news-1 relative flex flex-col justify-center items-center text-white-100 border-r border-gray-400">
            <span class="news-bg news-1-bg block absolute w-full h-full text-white-100"></span>
            <span class="block mb-6">2021/09/22</span>
            <span class="w-60 block text-2xl font-bold text-center mb-12">16條自行車多元路線遊程推廣及販售</span>
            <span class="block border-b border-gray-200 leading-none">+ Read more</span>
          </router-link>
          <router-link to="/" class="news-item news-2 relative flex flex-col justify-center items-center text-white-100 border-r border-gray-400">
            <span class="news-bg news-2-bg block absolute w-full h-full text-white-100"></span>
            <span class="block mb-6">2021/09/22</span>
            <span class="w-60 block text-2xl font-bold text-center mb-12">最美伸展台 芝蘭公園海上觀景平台啟用</span>
            <span class="block border-b border-gray-200 leading-none">+ Read more</span>
          </router-link>
          <div class="flex justify-center items-center">
            <button
              type="button"
              class="btn flex justify-center items-center text-lg font-bold border-2 duration-200
               border-green-100 rounded-full py-2 active:opacity-80">
              <span class="mr-1">更多最新消息</span>
              <span class="material-icons arrow-icon text-green-100">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
      <section class="explore-routes-panel flex border-t border-b border-gray-400 -mb-px">
        <router-link to="/" class="explore-routes-link flex justify-center items-center font-bold text-yellow-100 text-2xl border-r border-gray-400">
          探索路線
        </router-link>
        <div class="flex-grow grid grid-cols-3">
          <div class="col-span-2 flex flex-col justify-center items-start text-dark-200 p-14">
            <p class="relative text-xl mb-8">
              <span>自動定位、手動輸入都方便！ 快速找到離您最近的車道路線</span>
              <img
                src="@/assets/images/crayon.png"
                alt="crayon image"
                class="crayon-img absolute top-1.5 right-2 transform translate-x-1/2 rotate-2">
            </p>
            <button
              type="button"
              class="btn flex justify-center items-center text-lg font-bold border-2 duration-200
               border-green-100 rounded-full py-2 active:opacity-80">
              <span class="mr-1">立刻搜尋</span>
              <span class="material-icons arrow-icon text-green-100">arrow_forward</span>
            </button>
          </div>
          <div class="explore-routes-img col-span-1"></div>
        </div>
      </section>
      <section class="find-site-panel flex border-t border-b border-gray-400 -mb-px">
        <router-link to="/" class="find-site-link flex justify-center items-center font-bold text-yellow-100 text-2xl border-r border-gray-400">
          尋找站點
        </router-link>
        <div class="flex-grow grid grid-cols-3">
          <div class="find-site-img col-span-2"></div>
          <div class="col-span-1">
            <div class="flex flex-col justify-between h-1/2 border-b border-gray-400 px-6 py-10">
              <h2 class="text-2xl text-dark-200 font-bold px-3">即時站點地圖</h2>
                <button
                  type="button"
                  class="btn flex justify-center items-center text-lg font-bold border-2 duration-200
                   border-green-100 rounded-full py-2 active:opacity-80">
                <span class="mr-1">立刻查看</span>
                <span class="material-icons arrow-icon text-green-100">arrow_forward</span>
              </button>
            </div>
            <div class="flex flex-col justify-between h-1/2 px-6 py-10">
              <h2 class="text-2xl text-dark-200 font-bold px-3">服務中心資訊</h2>
              <button
                type="button"
                class="btn flex justify-center items-center text-lg font-bold border-2 duration-200
                 border-green-100 rounded-full py-2 active:opacity-80">
                <span class="mr-1">立刻查看</span>
                <span class="material-icons arrow-icon text-green-100">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="text-center font-bold py-14">
        <h3 class="text-2xl text-yellow-100 mb-14">常見問題</h3>
        <router-link to="/" class="block text-xl text-dark-200 mb-8">憫感忿加它棺再？琵言襟嗎賺叫要中吧？</router-link>
        <router-link to="/" class="block text-xl text-dark-200 mb-8">憫感忿加它棺再？琵言襟嗎賺叫要中吧？要萍浮現以蹤功應版有了</router-link>
        <router-link to="/" class="block text-xl text-dark-200 mb-8">襟嗎賺叫要中吧？要萍浮現以蹤功應版有了</router-link>
        <button
          type="button"
          class="btn flex justify-center items-center text-lg font-bold border-2 border-green-100
          rounded-full duration-200 py-2 mx-auto active:opacity-80">
          <span class="mr-1">更多常見問題</span>
          <span class="material-icons arrow-icon text-green-100">arrow_forward</span>
        </button>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Navigation = defineAsyncComponent(() => import('@/components/Navigation.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
</script>

<style lang="scss" scoped>
@import '~@/assets/styleSheets/mixins.scss';

.main-wrap {
  max-width: 1440px;
}
.banner-contanier {
  width: 646px;
  transform: translateY(-60px);
}
.banner {
  height: 715px;
  background-image: url("~@/assets/images/bg01.jpg");
}
.banner-logo {
  width: 545px;
  height: 165px;
}
.content-container {
  width: 860px;
}
.latest-news-link, .explore-routes-link, .find-site-link {
  transition: color 0.3s, background-color 0.3s;
  max-width: 252px;
  width: 100%;
  &:hover {
    @apply text-white-100 bg-yellow-100;
  }
}
.latest-news-panel, .explore-routes-panel, .find-site-panel {
  height: 472px;
}
.banner, .news-1, .news-2, .explore-routes-img, .find-site-img {
  @apply overflow-hidden;
  @include bg-style;
}
.news-item {
  &:hover {
    .news-bg {
      @apply transform scale-105;
    }
  }
}
.news-bg {
  transition: transform 1s;
  z-index: -1;
}
.btn {
  width: 173px;
  transition: color 0.3s, background-color 0.3s;
  &:hover {
    @apply text-white-100 bg-green-100;
    .arrow-icon {
      @apply text-white-100
    }
  }
}
.news-1-bg {
  background-image: url("~@/assets/images/index_news01.jpg");
}
.news-2-bg {
  background-image: url("~@/assets/images/index_news02.jpg");
}
.explore-routes-img {
  background-image: url("~@/assets/images/index_route.jpg");
}
.find-site-img {
  background-image: url("~@/assets/images/index_busStation.jpg");
}
.crayon-img {
  z-index: -1;
}
.material-icons.arrow-icon {
  transition: color 0.3s;
  @apply text-xl font-bold;
}
</style>
