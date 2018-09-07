<template lang="pug">
.column.is-6
  .field
    label.label {{ field.label }}
      p.control
      input.input(type="text", @input="$emit('input', $event.target.value)", :value="value", :disabled="field.readonly")
    p.help {{ field.help }}
</template>

<script>
export default {
  name: 'varchar',
  props: [ 'value', 'field' ]
}
</script>
