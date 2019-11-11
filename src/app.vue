<template>
	<div id="app">
		<div id="cover">
			<Header></Header>
			<Todo></Todo>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
	import Header from "./todo/header.vue";
	import Footer from "./todo/footer.jsx";
	import Todo from "./todo/todo.vue";

	export default {
		components: { Header, Footer, Todo },
		data() {
			return {};
		}
	};
</script>

<style  lang="stylus">
@media screen and (min-width: 320px) and (max-width: 359px) {
        html {
            font-size: 12.8px;
        }
    }
    @media screen and (min-width: 360px) and (max-width: 374px) {
        html {
            font-size: 14.4px;
        }
    }
    @media screen and (min-width: 375px) and (max-width: 385px) {
        html {
            font-size: 15px;
        }
    }
    @media screen and (min-width: 386px) and (max-width: 392px) {
        html {
            font-size: 15.44px;
        }
    }
    @media screen and (min-width: 393px) and (max-width: 400px) {
        html {
            font-size: 16px;
        }
    }
    @media screen and (min-width: 401px) and (max-width: 414px) {
        html {
            font-size: 16.48px;
        }
    }

    @media screen and (min-width: 750px) and (max-width: 799px) {
        html {
            font-size: 20.72px;
        }
    }
     @media screen and (min-width: 800px) {
        html {
            font-size: 25.72px;
        }
    }




	#app {
		width: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		#cover {
			width: 100%;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: #999;
			opacity: 0.7;
			// z-index -1
		}
	}
</style>
