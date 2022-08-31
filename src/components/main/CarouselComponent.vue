<template>
    <div class="horizontal-scroll" ref="horizontalContainer">
        <div class="scroll-item">
            <banner-component></banner-component>
        </div>
        <div class="scroll-item">
            <about-component></about-component>
        </div>
    </div>
</template>

<script>
import BannerComponent from './BannerComponent.vue';
import AboutComponent from './AboutComponent.vue';

export default {
    name: 'CarouselComponent',
    components: {
        BannerComponent,
        AboutComponent
    },
    data(){
        return {
            scrollCount: 0 
        }
    },
    computed: {
        el(){
            return this.$refs.horizontalContainer;
        },
    },
    mounted(){
        this.preparScrollItems(this.el.children); 

        window.addEventListener('resize', () => {
            this.el.style.transition = 'none';
            setTimeout(() => {
                this.preparScrollItems(this.el.children);
                this.scrollHorizontal()
            }, 100);
        });           

        document.addEventListener('wheel', (e) => {
            this.scrollCount += e.deltaY;
            this.scrollHorizontal();            
        });
    },
    methods: {
        preparScrollItems(items) {
            this.el.style.width = window.innerWidth + 'px';

            for (const item of items) {
                item.style.width = window.innerWidth + 'px';
            }
        },
        scrollHorizontal(){
            let containerWidth = this.el.scrollWidth - window.innerWidth;

            if(this.scrollCount < 0){
                this.scrollCount = 0;
            }

            if(this.scrollCount > containerWidth){
                this.scrollCount = containerWidth;
            }

            this.el.style.transform = `translateX(-${this.scrollCount}px)`;
            this.el.style.transition = '0.5s';
        }
    }
}
</script>

<style lang="scss" scoped>
.horizontal-scroll {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: visible;

    .scroll-item {
        flex: auto 0 0;
        width: 100vw;
    }
}
</style>
