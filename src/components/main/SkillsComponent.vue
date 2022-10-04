<template>
    <div class="skills container">
        <!-- big text -->
        <div class="skill-item">
            <span class="big-text">Graphic Design</span>
        </div>
        <div class="skill-item">
            <span class="big-text">Motion Design</span>
        </div>
        <div class="skill-item">
            <span class="big-text">UI/UX Design</span>
        </div>
        <div class="skill-item">
            <span class="big-text">Jewerly Design</span>
        </div>
        <!-- small text -->
        <div class="skill-item">
            <span class="small-text">Portfolio</span>
        </div>
        <div class="skill-item">
            <span class="small-text">Logo</span>
        </div>
        <div class="skill-item">
            <span class="small-text">Brending</span>
        </div>
        <div class="skill-item">
            <span class="small-text">2D animation x 3D animation</span>
        </div>
        <!-- gif -->
        <div class="skill-item block">
            <img src="" alt="">
        </div>
        <div class="skill-item block">
            <img src="" alt="">
        </div>
        <div class="skill-item block">
            <img src="" alt="">
        </div>
        <div class="skill-item block">
            <img src="" alt="">
        </div>
        <div class="skill-item block">
            <img src="" alt="">
        </div>
        <div class="skill-item block">
            <img src="" alt="">
        </div>
        <div class="skill-item block">
            <img src="" alt="">
        </div>
        <div class="skill-item block">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillsComponent',
}
</script>

<style lang="scss" scoped>
.skills {
    width: 100%;
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
    height: 900px;

    .big-text {
        font-size: 5.75rem;
        font-weight: 600;
        color: #fff;
        position: relative;
        z-index: 1;
    }

    .small-text {
        font-size: 1.25rem;
        color: #fff;
        font-weight: 600;
        position: relative;
        z-index: 1;
    }

    .skill-item {
        position: absolute;

        &:nth-child(1) {
            top: 30px;
            left: 7%;
        }

        &:nth-child(2) {
            top: 25%;
            left: 7%;
        }

        &:nth-child(3) {
            top: 44%;
            left: 21%;
        }

        &:nth-child(4) {
            top: 60%;
            left: 10%;
        }

        &:nth-child(5) {
            top: 3%;
            left: 17%;
        }

        &:nth-child(6) {
            top: 17%;
            left: 22%;
        }

        &:nth-child(7) {
            top: 17%;
            right: 22%;
        }

        &:nth-child(8) {
            top: 37%;
            left: 22%;
        }

        &:nth-child(9) {
            top: 14%;
            left: 0;
            width: 130px;
            height: 70px;
        }

        &:nth-child(10) {
            top: 14%;
            left: 50%;
            width: 130px;
            height: 70px;
        }

        &:nth-child(11) {
            top: 0;
            right: 5%;
            width: 150px;
            height: 80px;
        }

        &:nth-child(12) {
            top: 27%;
            right: 5%;
            width: 150px;
            height: 80px;
        }

        &:nth-child(13) {
            top: 36%;
            right: 0;
            width: 150px;
            height: 80px;
        }

        &:nth-child(14) {
            top: 43%;
            left: 0;
            width: 150px;
            height: 80px;
        }

        &:nth-child(15) {
            top: 52%;
            left: 5%;
            width: 150px;
            height: 80px;
        }

        &:nth-child(16) {
            top: 53%;
            right: 10%;
            width: 130px;
            height: 70px;
        }
    }

    .block {
        width: 150px;
        height: 80px;
        background-color: #000;
    }
}

</style>