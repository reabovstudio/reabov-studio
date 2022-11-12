<template>
  <div class="about container">
    <div class="about-banner">
      <div class="lottie">
        <lottie :options="defaultOptions2"/>
      </div>
      <div class="about-img">
        <img src="@/assets/author.png" alt="author">
      </div>
    </div>
    <div class="about-info shadow">
      <div class="about-description">
        <p>
          Hey! My name is Alexandru and I am a Designer :)
          After graduating Fine Arts Studies 6 years ago, I have started my own journey as a Designer.
          From jewelry design I gradually headed towards graphic design and later towards Motion Graphic
          Design, Animations, Sound Design, Digital Art and Content Creation.
          I love what I am doing! Each project is a special one for me and in the creative process I try to live the
          emotions that I want to express to the audience. People are looking for emotions and are conquered by
          them every day. I believe that “Art is everything”, as every moment in life has its own emotions like
          every brand or product, that I try to express it through imagination and creativity.
          My name is Alexandru and I am a Designer ;)
        </p>
      </div>
      <div class="about-me">
        <div class="lottie">
          <lottie :options="defaultOptions"/>
        </div>
        <div class="about-video">
          <video src="@/assets/reabov-from-md.mp4" controls></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import about from "@/assets/lottie/about.json";
import designer from "@/assets/lottie/designer.json";

export default {
  name: 'AboutComponent',
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {animationData: about, loop: true},
      defaultOptions2: {animationData: designer, loop: true}
    }
  }
}
</script>
