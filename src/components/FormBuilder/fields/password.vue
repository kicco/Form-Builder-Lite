<template lang="pug">
.column.is-6
	.field
		label.label {{ field.label }}
		p.control
			button.button(type="checkbox", @click="edit = !edit") Change
			div(v-if="edit")

				.field
					label.label Password
					p.control.has-icons-right
						input.input(:type="type", v-model="password", placeholder="Password")
						span.icon.is-small.is-right(style="pointer-events: initial")
							i.fa.fa-eye(@click="toggleType")
				.field

					label.label Confirm Password
					p.control.has-icons-right
						input.input(:type="type", v-model="confirm_password", placeholder="Repeat Password", @keyup="check")
						span.icon.is-small.is-right(style="pointer-events: initial")
							i.fa.fa-eye(@click="toggleType")
						p.help {{ field.help }}
						.content(v-if="this.errors")
							ul(style="list-style-type: none")
								li.has-text-danger(v-for="error in errors") {{ error }}
</template>

<script>
export default {
	name: 'Password',
	props: [ 'value', 'field' ],
	data:() => ({
		edit: false,
		password: undefined,
		confirm_password: undefined,
		type: 'password',
		errors: []
	}),
	methods: {
		check() {
			if (this.password !== this.confirm_password) {
				this.errors = {message: `Passwords don't match`}
			} else {
				this.errors = []
				this.$emit('input', {password: this.password, confirm_password: this.confirm_password})
			}
		},
		toggleType() {
			this.type = this.type === 'password' ? 'text' : 'password'
		}
	}
}
</script>
