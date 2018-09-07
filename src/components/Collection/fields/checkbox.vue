<template lang="pug">
input(type="checkbox", :checked="value", disabled="true")
</template>

<script>
export default {
  name: 'checkbox',
  props: ['value']
}
</script>
