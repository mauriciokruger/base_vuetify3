<template>
  <VueCtkDateTimePicker
    v-model="internalValue"
    class="date-picker"
    :locale="locale"
    :no-header="noHeader"
    :no-value-to-custom-elem="noValueToCustomElem"
    :overlay="overlay"
    :range="range"
    :input-size="inputSize"
    :formatted="formatted"
    :format="format"
    color="#000000"
    :custom-shortcuts="customShortcuts"
    :no-button="noButton"
    :noClearButton="noClearButton"
    :auto-close="autoClose"
    :no-label="noLabel"
    :label="label"
    :disabled="disabled"
    @input="onDateSelected"
  />
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
import moment from 'moment/min/moment-with-locales'

export default {
  components: {
    VueCtkDateTimePicker
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        start: moment(new Date()).startOf('month').format('YYYY-MM-DD'),
        end: moment(new Date()).endOf('month').format('YYYY-MM-DD')
      })
    },
    label: {
      type: String,
      default: 'Selecione um Período'
    },
    locale: {
      type: String,
      default: 'pt-BR'
    },
    noHeader: {
      type: Boolean,
      default: true
    },
    noValueToCustomElem: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    range: {
      type: Boolean,
      default: true
    },
    inputSize: {
      type: String,
      default: 'md'
    },
    formatted: {
      type: String,
      default: 'L'
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    noButton: {
      type: Boolean,
      default: true
    },
    noClearButton: {
      type: Boolean,
      default: true
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    noLabel: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customShortcuts: {
      type: Array,
      default: () => [
        { key: 'thisDay', label: 'Hoje', value: 'day' },
        { key: 'last7Days', label: 'Últimos 7 dias', value: 7 },
        { key: 'last15Days', label: 'Últimos 15 dias', value: 15 },
        { key: 'last30Days', label: 'Últimos 30 dias', value: 30 },
        { key: 'thisWeek', label: 'Esta semana', value: 'week' },
        { key: 'thisMonth', label: 'Este mês', value: 'month' },
        { key: 'lastMonth', label: 'Mês passado', value: '-month' },
        { key: 'thisYear', label: 'Este ano', value: 'year' }
      ]
    }
  },
  data() {
    return {
      internalValue: this.modelValue
    }
  },
  watch: {
    modelValue(newVal) {
      this.internalValue = newVal
    }
  },
  methods: {
    onDateSelected(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style lang="scss">

</style>