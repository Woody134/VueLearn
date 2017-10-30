Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">X</button>\
      </li>\
    ',
    props: ['title']
})
new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
})

var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue'
  },
  methods: {
    greet: function(event){
      alert(this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

var example3 = new Vue({
  el: '#example-3',
  methods: {
    say: function(message) {
      alert(message)
    }
  }
})

var example4 =  new Vue({
  el: '#example-4',
  data: {
    message: ''
  }
})

var example5 = new Vue({
  el: '#example-5',
  data: {
    checkedNames: []
  }
})

var example6 = new Vue({
  el: '#example-6',
  data: {
    selected: ''
  }
})

Vue.component('child', {
  // 声明 props
  props: ['myMessage'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像“this.message”这样使用
  template: '<span>{{ myMessage }}</span>'
})

var example7 = new Vue({
    el: '#example-7'
})

Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function() {
      this.counter += 1
      this.$emit('increment')
    },
    dosth: function(){
      alert('dosthcom')
    },
  },
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function(){
      this.total += 1
    },
    dosth: function(){
      alert('dosth')
    },
    dosthNative: function(){
      alert('native')
    }
  }
})

// v-bind:value="value"后面这个value是什么？简单的变量名？
// 跟示例的区别 示例输入8后按回车变成0；去前0；
Vue.component('currency-input', {
  template: '\
    <span>\
      $\
      <input\
      ref="input"\
      v-bind:value="value"\
      v-on:input="updateValue($event.target.value)"\
      >\
    </span>\
  ',
  props: ['value'],
  methods: {
    updateValue: function (value) {
      var formattedValue = value
        .trim()
        .slice(
          0, 
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      this.$emit('input', Number(formattedValue))
    }
  }
})

new Vue({
  el: '#example-8',
})

Vue.component('currency-input-2', {
  // ref v-if='label'?
  template: '\
    <div>\
      <label v-if="label">{{ label }}</label>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
        v-on:focus="selectAll"\
        v-on:blur="formatValue"\
      >\
    </div>\
  ',
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  },
  mounted: function() {
    this.formatValue()
  },
  methods: {
    updateValue: function (value) {
      // currencyValidator:script引入的对象 refs?
      // value, this.value 各是什么?
      var result = currencyValidator.parse(value, this.value)
      if (result.warning) {
        this.$refs.input.value = currencyValidator.format(this.value)
      }
      this.$emit('input', result.value)
    },
    formatValue: function (){
      this.$refs.input.value = currencyValidator.format(this.value)
    },
    selectAll: function (event) {
      setTimeout(function () {
        event.target.select()
      }, 0)
    }
  }
})

new Vue({
  el: '#example-9',
  data: {
    price: 0,
    shipping: 0,
    handling: 0,
    discount: 0
  },
  computed: {
    total: function () {
      return((
        this.price * 100 +
        this.shipping * 100 +
        this.handling * 100 -
        this.discount
      ) / 100).toFixed(2)
    }
  }
})

