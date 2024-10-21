<template>
  <div>
    <div class="d-none">
      <money3 v-model="internalValue" v-bind="configForMoney"></money3>
    </div>
    <v-text-field
      v-model="internalValue"
      :label="label"
      :placeholder="placeholder"
      :type="type"
      :rules="rules"
      prefix="R$"
      :variant="variant"
      :disabled="disabled"
      :loading="loading"
      :prepend-inner-icon="icon && iconPosition === 'left' ? icon : ''"
      :append-inner-icon="icon && iconPosition === 'right' ? icon : ''"
      :background-color="backgroundColor"
    />
  </div>
</template>

<script>
import { Money3Component } from 'v-money3'
export default {
  components: {
    money3: Money3Component,
  },
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
    }
  },
  data() {
    return {
      configForMoney: {
        masked: true,
        thousands: '.',
        decimal: ',',
        precision: 2,
        disableNegative: false,
        min: null,
        max: null,
        minimumNumberOfCharacters: 0,
        shouldRound: true,
        focusOnRight: false,
      },
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