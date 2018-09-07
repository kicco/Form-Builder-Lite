<template lang="pug">
#app.container
	h1.title.is-3 Form Builder Lite
	.columns
		.column.is-6
			button.button(@click="getCollection") <span v-if="!collection.length">Load &nbsp;</span> Collection

	//- There would be an actual router here

	//- Collection
	.columns(v-if="mode === 'COLLECTION'")
		.column.is-6
			Collection(:collection="collection", :schema="schema.filter(f => f.list)")

	//- Single Element
	.columns(v-if="mode === 'SINGLE'")
		.column.is-6
			FormBuilder(:model="model", :schema="schema.filter(f => f.edit)", @input="set")

</template>

<script>
import Collection from '@/components/Collection/Collection'
import FormBuilder from '@/components/FormBuilder/FormBuilder'

export default {
	name: 'app',
	components: { Collection, FormBuilder },
	data:() => ({}),
	methods: {
		getCollection () {
			this.$store.dispatch('COLLECTION')
		},
		set (data) {
			this.$store.dispatch('SET', data)
		}
	},
	computed: {
		model: function() {
			return this.$store.getters.model
		},
		collection: function() {
			return this.$store.getters.collection
		},
		schema: function() {
			return this.$store.getters.schema
		},
		mode: function() {
			return this.$store.getters.mode
		}
	}
}
</script>

<style lang="sass">
@import 'bulma'
</style>

