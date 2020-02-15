let vm = new Vue({
    el: "#root",

    data: {
        products: []
    },
    methods: {
        add(item) {
            // console.log(item)
            item.inventory += 1
        }
    },
    //计算属性
    computed: {
        totalProducts() {
            return this.products.reduce((sum, product) => {
                console.log(typeof (product.inventory), 'sss')
                return sum + ~~product.inventory
            }, 0)
        }
    },

    //等页面加载完毕
    mounted() {
        fetch('/api/data')
            .then(response => response.json())
            .then(result => {
                console.log(this, '11')
                this.products = result.data
            })
    }

})  