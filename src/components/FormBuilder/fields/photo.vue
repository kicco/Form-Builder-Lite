<template lang="pug">
.column.is-6.is-pulled-right
	img.dropzone(:src="src", ref="dropzone", width="320px")
</template>

<script>
import Dropzone from 'dropzone'
import swal from 'sweetalert'

Dropzone.autoDiscover = false

export default {
	name: 'photo',
	props: [ 'value', 'field' ],
	data: () => ({
		src: undefined,
		dropzone: undefined,
		url: undefined
	}),
	watch: {
		value (nv) {
			this.src = nv
		}
	},
	mounted() {
		this.src = this.value
		this.dropzone = new Dropzone(this.$refs.dropzone, {
			url: 'https://example.com?media=photo',
			autoProcessQueue: true,
			parallelUploads: 10,
			success: this.uploaded,
			error: (file, errorMessage) => {
				swal('Error', errorMessage.error || 'Failed while uploading the image(s)', 'error')
			}
		})
	},
	methods: {
		uploaded (response) {
			this.$emit('input', JSON.parse(response.xhr.response).data)
			swal('Success', 'File uploaded.', 'success')
		},
		unlink () {
			this.src = 'https://example.com/assets/placeholder_logo.png'
			this.$emit('input', this.src)
		}
	},
	computed: {
		model () {
			return this.$store.getters.model
		}
	}
}
</script>

<style scoped>
.container {
	float: left;
	position: relative;
	right: -100%;
	height: 320px;
	width: 600px;
	padding: 1rem;
}
</style>
