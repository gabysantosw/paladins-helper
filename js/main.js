new Vue({
  el: '#app',
  created() {
    fetch(this.url)
      .then(response => response.json())
      .then(data => this.champions = data);
  },
  data: {
    champions: null,
    selectedChampions: [],
    url: './js/champions.json'
  },
  computed: {
    isSelectionComplete() {
      if (this.selectedChampions.length === 5) return true;
      return false;
    }
  },
  methods: {
    handleSelection(id) {
      if (this.selectedChampions.includes(id)) {
        // unselect
        this.selectedChampions.splice(this.selectedChampions.indexOf(id), 1)
      } else {
        // select
        this.selectedChampions.push(id);
      }
    },
    reset() {
      this.selectedChampions = [];
    }
  }
});