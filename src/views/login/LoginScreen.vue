<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <TextInput
          label="Pesquisar"
          placeholder="Digite para buscar"
          icon="mdi-magnify"
          iconPosition="left"
          backgroundColor="#f0f0f0"
          variant="outlined"
          v-model="busca"
          :loading="salvando"
          :disabled="salvando"
        />
    
        <TextInput
          label="Email"
          placeholder="Digite seu email"
          icon="mdi-email"
          iconPosition="right"
          variant="filled"
          backgroundColor="#e0f7fa"
          v-model="text"
          :loading="salvando"
          :disabled="salvando"
        />
      </v-col>
      <v-col cols="12" md="6">
        <TheButton
          icon="mdi-check"
          iconPosition="left"
          variant="outlined"
          color="white"
          backgroundColor="green"
          size="large"
          @click="handleClick"
          :loading="salvando"
          :disabled="salvando"
        >
          Aprovar
        </TheButton>

        <TheButton
          icon="mdi-close"
          iconPosition="right"
          variant="text"
          color="red"
          backgroundColor="#fff"
          size="small"
          @click="handleCancel"
        >
          Cancelar
        </TheButton>
      </v-col>
      <v-col cols="12" md="6">
        <TheButton @click="showSnackbar">
          Snackbar
        </TheButton>
        <SnackBar :snackbar="snackbarComp" />
      </v-col>
      <v-col cols="12" md="6">
        <TheButton @click="showAlertComp">
          Alert
        </TheButton>
        <Alert
          :message="alertComp.alertMessage"
          :type="alertComp.alertType"
          :icon="alertComp.alertIcon"
          :color="alertComp.alertColor"
          v-model="alertComp.showAlert"
          :timeout="3000"
        />
      </v-col>
      <v-col cols="12" md="6">
        <TextSelect
          v-model="select"
          :label="'Escolha sua opção'"
          :items="optionsSelect"
          :color="'green'"
          :variant="'outlined'"
          :rules="[v => !!v || 'Este campo é obrigatório']"
          :isClearable="true"
          :loading="salvando"
          :disabled="salvando"
        />
      </v-col>
      <v-col cols="12" md="6">
        <TextAutocomplete
          v-model="autocomplete"
          :label="'Escolha sua opção'"
          :items="optionsSelect"
          :color="'green'"
          :variant="'outlined'"
          :rules="[v => !!v || 'Este campo é obrigatório']"
          :isClearable="true"
          :loading="salvando"
          :disabled="salvando"
        />
      </v-col>
      <v-col cols="12" md="6">
        <DatePicker
          v-model="date"
          backgroundColor="#f0f0f0"
          variant="outlined"
          :startDate="initialDate"
          label="Selecione uma data"
          placeholder="dd/mm/yyyy"
          :rules="[v => !!v || 'Este campo é obrigatório']"
          :disabled="salvando"
          :loading="salvando"
        />
      </v-col>
      <v-col cols="12" md="6">
        <DatePeriod
          :disabled="salvando"
          v-model="selectedDates"
          label="Filtre por um Período"
        />
        <p>Datas Selecionadas: {{ selectedDates }}</p>
      </v-col>
      <v-col cols="12" md="6">
        <MaskedTextInput
          mask="###.###.###-##"
          label="CPF"
          placeholder="Input de máscaras"
          backgroundColor="#f0f0f0"
          variant="outlined"
          v-model="inputMascaras"
          :loading="salvando"
          :disabled="salvando"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
  // import bg from '@/assets/images/bg-login.jpg'
</script>
<script>
import TextInput from '@/components/inputs/TextInput.vue'
import TextSelect from '@/components/inputs/TextSelect.vue'
import TextAutocomplete from '@/components/inputs/TextAutocomplete.vue'
import TheButton from '@/components/TheButton.vue'
import SnackBar from '@/components/SnackBar.vue'
import Alert from '@/components/Alert.vue'
import DatePicker from '@/components/inputs/DatePicker.vue'
import DatePeriod from '@/components/inputs/DatePeriod.vue'
import MaskedTextInput from '@/components/inputs/MaskedTextInput.vue'
import moment from 'moment'
export default {
  components: {
    TextInput,
    TextSelect,
    TextAutocomplete,
    TheButton,
    SnackBar,
    Alert,
    DatePicker,
    DatePeriod,
    MaskedTextInput
  },
  data() {
    return {
      text: '',
      busca: '',
      snackbarComp: {},
      alertComp: {},
      salvando: false,
      select: null,
      autocomplete: null,
      initialDate: moment(new Date()).format('DD/MM/YYYY'),
      date: '',
      inputMascaras: '',
      optionsSelect: [
        { text: 'Opção 1', value: 1 },
        { text: 'Opção 2', value: 2 },
        { text: 'Opção 3', value: 3 },
      ],
      selectedDates: {
        start: moment(new Date()).startOf('month').format('YYYY-MM-DD'),
        end: moment(new Date()).endOf('month').format('YYYY-MM-DD')
      },
    }
  },
  methods: {
    handleClick () {
      this.salvando = true
    },
    handleCancel() {
      this.salvando = false
    },
    showSnackbar () {
      this.snackbarComp = {
        show: true,
        text: 'Sucesso!!',
        time: 5000,
        color: 'success'
      }
    },
    showAlertComp () {
      this.alertComp = {
        alertMessage: 'Operação realizada com sucesso!',
        alertType: 'success',
        alertColor: 'green',
        alertIcon: 'mdi-check-circle',
        showAlert: true
      }
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
@use '@/styles/main' as c;
</style>
