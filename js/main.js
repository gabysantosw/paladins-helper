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
    url: './js/champions.json',
    currentType: null
  },
  computed: {
    isSelectionComplete() {
      if (this.selectedChampions.length === 5) return true;
      return false;
    }
  },
  methods: {
    handleType(position) {
      if (position !== this.currentType) {
        this.currentType = position;
        return true;
      }
      return false;
    },
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
      currentType = null;
      selectedChampions = [];
    }
  }
});