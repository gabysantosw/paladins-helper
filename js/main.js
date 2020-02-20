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
      console.log('isSelectionComplete');
      if (this.selectedChampions.length === 5) return true;
      return false;
    }
  },
  methods: {
    handleType(position) {
      console.log('handleType');
      if (position !== this.currentType) {
        this.currentType = position;
        return true;
      }
      return false;
    },
    handleSelection(id) {
      console.log('handleSelection');
      if (this.selectedChampions.includes(id)) {
        // unselect
        this.selectedChampions.splice(this.selectedChampions.indexOf(id), 1)
      } else {
        // select
        this.selectedChampions.push(id);
      }
    },
    reset() {
      console.log('reset');
      currentType = null;
      selectedChampions = [];
    }
  }
});