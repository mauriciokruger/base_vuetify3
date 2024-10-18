<template>
  <v-snackbar
    v-model="show"
    :timeout="snackbar.time || defaultTimeout"
    :color="snackbar.color || defaultColor"
  >
    {{ snackbar.text || defaultText }}
    <template v-slot:actions>
      <v-btn
        :color="snackbar.color || defaultColor"
        variant="elevated"
        rounded
        size="small"
        @click="close"
      >
        {{ buttonText }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    snackbar: {
      type: Object,
      default: () => ({
        show: false,
        text: '',
        time: 3000,
        color: 'primary'
      })
    },
    buttonText: {
      type: String,
      default: 'Fechar'
    },
    defaultTimeout: {
      type: Number,
      default: 3000
    },
    defaultText: {
      type: String,
      default: 'Operação realizada com sucesso!'
    },
    defaultColor: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      show: this.snackbar.show
    }
  },
  watch: {
    snackbar: {
      handler(newVal) {
        this.show = newVal.show
      },
      deep: true
    }
  },
  methods: {
    close() {
      this.show = false
    }
  }
}
</script>
