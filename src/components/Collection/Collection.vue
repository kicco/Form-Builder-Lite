<template lang="pug">
table.table.is-fullwidth.is-hoverable.is-responsive
	thead
		tr
			th(v-for="header, key in schema", v-if="header.list")
				.columns
					.column.is-half()
						span(v-if="header.sort", @click="toggleSorter(header)", :class="{sortable: header.sort}") {{ header.label }}
	tbody
		tr(v-for="record in collection", :key="record.id")
			td(v-for="header in schema", v-if="header.list")
				span(:is="header.type", :value="value(header.model, record)", :record="record")

</template>

<script>
import _ from 'lodash'
import fields from './fields'

export default {
	name: 'Collection',
	props: ['collection', 'schema'],
	components: fields,
	methods: {
		//- Allows for dot(.) nested matching
		value(path, record) {
			return _.get(record, path)
		}
	}
}
</script>
