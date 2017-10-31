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

new Vue({
    el: "#demo9",
    data: {
        query: "",
        list: [
            { msg: 'Bruce Lee' },
            { msg: 'Jackie Chan' },
            { msg: 'Chuck Norris' },
            { msg: 'Jet Li' },
            { msg: 'Kung Fury' }
        ]
    },
    computed: {
        computedList: function(){
            var vm = this
            return this.list.filter(function (item){
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) != -1
            })
        }
    },
    methods: {
        beforeEnter: function(el){
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done){
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    {opacity: 1, height: '1.6em'},
                    {complete: done}
                )
            }, delay)
        },
        leave: function(el, done){
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    {opacity: 0, height: 0},
                    {complete: done}
                )
            }, delay)
        }
    }
})

new Vue({
    el: "#demo10",
    data: {
        show: true,
        fadeInDuration: 1000,
        fadeOutDuration: 1000,
        maxFadeDuration: 1500,
        stop:true
    },
    mounted: function () {
        this.show = false
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
        },
        enter: function (el, done) {
            var vm = this
            Velocity(el,
                { opacity: 1 },
                {
                    duration: this.fadeInDuration,
                    complete: function () {
                        done()
                        if (!vm.stop) vm.show = false
                    }
                })
        },
        leave: function (el, done) {
            var vm = this
            Velocity(el,
                { opacity: 0 },
                { duration: this.fadeOutDuration,
                  complete: function() {
                      done()
                      vm.show = true
                  }
                }
            )
        }
    }
})