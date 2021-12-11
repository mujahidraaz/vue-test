<template>
<b-container>
  <h2>List All Cards</h2>
  <b-row>
    <b-col v-for="card in CardsList" :key="card" cols="3">
      <div>
        <b-card
            :title="card.membership"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
          <b-card-text>
            <ul>
              <li><b>First Name: </b> {{card.fname}}</li>
              <li><b>Last Name: </b> {{card.lname}}</li>
              <li><b>Card Number: </b> {{card.card_number}}</li>
            </ul>
            {{card.description}}
          </b-card-text>
          <b-button :href="url + '/single-card/' + '?p1=' +  card.card_number" variant="success" target="_blank">View Card</b-button>
        </b-card>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
export default {
  name: "DisplayCards",
  data() {
    return {
      CardsList:'',
      url: window.location.origin
    }
  },
  methods:{
    DisplayCards() {
       this.CardsList= JSON.parse(localStorage.getItem("table"));
    }
  },
  mounted() {
    this.DisplayCards()
  }
}
</script>

<style>
body {
  background-color: #e9ecef;
}
.card-body {
  text-align: left;
}
.card-text ul li {
  list-style: none;
  text-align: left;
}
.card-text ul {
  padding-left: 0px;
}
.card-title {
  text-transform: capitalize;
}
</style>