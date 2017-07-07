const one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One'
  },
  methods: {

  },
  computed: {
    greet: function() {
      return 'Hello App One'
    }
  }
});

const two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue App Two'
  },
  methods: {
    changeTitle: function() {
      one.title = "Title Changed"
    }
  },
  computed: {
    greet: function() {
      return 'Hello App Two'
    }
  }
});

two.title = "Changed from outside";
