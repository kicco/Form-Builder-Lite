<template lang="pug">
div
	span(
		v-for="field in schema",
		:is="field.type",
		:field="field",
		:model="model",
		:value="get(field.model)",
		@input="e => set(e, field.model)"
	)
</template>

<script>
import _ from 'lodash'
import fields from './fields'

export default {
	name: 'FormBuilder',
	props: ['model', 'options', 'schema'],
	components: fields,
	methods: {
		get(path) {
			return _.get(this.model, path)
		},
		set(e, path) {
			this.$emit('input', { value: e, path: path })
		}
	}
}
</script>
