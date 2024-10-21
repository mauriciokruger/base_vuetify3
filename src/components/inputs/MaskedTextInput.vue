<template>
  <div>
    <div class="d-none">
      <input v-maska :data-maska="mask" v-model="internalValue">
    </div>
    <v-text-field
      v-model="internalValue"
      :label="label"
      :placeholder="placeholder"
      :type="type"
      :rules="rules"
      :variant="variant"
      :disabled="disabled"
      :loading="loading"
      :prepend-inner-icon="icon && iconPosition === 'left' ? icon : ''"
      :append-inner-icon="icon && iconPosition === 'right' ? icon : ''"
      :background-color="backgroundColor"
    />
  </div>
</template>

<script setup>
  import { vMaska } from "maska"
</script>

<script>
// Máscaras padrão comentadas para fácil referência
// CPF: ###.###.###-##
// CEP: #####-###
// TELEFONE: ['(##) ####-####', '(##) #####-####']
// CNPJ: ##.###.###/####-##

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    rules: {
      type: Array,
      default: () => [],
    },
    variant: {
      type: String,
      default: 'filled'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value)
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    mask: {
      type: [String, Array],
      default: ''
    }
  },
  data() {
    return {
      internalValue: this.modelValue
    }
  },
  watch: {
    internalValue(newValue) {
      this.$emit('update:modelValue', newValue);
    },
    modelValue(newValue) {
      this.internalValue = newValue;
    }
  }
}
</script>
