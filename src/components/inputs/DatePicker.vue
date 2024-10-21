<template>
  <div>
    <div class="d-none">
      <input v-maska data-maska="##/##/####" v-model="calendar">
    </div>
    <v-menu
      v-model="showCalendar"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ props }">
        <v-text-field
          v-bind="props"
          v-model="calendar"
          :label="label"
          :placeholder="placeholder"
          :rules="rules"
          :variant="variant"
          :disabled="disabled"
          :loading="loading"
          :background-color="backgroundColor"
          :prepend-inner-icon="icon && iconPosition === 'left' ? icon : ''"
          :append-inner-icon="icon && iconPosition === 'right' ? icon : ''"
        ></v-text-field>
      </template>
      <v-list>
        <VueCtkDateTimePicker
          :inline="true"
          v-model="calendar"
          locale="pt-BR"
          color="#000000"
          :no-header="true"
          :only-date="true"
          class="date-picker"
          :formatted="'L'"
          :format="'DD/MM/YYYY'"
          label="Data"
          :no-button="true"
          :noClearButton="true"
        />
        <div class="text-right mt-2 pr-2">
          <v-btn rounded size="small" @click="showCalendar = false" color="success">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup>
  import { vMaska } from "maska"
</script>
<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
export default {
  components: {
    VueCtkDateTimePicker
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    startDate: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
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
      default: 'mdi-calendar'
    },
    iconPosition: {
      type: String,
      default: 'right',
      validator: (value) => ['left', 'right'].includes(value)
    },
    backgroundColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showCalendar: false,
      calendar: this.startDate || this.modelValue || null
    }
  },
  watch: {
    calendar(newValue) {
      this.$emit('update:modelValue', newValue);
      if (newValue && this.showCalendar) {
        this.showCalendar = false;
      }
    },
    modelValue(newValue) {
      this.calendar = newValue;
    }
  }
}
</script>
