<template>
    <div class="about container">
        <div class="video shadow">
            <video src="@/assets/reabov-from-md.mp4" controls></video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent',
}
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    justify-content: center;
    align-items: center;
}

.video {
    width: 100%;
    padding: 1.875rem;
    border-radius: 20px;

    video {
        width: 100%;
    }
}
</style>