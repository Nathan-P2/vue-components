export default {
    name: "DolarHoje",
    data() {
        return {
            dolarHoje: 0
        }
    },
    template: `<p>Dolar Hoje: {{dolarHoje}}</p>`,
    methods: {
        fetchDolar() {
            fetch("https://api.exchangeratesapi.io/latest?base=USD")
                .then(r => r.json())
                .then(r => {
                    this.dolarHoje = r.rates.BRL.toFixed(2);
                })
        }
    },
    created() {
        this.fetchDolar();
    }
}