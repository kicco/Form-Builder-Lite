<template lang="pug">
a.button(@click="edit(value)")
	span.icon.is-xsmall {{ value }} <i class="fas fa-edit"></i>
</template>

<script>
export default {
	name: 'edit',
	props: ['value', 'record'],
	computed: {
		classlist() {
			return 'fa-edit'
		}
	},
	methods: {
		edit(id) {
			this.$store.dispatch('SINGLE', id)
		}
	}
}
</script>
