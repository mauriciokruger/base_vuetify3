<template>
  <v-textarea
    v-model="internalValue"
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :rules="rules"
    :variant="variant"
    :disabled="disabled"
    no-resize
    :rows="rows"
    :loading="loading"
    :prepend-inner-icon="icon && iconPosition === 'left' ? icon : ''"
    :append-inner-icon="icon && iconPosition === 'right' ? icon : ''"
    :background-color="backgroundColor"
  />
</template>

<script>
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
    rows: {
      type: Number,
      default: 3
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