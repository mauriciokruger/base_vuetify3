<template>
  <v-btn
    :variant="variant"
    :color="color"
    :size="size"
    :disabled="disabled"
    :style="{ backgroundColor: backgroundColor }"
    @click="onClick"
  >
    <v-icon v-if="icon" :left="iconPosition === 'left'" :right="iconPosition === 'right'">
      {{ icon }}
    </v-icon>
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'elevated'
    },
    color: {
      type: String,
      default: 'primary'
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: {
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
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
