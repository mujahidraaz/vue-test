<template>
<div>
  <b-container>
    <div v-for="card in SingleCard" :key="card" cols="3">
      <h2><b>Single Card1:</b> {{card.membership}}</h2>
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
              <li><b>First Name: </b> {{card.lname}}</li>
              <li><b>Card Number: </b> {{card.card_number}}</li>
            </ul>
            {{card.description}}
          </b-card-text>
        </b-card>
      </div>
    </div>
  </b-container>
</div>
</template>

<script>
export default {
  name: "SingleCard",
  data() {
    return {
      SingleCard:'',
      p1: this.$route.query.p1,

    }
  },
  methods:{
    DisplaySingleCard() {
       let filerArray = JSON.parse(localStorage.getItem('table'))
       this.SingleCard = filerArray.filter((res)=>{if(res.card_number==this.p1){return res}});

    }
  },
  mounted() {
    this.DisplaySingleCard()
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
h2 {
  text-transform: capitalize;
}
</style>