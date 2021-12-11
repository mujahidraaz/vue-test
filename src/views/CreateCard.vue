<template>
  <div>
    <b-container>
      <h2>Add New Card</h2>
      <b-card>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.fname"
            placeholder="First name"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Last Name" label-for="input-3">
        <b-form-input
            id="input-3"
            v-model="form.lname"
            placeholder="Last name"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Card Number" label-for="input-3">
        <b-form-input
            id="input-3"
            v-model="form.card_number"
            placeholder="Card Number"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Membership Tier:" label-for="input-4">
        <b-form-select
            id="input-4"
            v-model="form.membership"
            :options="membership"
            required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Description" label-for="input-4">
        <b-form-textarea v-model="form.description"
            id="textarea-default"
            placeholder="Description..."
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="success">Submit</b-button>
    </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        fname: '',
        lname: '',
        membership: null,
        description:'',
        card_number:''
      },
      membership: [{ text: 'Select One', value: null }, 'Gold', 'silver', 'Platinum values only)'],
      show: true,
      table: [
        { fname: 'Jose', lname: 'Rizal', membership: 'gold', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', card_number: 876867867 },
        { fname: 'Juan', lname: 'Luna', membership: 'silver', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', card_number: 432423423 },
        { fname: 'james ', lname: 'Rizal', membership: 'bronze', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', card_number: 7657567567 },
        { fname: 'jonson', lname: 'Rizal', membership: 'gold', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', card_number: 534543534543 },
      ]
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      // this.$router.push('display-cards')
      window.location.href = "display-cards"
       localStorage.setItem("table",  JSON.stringify(this.table));
      let table = localStorage.getItem("table" );
      if( table === undefined || !table ) {
         table = [];
      }
      this.table.push(this.form);
      localStorage.setItem('table', JSON.stringify(this.table));
      this.tabel.push()
    },
  },
}
</script>

<style>
.card {
  max-width: 500px;
  margin: auto;
  text-align: left;
}
.card-body input {
  margin-bottom: 18px;
}
select {
  margin-bottom: 19px;
}
textarea {
  margin-bottom: 18px;
}
button.btn.btn-success {
  margin-right: 11px;
}
body {
  background-color: #e9ecef;
}
</style>