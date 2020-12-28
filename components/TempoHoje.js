export default {
    name: "TempoHoje",
    data() {
        return {
            tempoHoje: 0
        }
    },
    template: `<p>Temperatura Hoje: {{tempoHoje}}</p>`,
    methods: {
      fetchTempo() {
        fetch("https://www.metaweather.com/api/location/455825/")
            .then(r => r.json())
            .then(r => {
                this.tempoHoje = r.consolidated_weather[0].max_temp;
            })
      }  
    },
    created() {
        this.fetchTempo();
    }
}