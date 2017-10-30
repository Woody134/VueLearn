new Vue({
    el: '#demo1',
    data: {
        show: true
    }
})

new Vue({
    el: '#demo2',
    data: {
        show: true
    }
})

new Vue({
    el: '#demo3',
    data: {
        show: true
    }
})

new Vue({
    el: '#demo4',
    data: {
      show: true
    }
  })

new Vue({
    el: '#demo5',
    data: {
        view: 'v-a'
    },
    components: {
        'v-a': {
            template: '<div>Component A</div>'
        },
        'v-b': {
            template: '<div>Component B</div>'
        }
    }
})

new Vue({
    el: "#demo6",
    data: {
        items: [1,2,3,4,5],
        nextnum: 10
    },
    methods: {
        randomIndex: function(){
            return Math.floor(Math.random() * this.items.length)
        },
        add: function(){
            this.items.splice(this.randomIndex(), 0, this.nextnum++)
        },
        remove: function(){
            this.items.splice(this.randomIndex(), 1)
        }
    }
})

new Vue({
    el: "#demo7",
    data: {
        items: [1,2,3,4,5],
    },
    methods: {
        shuffle: function () {
            this.items = _.shuffle(this.items)
        }
    }
})

new Vue({
    el: "#demo8",
    data: {
        cells: Array.apply(null, { length: 81})
            .map(function(_, index){
                return {
                    id: index,
                    number: index % 9 + 1
                }
            })
    },
    methods: {
        shuffle: function() {
            this.cells = _.shuffle(this.cells)
        }
    }
})