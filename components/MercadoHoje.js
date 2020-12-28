import DolarHoje from "./DolarHoje.js";

export default {
    name: "MercadoHoje",
    data() {
        return {
            marketCap: 0
        }
    },
    components: {
        DolarHoje
    },
    template: 
        `<div> 
            <p> Valor da Apple: {{marketCap}} </p>
            <dolar-hoje></dolar-hoje>
        </div>`,
    methods: {
        fetchMercado() {
            fetch("https://api.origamid.dev/stock/aapl/quote")
                .then(r => r.json())
                .then(r => {
                    this.marketCap = r.marketCap;
                })
        }
    },
    created() {
        this.fetchMercado();
    }
}