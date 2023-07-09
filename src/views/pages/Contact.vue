<template>
  <div class="content-wrap company contact">
    <div class="section-area bg-black content" id="section">
      <div class="content-header">
        <div class="content-header-title">
          <h2 data-aos="fade-down" data-aos-easing="ease-in-out-back">contact</h2>
        </div>
      </div>

      <div class="content-body">
        <div class="contact-wrap">
          <div class="contact-info" data-aos="zoom-out-right" data-aos-delay="500">
            <div class="contact-info-header-text"><p>프로젝트 의뢰 및 문의사항이 있으시면<br/>언제든 메일문의가 가능합니다.</p></div>
            <div class="contact-info-email"><a :href="mailTo"><strong>{{mailAdr}}</strong></a></div>
            <div class="contact-info-list">
              <ul>
                <li>
                  <span class="contact-info-list-item-title">주소</span>
                  <span class="contact-info-list-item-text">서울특별시 금천구 디지털로 121 에이스가산타워 12층 1207호</span>
                </li>
                <li>
                  <span class="contact-info-list-item-title">핸드폰</span>
                  <span class="contact-info-list-item-text">010-4788-7168</span>
                </li>
                <li>
                  <span class="contact-info-list-item-title">전화</span>
                  <span class="contact-info-list-item-text">02-6953-7168</span>
                </li>
                <li>
                  <span class="contact-info-list-item-title">팩스</span>
                  <span class="contact-info-list-item-text">02-6964-7399</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="contact-map" data-aos="zoom-out-left" data-aos-delay="500">
            <div class="map sample" style="">
              <img src="@/assets/img/contact/img_office_map.png" alt="map">
            </div>
          </div>
          <div class="contact-info-footer" data-aos="zoom-out-up" data-aos-delay="500" data-aos-offset="0">
            <button class="text-button" @click="toMapUrl"><span v-html="mapLink"></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  inject: ['AOS'],
  components: {
  },
  props: {
  },
  setup() {
    return{
      pageClass: ['company','contact']
    }
  },
  data(){
    return{
      // this.AOS.refresh()가 undefined 라서 데이터바인딩으로 재랜더링하여 aos refresh 줌
      mailTo : 'mailto:sh1117.lee@gmail.com? subkect=회사홈페이지에서 보내는 메일입니다.',
      mailAdr: 'sh1117.lee@gmail.com',
      mapLink: 'View Map',
    }
  },
  mounted(){
  },
  methods: {
    toMapUrl() {
      const url = "http://kko.to/2hv4Em93dy"
      window.location.href = url
      // 새창열기
      // window.open(url, "_blank")
    },
  },
}
</script>