<template>
  <v-autocomplete
    v-model="selectedValue"
    :items="items"
    :label="label"
    :placeholder="placeholder"
    :color="color"
    :variant="variant"
    :icon="icon"
    :rules="rules"
    :clearable="isClearable"
    item-title="text"
    item-value="value"
  >
    <template v-slot:no-data>
      <div class="px-4">Nenhum dado encontrado</div>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Selecione uma opção',
    },
    placeholder: {
      type: String,
      default: 'Escolha...',
    },
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    color: {
      type: String,
      default: 'primary',
    },
    variant: {
      type: String,
      default: 'filled',
    },
    icon: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
    isClearable: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      selectedValue: this.value,
    }
  },
  watch: {
    value(newValue) {
      this.selectedValue = newValue
    },
    selectedValue(newValue) {
      this.$emit('update:value', newValue)
    }
  }
}
</script>
