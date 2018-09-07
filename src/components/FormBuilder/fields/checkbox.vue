<template lang="pug">
.column.is-6
	.field
		p.control
			label.checkbox
				input.checkbox(type="checkbox", :checked="checked", @change="$emit('input', checked)", v-model="checked")
				|  {{ field.label }}
</template>

<script>
import _ from 'lodash'

export default {
	name: 'checkbox',
	props: ['field', 'value'],
	data: () => ({checked: false}),
	mounted () {
		this.checked = this.value || false
	},
	watch: {
		value (nv, ov) {
			if (_.isUndefined(ov)) {
				this.checked = nv
			}
		}
	}
}
</script>
