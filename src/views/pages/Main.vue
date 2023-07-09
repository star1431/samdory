<template>
  <div :class="['content-wrap', pageClass]">
    <div class="section-area bg-black">
      <div class="inner">
        <div class="title-main">
          <span data-aos="fade-down-right" data-aos-easing="ease-in-out-back" data-aos-duration="700">We Are</span>
          <span data-aos="fade-left" data-aos-delay="750" data-aos-easing="ease-in-out-back" data-aos-duration="700">Web Publishing</span>
          <span data-aos="zoom-in-up" data-aos-delay="1500" data-aos-easing="ease-in-out-back" data-aos-duration="700">UI Script Company</span>
        </div>

        <div class="summary-wrap">
          <div class="summary-image" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="2500" data-aos-duration="1100" >
            <div class="summary-image-box">
              <img src="@/assets/img/main/img_main01.png" alt="greeting img">
            </div>
            <div class="summary-text-box">
              <p>우리는 인터랙티브한 구현에<br/>끊임없이 연구하는<br/>웹퍼블리싱 UI스크립트 전문기업입니다.</p>
            </div>
          </div>
          <div class="summary-circle" data-aos="zoom-in-down" data-aos-easing="ease-out-back" data-aos-delay="2500" data-aos-duration="1100" data-aos-offset="0">
            <div class="summary-circle-button-wrap">
              <div class="summary-circle-button" @click="scrollToEv">
                <p>COMPANY<br/>BROCHURE</p>
                <button><span>화살표</span></button>
              </div>
            </div>
            <div class="summary-circle-design"></div>
          </div>
        </div>

      </div>
      <div class="bg-article-wrap">
        <div class="article01"></div>
        <div class="article02"></div>
        <div class="article03"></div>
      </div>
    </div>
  
    <div class="section-area bg-gray" @mouseover="forceOver">
      <div class="slide-control" data-aos="fade-up">
        <div class="inner">
          <div class="slide-wrap">
            <swiper
              :slidesPerView="1"
              :space-between="50"
              :effect="'creative'"
              :modules="modules"
              :creativeEffect="creativeEffect"
              :wrapperTag="'ul'"
              :wrapperClass="'work-list'"
              :autoplay="{delay: 3000,disableOnInteraction:false,pauseOnMouseEnter:true}"
              :loop="true"
              :speed="500"
              @slideChange="slideCount"
              @swiper="getSlide"
              :observer="true"
              :observeParents="true"
            >
              <swiper-slide tag="li" :class="{ on: overOnClass }" v-for="work in workLists" :key="work.id">
                <div class="img-wrap">
                  <a href="javascript:void(0)" @click="openPopup(work.id)" @mouseover="addOnEv" @mouseout="removeOnEv">
                    <img :src="work.src" :alt="`${work.id} 썸네일 이미지`">
                  </a>
                </div>
                <div class="txt-wrap">
                  <a href="javascript:void(0)" @click="openPopup(work.id)" @mouseover="addOnEv" @mouseout="removeOnEv">
                    <h3 class="title-main-sub" v-html="work.tit"></h3>
                    <h3 class="title-main-sub mobile-type">{{ work.motit }}</h3>
                    <ul class="tech-list">
                      <li v-if="work.tech1"><span class="text-default">{{ work.tech1 }}</span></li>
                      <li v-if="work.tech2"><span class="text-default">{{ work.tech2 }}</span></li>
                      <li v-if="work.tech3"><span class="text-default">{{ work.tech3 }}</span></li>
                      <li v-if="work.tech4"><span class="text-default">{{ work.tech4 }}</span></li>
                      <li v-if="work.tech5"><span class="text-default">{{ work.tech5 }}</span></li>
                    </ul>
                  </a>
                </div>
              </swiper-slide>
            </swiper>
            <div class="slide-paging">
              <span class="text-sub"><em class="count">{{ count + 1 }}</em> / {{ workLists.length }}</span>
            </div>
          </div>
        </div>
        <div class="banner-wrap" data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="0">
          <swiper
            :slidesPerView="'auto'"
            :wrapperTag="'ul'"
            :modules="modules2"
            :autoplay="{delay: 0,disableOnInteraction:false}"
            :loop="true"
            :init="true"
            :initialSlide="4"
            :speed="3000"
            :options="{ event: { mouseover: true } }"
            @swiper="getBanner"
            @mouseEnter="bannerEnter"
            @mouseleave="bannerLeave"
          >
            <swiper-slide tag="li" v-for="banner in bannerLists" :key="banner.src">
              <a href="javascript:void(0)"><img :src="banner.src" :alt="`${banner.id} 로고`"></a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- (제거) swiper 및 v-for 이라서 다른방식으로 사용  -->
      <!-- <script>
        window.addEventListener('load', function () {
          adjacencyHov();
        });
        function adjacencyHov(params) {
          const targrtBox = document.querySelector('.work-list').children
          for (let i = 0; i < targrtBox.length; i++) {
            const element = targrtBox[i];
            element.addEventListener('mouseover', (event) => {
              const target = event.target.closest('li')
              target.classList.add('on')
              console.log(target)
            });
            element.addEventListener('mouseout', (event) => {
              const target = event.target.closest('li')
              target.classList.remove('on')
            });
          }
        }
      </script> -->
    </div>
    <!-- 팝업오픈 -->
    <detail-popup :visible="isVisible" @leave="closePopup" :workid="workId"></detail-popup>

  </div>
</template>

<script>
import detailPopup from '@/views/popup/detailPopup.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'

export default {
  name: 'MainPage',
  inject: ['AOS'],
  components: {
    detailPopup,
    Swiper,
    SwiperSlide
  },
  props: {
  },
  setup() {
    return {
      pageClass: ['main'],
      modules: [EffectCreative, Autoplay],
      modules2: [Autoplay],
      creativeEffect: {
        prev: {
          shadow: true,
          origin: 'left center',
          translate: ['-5%', 0, -200],
          rotate: [0, 100, 0],
          opacity: '0'
        },
        next: {
          origin: 'right center',
          translate: ['5%', 0, -200],
          rotate: [0, -100, 0],
          opacity: '0'
        }
      }
    }
  },
  data(){
    return{
      isVisible: false,
      count: 0,
      refSlide: null,
      refBanner: null,
      workId: null,
      overOnClass: false,
      workLists: [
        { 
          id: 'shinhan',
          src: require('@/assets/img/work/work_01shinhanbank_thum.png'),
          tit: '신한은행 기업뱅킹<br>비대면 채널 개편', 
          motit: '신한은행 기업뱅킹 비대면 채널 개편', 
          tech1: 'PC & Mobile Design', 
          tech2: 'Front End Develop', 
          tech3: 'HTML', 
          tech4: 'CSS',
          tech5: 'JavaScript'
        },
        { 
          id: 'kodata',
          src: require('@/assets/img/work/work_02kodata_thum.png'),
          tit: '한국평가데이터<br> CRETOP 구축', 
          motit: '한국평가데이터 CRETOP 구축', 
          tech1: 'VUE', 
          tech2: 'CSS', 
          tech3: 'JavaScript'
        },
        { 
          id: 'kbcms',
          src: require('@/assets/img/work/work_03kbcms_thum.png'),
          tit: 'KB Star <br>CMS2.0 고도화', 
          motit: 'KB Star CMS2.0 고도화', 
          tech1: 'PC Design', 
          tech2: 'Front End Develop', 
          tech3: 'HTML', 
          tech4: 'CSS',
          tech5: 'JavaScript'
        },
        { 
          id: 'kbcard',
          src: require('@/assets/img/work/work_04kbcard_thum.png'),
          tit: 'KB카드 <br>디지털채널 운영', 
          motit: 'KB카드 디지털채널 운영', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript'
        },
        { 
          id: 'kbchachacha',
          src: require('@/assets/img/work/work_05kbchachacha_thum.png'),
          tit: 'KB캐피탈 차차차 <br>마이데이터 구축', 
          motit: 'KB캐피탈 차차차 마이데이터 구축', 
          tech1: 'APP Design', 
          tech2: 'Front End Develop', 
          tech3: 'HTML', 
          tech4: 'CSS', 
          tech5: 'JavaScript'
        },
        { 
          id: 'hmall',
          src: require('@/assets/img/work/work_06hmall_thum.png'),
          tit: '현대 H몰 <br>웹사이트 리뉴얼', 
          motit: '현대 H몰 웹사이트 리뉴얼', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript'
        },
        { 
          id: 'renaultkorea',
          src: require('@/assets/img/work/work_07renaultkorea_thum.png'),
          tit: '르노캐피탈 <br>Front Office', 
          motit: '르노캐피탈 Front Office', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript'
        },
        { 
          id: 'happypoint',
          src: require('@/assets/img/work/work_08happypoint_thum.png'),
          tit: '해피포인트 <br>웹사이트 리뉴얼', 
          motit: '해피포인트 웹사이트 리뉴얼', 
          tech1: 'PC & Mobile Design'
        },
        { 
          id: 'lotteskyhill',
          src: require('@/assets/img/work/work_09lotteskyhill_thum.png'),
          tit: '롯데스카이힐 리조트 <br>웹사이트 리뉴얼', 
          motit: '롯데스카이힐 리조트 웹사이트 리뉴얼', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript'
        },
        { 
          id: 'aquaplanet',
          src: require('@/assets/img/work/work_10aquaplanet_thum.png'),
          tit: '한화아쿠아플라넷 <br>웹사이트 리뉴얼', 
          motit: '한화아쿠아플라넷 웹사이트 리뉴얼', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript'
        },
        { 
          id: 'nkglobal',
          src: require('@/assets/img/work/work_11nkglobal_thum.png'),
          tit: 'NH Global <br>베트남뱅킹 구축', 
          motit: 'NH Global 베트남뱅킹 구축', 
          tech1: 'PC & Mobile Design', 
          tech2: 'Front End Develop', 
          tech3: 'HTML', 
          tech4: 'CSS',
          tech5: 'JavaScript'
        },
        { 
          id: 'scbank',
          src: require('@/assets/img/work/work_12scbank_thum.png'),
          tit: 'SC제일은행 <br>하이브리드앱 개발', 
          motit: 'SC제일은행 하이브리드앱 개발', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript'
        }
      ],
      bannerLists: [
        { id: 'shinhan', src: require('@/assets/img/main/work_01shinhanbank_logo.png') },
        { id: 'kodata', src: require('@/assets/img/main/work_02kodata_logo.png') },
        { id: 'kbcms',  src: require('@/assets/img/main/work_03kbcms_logo.png') },
        { id: 'kbcard',  src: require('@/assets/img/main/work_04kbcard_logo.png') },
        { id: 'kbchachacha',  src: require('@/assets/img/main/work_05kbchachacha_logo.png') },
        { id: 'hmall',  src: require('@/assets/img/main/work_06hmall_logo.png') },
        { id: 'renaultkorea',  src: require('@/assets/img/main/work_07renaultkorea_logo.png') },
        { id: 'happypoint',  src: require('@/assets/img/main/work_08happypoint_logo.png') },
        { id: 'lotteskyhill',  src: require('@/assets/img/main/work_09lotteskyhill_logo.png') },
        { id: 'aquaplanet',  src: require('@/assets/img/main/work_10aquaplanet_logo.png') },
        { id: 'nkglobal',  src: require('@/assets/img/main/work_11nkglobal_logo.png') },
        { id: 'scbank',  src: require('@/assets/img/main/work_12scbank_logo.png') },
        // full screen일때 갯수가 적어 슬라이드 작동오류로 강제로 추가
        { id: 'shinhan', src: require('@/assets/img/main/work_01shinhanbank_logo.png') },
        { id: 'kodata', src: require('@/assets/img/main/work_02kodata_logo.png') },
        { id: 'kbcms',  src: require('@/assets/img/main/work_03kbcms_logo.png') },
        { id: 'kbcard',  src: require('@/assets/img/main/work_04kbcard_logo.png') },
        { id: 'kbchachacha',  src: require('@/assets/img/main/work_05kbchachacha_logo.png') },
        { id: 'hmall',  src: require('@/assets/img/main/work_06hmall_logo.png') },
        { id: 'renaultkorea',  src: require('@/assets/img/main/work_07renaultkorea_logo.png') },
        { id: 'happypoint',  src: require('@/assets/img/main/work_08happypoint_logo.png') },
        { id: 'lotteskyhill',  src: require('@/assets/img/main/work_09lotteskyhill_logo.png') },
        { id: 'aquaplanet',  src: require('@/assets/img/main/work_10aquaplanet_logo.png') },
        { id: 'nkglobal',  src: require('@/assets/img/main/work_11nkglobal_logo.png') },
        { id: 'scbank',  src: require('@/assets/img/main/work_12scbank_logo.png') },
      ]
    }
  },
  mounted(){
    // 첫진입시 강제 autoplay
    this.refBanner.autoplay.start()
  },
  computed: {
  },
  methods: {
    // COMPANY BROCHURE 버튼
    scrollToEv() {
      const _bodyHight = document.body.scrollHeight
      console.log('height', _bodyHight)
      window.scrollTo({ top: _bodyHight, behavior: 'smooth' })
    },

    // swiper refs 강제 할당
    getSlide (refs) {
      this.refSlide = refs
    },
    getBanner (refs) {
      this.refBanner = refs
    },

    // swiper change count 할당
    slideCount(swiper) {
      // console.log('[pub]', swiper.realIndex, swiper)
      this.count = swiper.realIndex
    },

    // 슬라이드 클릭시 openPopup
    openPopup(props) {
      this.workId = props
      this.isVisible = true
      this.refSlide.autoplay.stop() // *debugging 필요 - addOnEv() 경우는 작동되는데 클릭시엔 작동이 안되는 원인 알수없음
      document.body.classList.add('scroll-hidden-y')
    },
    
    // detailPop.vue에서 event emit
    closePopup() {
      this.isVisible = false
      this.refSlide.autoplay.start() // *debugging 필요 - addOnEv() 경우는 작동되는데 클릭시엔 작동이 안되는 원인 알수없음
      document.body.classList.remove('scroll-hidden-y')
    },


    // 슬라이드 내 버튼 over
    addOnEv() {
      this.overOnClass = true
      this.refSlide.autoplay.stop()
    },
    // 슬라이드 내 버튼 out
    removeOnEv() {
      this.overOnClass = false
      this.refSlide.autoplay.start()
    },

    // 해당영역에서 새로고침시 강제 autoplay
    forceOver() { 
      this.refBanner.autoplay.start()
    },

    // banner 관련 autoplay
    bannerEnter() {
      this.refBanner.autoplay.stop()
    },
    bannerLeave() {
      this.refBanner.autoplay.start()
    }
  }
}
</script>