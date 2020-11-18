<template>
  <ul>
    <li v-for="child in children" :key="child.id">
      <TreeFolder v-if="child.children" :folder="child" />
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
import TreeFolder from '@/components/TreeFolder.vue';

export default {
  name: 'TreeFolderContent',
  props: {
    children: {
      type: Array,
      required: true,
    },
  },
  components: {
    TreeFolder,
  },
};
</script>

<style lang="scss" scoped>
.board {
  background: #eee;
  border: 1px solid #222;
  height: calc(100vh - 6rem);
  width: 100%;
  border-radius: 0.5rem;

  display: grid;
  grid-gap: 0.5rem;
  list-style: none;
  padding: 0.5rem;
  margin: 0;

  &__item {
  }
}
</style>
