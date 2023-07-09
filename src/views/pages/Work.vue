<template>
  <div :class="['content-wrap', pageClass]">
    <div class="content" id="section">
      <div class="content-header">
        <div class="content-header-title">
          <h2 data-aos="fade-down" data-aos-easing="ease-in-out-back">work</h2>
        </div>
      </div>

      <div class="content-body">
        <div class="tab-content tabs">
          <div class="tabs-header" data-aos="zoom-out-left" data-aos-delay="500">
            <ul class="tabs-list">
              <li class="tabs-list-item" v-for="tabItem in yearfilter" :key="tabItem">
                <button :class="['tabs-list-item-button', { active: this.yearData === tabItem } ]" @click="filterChangeYear(tabItem)">
                  <span v-if="tabItem === null">ALL</span>
                  <span v-if="tabItem === '2022'">2022</span>
                  <span v-if="tabItem === '2021'">2021</span>
                  <span v-if="tabItem === '2020'">2020</span>
                  <span v-if="tabItem === '2019'">2019~</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="tabs-body">
            <div class="tabs-panels">

              <div class="tabs-panel active">
                <div class="work-list-wrap">
                  
                  <ul class="work-list" ref="refreshList">
                    <li class="work-list-item" v-for="(work,i) in filterLists" :key="work.dummyData">
                      <div class="card-box" :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'" data-offset="300">
                        <a href="javascript:void(0)" @click="openPopup(work.id)">
                          <div class="card-box-image img-wrap">
                            <img :src="work.src" :alt="`${work.id} 썸네일 이미지`">
                          </div>
                          <div class="card-box-title">
                            <span>{{work.motit}}</span>
                          </div>
                          <ul class="tech-list">
                            <li v-if="work.tech1"><span class="text-default">{{ work.tech1 }}</span></li>
                            <li v-if="work.tech2"><span class="text-default">{{ work.tech2 }}</span></li>
                            <li v-if="work.tech3"><span class="text-default">{{ work.tech3 }}</span></li>
                            <li v-if="work.tech4"><span class="text-default">{{ work.tech4 }}</span></li>
                            <li v-if="work.tech5"><span class="text-default">{{ work.tech5 }}</span></li>
                          </ul>
                        </a>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 팝업오픈 -->
    <detail-popup :visible="isVisible" @leave="closePopup" :workid="workId"></detail-popup>
  </div>
</template>

<script>
import detailPopup from '@/views/popup/detailPopup.vue'
export default {
  name: 'WorkPage',
  inject: ['AOS'],
  components: {
    detailPopup
  },
  props: {
  },
  setup() {
    return{
      pageClass: ['company','work']
    }
  },
  data(){
    return{
      showAndHide : true,
      isVisible: false,
      yearData: null,
      workId: null,
      yearfilter: [null, '2022', '2021', '2020', '2019'],

      
      workLists: [
        { 
          id: 'shinhan',
          year: '2022',
          src: require('@/assets/img/work/work_01shinhanbank_thum.png'),
          tit: '신한은행 기업뱅킹<br>비대면 채널 개편', 
          motit: '신한은행 기업뱅킹 비대면 채널 개편', 
          tech1: 'PC & Mobile Design', 
          tech2: 'Front End Develop', 
          tech3: 'HTML', 
          tech4: 'CSS',
          tech5: 'JavaScript',
          dummyData: '1'
        },
        { 
          id: 'kodata',
          year: '2022',
          src: require('@/assets/img/work/work_02kodata_thum.png'),
          tit: '한국평가데이터<br> CRETOP 구축', 
          motit: '한국평가데이터 CRETOP 구축', 
          tech1: 'VUE', 
          tech2: 'CSS', 
          tech3: 'JavaScript',
          dummyData: '2'
        },
        { 
          id: 'kbcms',
          year: '2022',
          src: require('@/assets/img/work/work_03kbcms_thum.png'),
          tit: 'KB Star <br>CMS2.0 고도화', 
          motit: 'KB Star CMS2.0 고도화', 
          tech1: 'PC Design', 
          tech2: 'Front End Develop', 
          tech3: 'HTML', 
          tech4: 'CSS',
          tech5: 'JavaScript',
          dummyData: '3'
        },
        { 
          id: 'kbcard',
          year: '2021',
          src: require('@/assets/img/work/work_04kbcard_thum.png'),
          tit: 'KB카드 <br>디지털채널 운영', 
          motit: 'KB카드 디지털채널 운영', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript',
          dummyData: '4'
        },
        { 
          id: 'kbchachacha',
          year: '2021',
          src: require('@/assets/img/work/work_05kbchachacha_thum.png'),
          tit: 'KB캐피탈 차차차 <br>마이데이터 구축', 
          motit: 'KB캐피탈 차차차 마이데이터 구축', 
          tech1: 'APP Design', 
          tech2: 'Front End Develop', 
          tech3: 'HTML', 
          tech4: 'CSS', 
          tech5: 'JavaScript',
          dummyData: '5'
        },
        { 
          id: 'hmall',
          year: '2021',
          src: require('@/assets/img/work/work_06hmall_thum.png'),
          tit: '현대 H몰 <br>웹사이트 리뉴얼', 
          motit: '현대 H몰 웹사이트 리뉴얼', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript',
          dummyData: '6'
        },
        { 
          id: 'renaultkorea',
          year: '2020',
          src: require('@/assets/img/work/work_07renaultkorea_thum.png'),
          tit: '르노캐피탈 <br>Front Office', 
          motit: '르노캐피탈 Front Office', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript',
          dummyData: '7'
        },
        { 
          id: 'happypoint',
          year: '2020',
          src: require('@/assets/img/work/work_08happypoint_thum.png'),
          tit: '해피포인트 <br>웹사이트 리뉴얼', 
          motit: '해피포인트 웹사이트 리뉴얼', 
          tech1: 'PC & Mobile Design',
          dummyData: '8'
        },
        { 
          id: 'lotteskyhill',
          year: '2020',
          src: require('@/assets/img/work/work_09lotteskyhill_thum.png'),
          tit: '롯데스카이힐 리조트 <br>웹사이트 리뉴얼', 
          motit: '롯데스카이힐 리조트 웹사이트 리뉴얼', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript',
          dummyData: '9'
        },
        { 
          id: 'aquaplanet',
          year: '2019',
          src: require('@/assets/img/work/work_10aquaplanet_thum.png'),
          tit: '한화아쿠아플라넷 <br>웹사이트 리뉴얼', 
          motit: '한화아쿠아플라넷 웹사이트 리뉴얼', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript',
          dummyData: '10'
        },
        { 
          id: 'nkglobal',
          year: '2019',
          src: require('@/assets/img/work/work_11nkglobal_thum.png'),
          tit: 'NH Global <br>베트남뱅킹 구축', 
          motit: 'NH Global 베트남뱅킹 구축', 
          tech1: 'PC & Mobile Design', 
          tech2: 'Front End Develop', 
          tech3: 'HTML', 
          tech4: 'CSS',
          tech5: 'JavaScript',
          dummyData: '11'
        },
        { 
          id: 'scbank',
          year: '2019',
          src: require('@/assets/img/work/work_12scbank_thum.png'),
          tit: 'SC제일은행 <br>하이브리드앱 개발', 
          motit: 'SC제일은행 하이브리드앱 개발', 
          tech1: 'Front End Develop', 
          tech2: 'HTML', 
          tech3: 'CSS', 
          tech4: 'JavaScript',
          dummyData: '12'
        }
      ],
    }
  },
  mounted(){
  },
  computed: {
    filterLists() {
      if (this.yearData === null) {
        return this.workLists
      } else {
        return this.workLists.filter(item => item.year === this.yearData).map(item => {
          /**
           * filterChangeYear(year) 에서 재배열하게되도 기존랜더링이 남는 현상
           * :key="work.dummyData" 의 고유키값을 변동을 줘서 새로랜더링되게끔 map 사용
           */
          const newItem = {
            ...item,
            dummyData: item.dummyData + '_' + item.id
          }
          return newItem
        })
      }
    }
  },
  methods: {
    filterChangeYear(year) {
      // 리스트 재배열
      this.yearData = year
    },
    //  클릭시 openPopup
    openPopup(props) {
      this.workId = props
      this.isVisible = true
      document.body.classList.add('scroll-hidden-y')
    },
    
    // detailPop.vue에서 event emit
    closePopup() {
      this.isVisible = false
      document.body.classList.remove('scroll-hidden-y')
    },
  }
}
</script>