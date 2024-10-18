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
        <Button
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
        </Button>

        <Button
          icon="mdi-close"
          iconPosition="right"
          variant="text"
          color="red"
          backgroundColor="#fff"
          size="small"
          @click="handleCancel"
        >
          Cancelar
        </Button>
      </v-col>
      <v-col cols="12" md="6">
        <Button @click="showSnackbar">
          Snackbar
        </Button>
        <SnackBar :snackbar="snackbarComp" />
      </v-col>
      <v-col cols="12" md="6">
        <Button @click="showAlertComp">
          Alert
        </Button>
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
    </v-row>
  </div>
</template>
<script setup>
  // import bg from '@/assets/images/bg-login.jpg'
</script>
<script>
import TextInput from '@/components/inputs/TextInput.vue'
import TextSelect from '@/components/inputs/TextSelect.vue'
import Button from '@/components/Button.vue'
import SnackBar from '@/components/SnackBar.vue'
import Alert from '@/components/Alert.vue'
export default {
  components: {
    TextInput,
    TextSelect,
    Button,
    SnackBar,
    Alert
  },
  data() {
    return {
      text: '',
      busca: '',
      snackbarComp: {},
      alertComp: {},
      salvando: false,
      select: null,
      optionsSelect: [
        { text: 'Opção 1', value: 1 },
        { text: 'Opção 2', value: 2 },
        { text: 'Opção 3', value: 3 },
      ]
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
