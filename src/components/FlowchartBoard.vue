<template>
  <div>
    <TreeFolder :folder="tree"/>
  </div>
</template>

<script>
import TreeFolder from '@/components/TreeFolder.vue';

export default {
  name: 'FlowchartBoard',
  data() {
    return {
      tree: {
        id: '1a',
        name: 'My Computer',
        children: [
          {
            id: '1b',
            name: 'Documents',
            children: [
              {
                id: '1c',
                name: 'Personal documents',
              },
              {
                id: '2c',
                name: 'Work documents',
              },
              {
                id: '3c',
                name: 'Documents for study',
              },
            ],
          },
          {
            id: '2b',
            name: 'Images',
            children: [
              {
                id: '4c',
                name: 'Personal images',
              },
              {
                id: '5c',
                name: 'Work images',
              },
              {
                id: '6c',
                name: 'Images for study',
              },
            ],
          },
          {
            id: '3b',
            name: 'Musics',
            children: [
              {
                id: '7c',
                name: 'Personal musics',
              },
              {
                id: '8c',
                name: 'Work musics',
              },
              {
                id: '9c',
                name: 'Musics for study',
              },
            ],
          },
          {
            id: '4b',
            name: 'Videos',
            children: [
              {
                id: '10c',
                name: 'Personal videos',
              },
              {
                id: '11c',
                name: 'Work videos',
              },
              {
                id: '12c',
                name: 'Videos for study',
              },
            ],
          },
        ],
      },
    };
  },
  components: {
    TreeFolder,
  },
};
</script>

<style lang="scss" scoped></style>
