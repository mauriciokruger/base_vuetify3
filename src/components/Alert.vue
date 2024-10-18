<template>
  <v-alert
    v-bind:model-value="showAlert"
    :type="type"
    :icon="icon"
    :color="color"
    border="start"
    prominent
    elevation="2"
    @update:model-value="updateVisible"
  >
    <slot>{{ message }}</slot>
  </v-alert>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Este é um alerta!',
    },
    type: {
      type: String,
      default: 'info', // Tipos: 'success', 'info', 'warning', 'error'
    },
    icon: {
      type: String,
      default: 'mdi-alert-circle-outline',
    },
    color: {
      type: String,
      default: 'primary',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 3000, // Tempo antes de o alerta desaparecer automaticamente
    },
  },
  data() {
    return {
      showAlert: this.modelValue,
    };
  },
  watch: {
    modelValue(val) {
      this.showAlert = val;
      if (val) {
        this.autoClose(); // Chama a função de fechar automaticamente se visível
      }
    },
  },
  methods: {
    updateVisible(val) {
      this.showAlert = val;
      this.$emit('update:modelValue', val); // Emite o evento para o pai
    },
    autoClose() {
      setTimeout(() => {
        this.updateVisible(false); // Fecha o alerta após o timeout
      }, this.timeout);
    },
  },
};
</script>
