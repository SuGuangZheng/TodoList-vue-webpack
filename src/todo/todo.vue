<template>
	<section class="real-app">
		<input
			type="text"
			class="add-input"
			autofocus="autofocus"
			placeholder="接下来要做什么"
			@keyup.enter="addTodo"
		/>

		<item :todo="todo" v-for="todo in filteredTodos" :key="todo.id"
         @completedChanged="changeStatus" @del="deleteTodo"></item>

		<Tabs
			:filter="filter"
			:todos="todos"
			@toggle="toggleFilter"
			@clearAllCompleted="clearAllCompleted"
		></Tabs>
	</section>
</template>

<script>
	import Item from "./item.vue";
	import Tabs from "./tabs.vue";
	let id = 1;
	export default {
		data() {
			return {
				todos: [],
				filter: "all"
			};
		},
		components: { Item, Tabs },
		computed: {
			filteredTodos() {
				if (this.filter === "all") {
					return this.todos;
				}
				//判断当前选中的是不是complted
				const completed = this.filter === "completed";
				return this.todos.filter(todo => completed === todo.completed);
			}
		},
		methods: {
			addTodo(e) {
				var newTodo = {
					id: id,
					content: e.target.value.trim(),
					completed: false
				};
				this.todos.unshift(newTodo);
				//添加到localStorage
				window.localStorage.setItem("todo" + id, JSON.stringify(newTodo));
				id++;

				e.target.value = "";
			},
			deleteTodo(id) {
				// console.log("todos=", this.todos);
				// console.log(id);
				console.log(this.todos.findIndex(todo => id === todo.id));
				window.localStorage.removeItem("todo" + id);
				this.todos.splice(this.todos.findIndex(todo => id === todo.id), 1);
            },
            changeStatus(id){
                var json = window.localStorage.getItem("todo" + id);
                var obj = JSON.parse(json);
                obj.completed = !obj.completed;
                 window.localStorage.setItem("todo" + id,JSON.stringify(obj));
            },
			toggleFilter(state) {
				this.filter = state;
			},
			clearAllCompleted() {
				var toDels = this.todos.filter(todo => todo.completed);
				this.todos = this.todos.filter(todo => !todo.completed);
				//toDels里面存的是要删除的todo
				//遍历toDels,
				toDels.forEach(function(val) {
					window.localStorage.removeItem("todo" + val.id);
				});
			}
		},
		mounted() {
			//读取localStorage里的todo
			var self = this;
			var keys = [];
			//读取localStorage所有的键，存到keys里
			for (var i = 0; i < window.localStorage.length; i++) {
				keys.push(window.localStorage.key(i));
			}
			// console.log(keys);
			// 把所有的值放到todos里
			var max = 0;
			keys.forEach(function(val, index) {
				var isNum = /^todo\d+$/.test(val);
				// console.log(val,isNum);
				if (isNum) {
					var num = /\d+/.exec(val);
					if (num[0] > max) {
						max = num[0];
					}

					self.todos.push(JSON.parse(window.localStorage.getItem(val)));
				}
			});

			id = parseInt(max)+1;
			console.log("max", max);
			console.log("id", id);
			// console.log(this.todos);
		}
	};
</script>

<style lang="stylus" scoped>
	@media screen and (max-width: 715px) {
		.real-app {
			width: 100%;
			margin: 0 auto;
			margin-top: 50px;
			box-shadow: 0 0 5px #666;
		}

		.add-input {
			position: relative;
			margin: 0;
			width: 100%;
			font-size: 24px;
			font-family: inherit;
			font-weight: inherit;
			line-height: 1.4em;
			border: 0;
			outline: none;
			color: inherit;
			padding: 6px;
			border: 1px solid #999;
			box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
			box-sizing: border-box;
			font-smoothing: antialiased;
			padding: 16px 16px 16px 60px;
			border: none;
			box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
		}
	}

	@media screen and (min-width: 716px) {
		.real-app {
			width: 600px;
			margin: 0 auto;
			margin-top: 50px;
			box-shadow: 0 0 5px #666;
		}

		.add-input {
			position: relative;
			margin: 0;
			width: 100%;
			font-size: 24px;
			font-family: inherit;
			font-weight: inherit;
			line-height: 1.4em;
			border: 0;
			outline: none;
			color: inherit;
			padding: 6px;
			border: 1px solid #999;
			box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
			box-sizing: border-box;
			font-smoothing: antialiased;
			padding: 16px 16px 16px 60px;
			border: none;
			box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
		}
	}
</style>