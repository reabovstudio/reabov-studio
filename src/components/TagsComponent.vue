<template>
  <div class="tags">
    <span class="tag-item" v-for="tag in tags" :key="tag.id">
      <a href="#">{{ tag.name }}</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TagsComponent',
  data() {
    return {
      tags: [
        {
          id: 1,
          name: '#identities'
        },
        {
          id: 2,
          name: '#logo'
        },
        {
          id: 3,
          name: '#motion graphics'
        },
        {
          id: 4,
          name: '#animation'
        },
        {
          id: 5,
          name: '#websites'
        },
        {
          id: 6,
          name: '#jewelrydesign'
        },
        {
          id: 7,
          name: '#product design'
        },
        {
          id: 8,
          name: '#amazon listing'
        },
        {
          id: 9,
          name: '#amazon listing'
        }
      ]
    }
  }
}
</script>