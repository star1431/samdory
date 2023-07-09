<template>
  <div :class="['content-wrap', pageClass]">
    <div class="section-area bg-black">
      <div class="inner">
        <section class="contents-area">
          <h2 data-aos="fade-down" data-aos-easing="ease-in-out-back" class="title-main">ABOUT</h2>
          <ul class="about-wrap">
            <li>
              <div class="about-txt-wrap">
                <p class="text-medium" data-aos="zoom-out-right" data-aos-delay="500">We Are</p>
                <h3 class="title-sub-main" data-aos="zoom-out-right" data-aos-delay="500">새로운 웹 세상을 열어주는 <br>웹 퍼블리싱 UI스크립트 전문기업</h3>
                <p class="text-default" data-aos="zoom-out-right" data-aos-delay="500" v-html="vHtmlText">
                  
                </p>
                <p class="text-default mobile-type" data-aos="zoom-out-right" data-aos-delay="500">
                  삼도리는 웹표준화, 웹접근성, 반응형웹은 물론이고 인터랙티브하고 <br>동적인 웹페이지 구현에 끊임없이 연구하고 개발하는 웹퍼블리싱, UI스크립트 전문기업입니다.
                </p>
                <p class="text-default mobile-type" data-aos="zoom-out-right" data-aos-delay="500">
                  브라우저의 발달과 Javascript의 발달로 동적인 화면과 인터랙티브한 디자인을 통해 사용자에게 흥미와 재미를 줌으로써 사용자의 참여를 유도하고 정보를 효과적으로 전달합니다.
                </p>
              </div>
            </li>
            <li>
              <div class="about-txt-wrap" data-aos="zoom-out-left" data-aos-offset="150">
                <p class="text-medium">What We Do</p>
                <h3 class="title-sub-main">
                  UI/UX Design <br>Reaction Type <br>Front End Develop <br>UI Script <br>Web Accessibility Consulting <br>User Experience
                </h3>
              </div>
            </li>
          </ul>
        </section>
        <section class="contents-area">
          <h2 class="title-main" data-aos="zoom-out-up" v-html="vHtmlText2"></h2>
          <h2 class="title-main" data-aos="zoom-out-up"  v-html="vHtmlText3"></h2>
          <div class="part-wrap" data-aos="zoom-out-up">
            <ul class="part-list">
              <li>
                <strong class="title-sub-sub" v-html="vHtmlText4"></strong>
                <p class="text-default">
                  영업팀<br>마케팅팀
                </p>
              </li>
              <li>
                <strong class="title-sub-sub">기술개발부</strong>
                <p class="text-default">
                  디자인팀 <br>마크업팀 <br>이넡렉션팀 <br>SI팀
                </p>
              </li>
              <li>
                <strong class="title-sub-sub">경영관리부</strong>
                <p class="text-default">
                  총무팀 <br>회계팀
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  inject: ['AOS'],
  components: {
  },
  props: {
  },
  setup() {
    return{
      pageClass: ['company','about']
    }
  },
  data(){
    return{
      // this.AOS.refresh()가 undefined 라서 데이터바인딩으로 재랜더링하여 aos refresh 줌
      vHtmlText: '삼도리는 웹표준화, 웹접근성, 반응형웹은 물론이고 인터랙티브하고 <br>동적인 웹페이지 구현에 끊임없이 연구하고 개발하는 웹퍼블리싱, UI스크립트 전문기업입니다.<br>브라우저의 발달과 Javascript의 발달로 동적인 화면과 인터랙티브한 디자인을 통해 <br>사용자에게 흥미와 재미를 줌으로써 사용자의 참여를 유도하고 정보를 효과적으로 전달합니다.',
      vHtmlText2: 'NEW THING',
      vHtmlText3: '<span>FIND</span>RESEARCH',
      vHtmlText4: '전략지원부',

    }
  },
  mounted(){
  },
  updated(){
  },
}
</script>