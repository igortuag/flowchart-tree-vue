<template>
  <div>
    <h1>FLOWCHART TREE</h1>
    <FlowchartBoard />
  </div>
</template>

<script>
import FlowchartBoard from '@/components/FlowchartBoard.vue';

export default {
  name: 'Flowchart',
  components: {
    FlowchartBoard,
  },
};
</script>

<style lang="scss" scoped></style>
