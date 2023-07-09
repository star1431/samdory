<template>
  <transition name="popup" appear>
    <div class="pop-wrap" v-if="isVisible">
      <div class="pop-header">
        <div class="inner">
          <button class="close-btn" @click="$emit('leave')"><span class="text-medium">CLOSE</span></button>
        </div>
      </div>
      <div class="pop-content-wrap company detail">
        <div class="pop-content">
          <div class="slide-controll">

            <div :class="['pop-slide-box', typeClass]">
                <swiper
                  :slidesPerView="1"
                  :space-between="50"
                  :effect="'creative'"
                  :modules="popModules"
                  :creativeEffect="creativeEffect"
                  :wrapperTag="'ul'"
                  :wrapperClass="'detail-list-wrap'"
                  :autoplay="{delay: 100000,disableOnInteraction:false}"
                  :loop="true"
                  :speed="500"
                  @slideChange="popSlideChange"
                  @swiper="getPopSlide"
                  :observer="true"
                  :observeParents="true"
                >
                  <swiper-slide tag="li" class="detail-list" v-for="(item,i) in filterLists" :key="item.id">
                    <div :data-type="item.type">
                      <img :src="item.src" :alt="`${item.id} ${item.type} 이미지 - ${i + 1}`">
                    </div>
                  </swiper-slide>
                </swiper>
            </div>

            <div class="slide-paging">
              <button class="prev-btn" @click="slidePrev"><span>이전</span></button>
              <span class="text-sub"><em class="count">{{ count + 1 }}</em> / <em>{{ filterLists.length }}</em></span>
              <button class="next-btn" @click="slideNext"><span>다음</span></button>
            </div>
          </div>
        </div>
      </div>
      <div class="dim"></div>
    </div>
  </transition>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-creative'

export default {
  name: 'detailPopup',
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['visible','workid'],
  setup() {
    return{
      popModules: [EffectCreative, Autoplay],
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }
    }
  },
  data(){
    return{
      isVisible: null,
      count: 0,
      refPopSlide: null,
      isWorkid: null,
      typeClass:'default',
      swiperInstance: null,
      sampleList: [
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail01.png') },
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail02.png') },
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail03.png') },
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail04.png') },
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail05.png') }
      ],

      shinhan: [
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail01.png') },
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail02.png') },
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail03.png') },
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail04.png') },
        { id: 'shinhan', type: 'PC', src: require('@/assets/img/work/work_01shinhanbank_detail05.png') },
        { id: 'shinhan', type: 'MO', src: require('@/assets/img/work/work_01shinhanbank_detail_m01.png') },
        { id: 'shinhan', type: 'MO', src: require('@/assets/img/work/work_01shinhanbank_detail_m02.png') },
        { id: 'shinhan', type: 'MO', src: require('@/assets/img/work/work_01shinhanbank_detail_m03.png') },
        { id: 'shinhan', type: 'MO', src: require('@/assets/img/work/work_01shinhanbank_detail_m04.png') },
        { id: 'shinhan', type: 'MO', src: require('@/assets/img/work/work_01shinhanbank_detail_m05.png') },
        { id: 'shinhan', type: 'MO', src: require('@/assets/img/work/work_01shinhanbank_detail_m06.png') }
      ],
      kodata: [
        { id: 'kodata', type: 'PC', src: require('@/assets/img/work/work_02kodata_detail01.png') },
        { id: 'kodata', type: 'PC', src: require('@/assets/img/work/work_02kodata_detail02.png') },
        { id: 'kodata', type: 'PC', src: require('@/assets/img/work/work_02kodata_detail03.png') },
        { id: 'kodata', type: 'PC', src: require('@/assets/img/work/work_02kodata_detail04.png') },
        { id: 'kodata', type: 'PC', src: require('@/assets/img/work/work_02kodata_detail05.png') },
        { id: 'kodata', type: 'MO', src: require('@/assets/img/work/work_02kodata_detail_m01.png') },
        { id: 'kodata', type: 'MO', src: require('@/assets/img/work/work_02kodata_detail_m02.png') },
        { id: 'kodata', type: 'MO', src: require('@/assets/img/work/work_02kodata_detail_m03.png') },
        { id: 'kodata', type: 'MO', src: require('@/assets/img/work/work_02kodata_detail_m04.png') },
        { id: 'kodata', type: 'MO', src: require('@/assets/img/work/work_02kodata_detail_m05.png') }
      ],
      kbcms: [
        { id: 'kbcms', type: 'PC', src: require('@/assets/img/work/work_03kbcms_detail01.png') },
        { id: 'kbcms', type: 'PC', src: require('@/assets/img/work/work_03kbcms_detail02.png') },
        { id: 'kbcms', type: 'PC', src: require('@/assets/img/work/work_03kbcms_detail03.png') },
        { id: 'kbcms', type: 'PC', src: require('@/assets/img/work/work_03kbcms_detail04.png') },
        { id: 'kbcms', type: 'PC', src: require('@/assets/img/work/work_03kbcms_detail05.png') },
        { id: 'kbcms', type: 'PC', src: require('@/assets/img/work/work_03kbcms_detail06.png') }
      ],
      kbcard: [
        { id: 'kbcard', type: 'PC', src: require('@/assets/img/work/work_04kbcard_detail01.png') },
        { id: 'kbcard', type: 'PC', src: require('@/assets/img/work/work_04kbcard_detail02.png') },
        { id: 'kbcard', type: 'PC', src: require('@/assets/img/work/work_04kbcard_detail03.png') },
        { id: 'kbcard', type: 'PC', src: require('@/assets/img/work/work_04kbcard_detail04.png') },
        { id: 'kbcard', type: 'MO', src: require('@/assets/img/work/work_04kbcard_detail_m01.png') },
        { id: 'kbcard', type: 'MO', src: require('@/assets/img/work/work_04kbcard_detail_m02.png') },
        { id: 'kbcard', type: 'MO', src: require('@/assets/img/work/work_04kbcard_detail_m03.png') },
        { id: 'kbcard', type: 'MO', src: require('@/assets/img/work/work_04kbcard_detail_m04.png') },
        { id: 'kbcard', type: 'MO', src: require('@/assets/img/work/work_04kbcard_detail_m05.png') }
      ],
      kbchachacha: [
        { id: 'kbchachacha', type: 'MO', src: require('@/assets/img/work/work_05kbchachacha_detail_m01.png') },
        { id: 'kbchachacha', type: 'MO', src: require('@/assets/img/work/work_05kbchachacha_detail_m02.png') },
        { id: 'kbchachacha', type: 'MO', src: require('@/assets/img/work/work_05kbchachacha_detail_m03.png') },
        { id: 'kbchachacha', type: 'MO', src: require('@/assets/img/work/work_05kbchachacha_detail_m04.png') },
        { id: 'kbchachacha', type: 'MO', src: require('@/assets/img/work/work_05kbchachacha_detail_m05.png') },
        { id: 'kbchachacha', type: 'MO', src: require('@/assets/img/work/work_05kbchachacha_detail_m06.png') },
        { id: 'kbchachacha', type: 'MO', src: require('@/assets/img/work/work_05kbchachacha_detail_m07.png') },
        { id: 'kbchachacha', type: 'MO', src: require('@/assets/img/work/work_05kbchachacha_detail_m08.png') }
      ],
      hmall: [
        { id: 'hmall', type: 'PC', src: require('@/assets/img/work/work_06hmall_detail01.png') },
        { id: 'hmall', type: 'PC', src: require('@/assets/img/work/work_06hmall_detail02.png') },
        { id: 'hmall', type: 'PC', src: require('@/assets/img/work/work_06hmall_detail03.png') },
        { id: 'hmall', type: 'PC', src: require('@/assets/img/work/work_06hmall_detail04.png') },
        { id: 'hmall', type: 'PC', src: require('@/assets/img/work/work_06hmall_detail05.png') }
      ],
      renaultkorea: [
        { id: 'renaultkorea', type: 'MO', src: require('@/assets/img/work/work_07renaultkorea_detail_m01.png') },
        { id: 'renaultkorea', type: 'MO', src: require('@/assets/img/work/work_07renaultkorea_detail_m02.png') },
        { id: 'renaultkorea', type: 'MO', src: require('@/assets/img/work/work_07renaultkorea_detail_m03.png') },
        { id: 'renaultkorea', type: 'MO', src: require('@/assets/img/work/work_07renaultkorea_detail_m04.png') },
        { id: 'renaultkorea', type: 'MO', src: require('@/assets/img/work/work_07renaultkorea_detail_m05.png') },
        { id: 'renaultkorea', type: 'MO', src: require('@/assets/img/work/work_07renaultkorea_detail_m06.png') }
      ],
      happypoint: [
        { id: 'happypoint', type: 'PC', src: require('@/assets/img/work/work_08happypoint_detail01.png') },
        { id: 'happypoint', type: 'PC', src: require('@/assets/img/work/work_08happypoint_detail02.png') },
        { id: 'happypoint', type: 'PC', src: require('@/assets/img/work/work_08happypoint_detail03.png') },
        { id: 'happypoint', type: 'PC', src: require('@/assets/img/work/work_08happypoint_detail04.png') },
        { id: 'happypoint', type: 'PC', src: require('@/assets/img/work/work_08happypoint_detail05.png') },
        { id: 'happypoint', type: 'PC', src: require('@/assets/img/work/work_08happypoint_detail06.png') },
        { id: 'happypoint', type: 'MO', src: require('@/assets/img/work/work_08happypoint_detail_m01.png') },
        { id: 'happypoint', type: 'MO', src: require('@/assets/img/work/work_08happypoint_detail_m02.png') },
        { id: 'happypoint', type: 'MO', src: require('@/assets/img/work/work_08happypoint_detail_m03.png') },
        { id: 'happypoint', type: 'MO', src: require('@/assets/img/work/work_08happypoint_detail_m04.png') },
        { id: 'happypoint', type: 'MO', src: require('@/assets/img/work/work_08happypoint_detail_m05.png') },
        { id: 'happypoint', type: 'MO', src: require('@/assets/img/work/work_08happypoint_detail_m06.png') },
        { id: 'happypoint', type: 'MO', src: require('@/assets/img/work/work_08happypoint_detail_m07.png') },
        { id: 'happypoint', type: 'MO', src: require('@/assets/img/work/work_08happypoint_detail_m08.png') },
        { id: 'happypoint', type: 'MO', src: require('@/assets/img/work/work_08happypoint_detail_m09.png') }
      ],
      lotteskyhill: [
        { id: 'lotteskyhill', type: 'PC', src: require('@/assets/img/work/work_09lotteskyhill_detail01.png') },
        { id: 'lotteskyhill', type: 'PC', src: require('@/assets/img/work/work_09lotteskyhill_detail02.png') },
        { id: 'lotteskyhill', type: 'PC', src: require('@/assets/img/work/work_09lotteskyhill_detail03.png') },
        { id: 'lotteskyhill', type: 'PC', src: require('@/assets/img/work/work_09lotteskyhill_detail04.png') },
        { id: 'lotteskyhill', type: 'PC', src: require('@/assets/img/work/work_09lotteskyhill_detail05.png') },
        { id: 'lotteskyhill', type: 'PC', src: require('@/assets/img/work/work_09lotteskyhill_detail06.png') }
      ],
      aquaplanet: [
        { id: 'aquaplanet', type: 'PC', src: require('@/assets/img/work/work_10aquaplanet_detail01.png') },
        { id: 'aquaplanet', type: 'PC', src: require('@/assets/img/work/work_10aquaplanet_detail02.png') },
        { id: 'aquaplanet', type: 'PC', src: require('@/assets/img/work/work_10aquaplanet_detail03.png') },
        { id: 'aquaplanet', type: 'PC', src: require('@/assets/img/work/work_10aquaplanet_detail04.png') },
        { id: 'aquaplanet', type: 'PC', src: require('@/assets/img/work/work_10aquaplanet_detail05.png') },
        { id: 'aquaplanet', type: 'PC', src: require('@/assets/img/work/work_10aquaplanet_detail06.png') },
        { id: 'aquaplanet', type: 'PC', src: require('@/assets/img/work/work_10aquaplanet_detail07.png') }
      ],
      nkglobal: [
        { id: 'nkglobal', type: 'PC', src: require('@/assets/img/work/work_11nkglobal_detail01.png') },
        { id: 'nkglobal', type: 'PC', src: require('@/assets/img/work/work_11nkglobal_detail02.png') },
        { id: 'nkglobal', type: 'PC', src: require('@/assets/img/work/work_11nkglobal_detail03.png') },
        { id: 'nkglobal', type: 'PC', src: require('@/assets/img/work/work_11nkglobal_detail04.png') },
        { id: 'nkglobal', type: 'PC', src: require('@/assets/img/work/work_11nkglobal_detail05.png') },
        { id: 'nkglobal', type: 'PC', src: require('@/assets/img/work/work_11nkglobal_detail06.png') },
        { id: 'nkglobal', type: 'PC', src: require('@/assets/img/work/work_11nkglobal_detail07.png') },
        { id: 'nkglobal', type: 'PC', src: require('@/assets/img/work/work_11nkglobal_detail08.png') },
        { id: 'nkglobal', type: 'MO', src: require('@/assets/img/work/work_11nhglobal_detail_m01.png') },
        { id: 'nkglobal', type: 'MO', src: require('@/assets/img/work/work_11nhglobal_detail_m02.png') },
        { id: 'nkglobal', type: 'MO', src: require('@/assets/img/work/work_11nhglobal_detail_m03.png') },
        { id: 'nkglobal', type: 'MO', src: require('@/assets/img/work/work_11nhglobal_detail_m04.png') },
        { id: 'nkglobal', type: 'MO', src: require('@/assets/img/work/work_11nhglobal_detail_m05.png') },
        { id: 'nkglobal', type: 'MO', src: require('@/assets/img/work/work_11nhglobal_detail_m06.png') },
        { id: 'nkglobal', type: 'MO', src: require('@/assets/img/work/work_11nhglobal_detail_m07.png') }
      ],
      scbank: [
        { id: 'scbank', type: 'MO', src: require('@/assets/img/work/work_12scbank_detail_m01.png') },
        { id: 'scbank', type: 'MO', src: require('@/assets/img/work/work_12scbank_detail_m02.png') },
        { id: 'scbank', type: 'MO', src: require('@/assets/img/work/work_12scbank_detail_m03.png') },
        { id: 'scbank', type: 'MO', src: require('@/assets/img/work/work_12scbank_detail_m04.png') },
        { id: 'scbank', type: 'MO', src: require('@/assets/img/work/work_12scbank_detail_m05.png') },
        { id: 'scbank', type: 'MO', src: require('@/assets/img/work/work_12scbank_detail_m06.png') },
        { id: 'scbank', type: 'MO', src: require('@/assets/img/work/work_12scbank_detail_m07.png') },
        { id: 'scbank', type: 'MO', src: require('@/assets/img/work/work_12scbank_detail_m08.png') },
        { id: 'scbank', type: 'MO', src: require('@/assets/img/work/work_12scbank_detail_m09.png') }
      ],
    }
  },
  mounted(){
  },
  watch: {
    // 전달받은 props를 data로 할당
    visible(newVal) {
      this.isVisible = newVal
    },
    workid(newVal2) {
      this.isWorkid = newVal2
    }
  },
  computed: {
    // isWorkid 값에 따라 필터 프로퍼티 정의 
    filterLists() {
      if (this.isWorkid === 'shinhan') return this.shinhan
      else if (this.isWorkid === 'kodata') return this.kodata
      else if (this.isWorkid === 'kbcms') return this.kbcms
      else if (this.isWorkid === 'kbcard') return this.kbcard
      else if (this.isWorkid === 'kbchachacha') return this.kbchachacha
      else if (this.isWorkid === 'hmall') return this.hmall
      else if (this.isWorkid === 'renaultkorea') return this.renaultkorea
      else if (this.isWorkid === 'happypoint') return this.happypoint
      else if (this.isWorkid === 'lotteskyhill') return this.lotteskyhill
      else if (this.isWorkid === 'aquaplanet') return this.aquaplanet
      else if (this.isWorkid === 'nkglobal') return this.nkglobal
      else if (this.isWorkid === 'scbank') return this.scbank
      else {
        return this.sampleList
      }
      
    }
  },
  methods: {
    closePopup() {
      this.isVisible = false
    },
    // swiper ref 할당
    getPopSlide (refs) {
      this.refPopSlide = refs
      // 초기 클래스 결정 및 적용
      const _index = refs.realIndex
      const _currentType = this.filterLists[_index].type
      this.typeClass = _currentType  === 'PC' ? 'default' : 'mobile-type'
    },

    // 카운트 및 class 할당
    popSlideChange(swiper) {
      this.count = swiper.realIndex
      // 슬라이드시 클래스 결정 및 적용
      const _index2 = swiper.realIndex
      const _currentType2 = this.filterLists[_index2].type
      this.typeClass = _currentType2  === 'PC' ? 'default' : 'mobile-type'
    },

    // 외부태그 버튼기능 할당
    slidePrev() {
      if (this.refPopSlide) {
        this.refPopSlide.slidePrev()
      }
    },
    slideNext() {
      if (this.refPopSlide) {
        this.refPopSlide.slideNext()
      }
    }
  }
}
</script>