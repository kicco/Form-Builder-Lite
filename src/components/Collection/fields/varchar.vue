<template lang="pug">
span(:title="value") {{ value }}
</template>

<script>
export default {
  name: 'varchar',
  props: ['value']
}
</script>
