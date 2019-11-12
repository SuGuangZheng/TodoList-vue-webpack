<template>
	<div id="footer">
		<span>
			<p>{{talksToShow}}</p>
			<p>Tips:使用同一浏览器可离线保存清单</p>
			<a
				style="color:#ccc;font-weight:500"
				target="_blank"
				href="http://152.136.156.229/weather/"
			>张爽专用查天气</a>
		</span>
		<br />
		<span>Written by {{this.author}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				author: "Su Xin",
				talks: [
					"Live each day as if it was your last day.",
                    "For man is man and master of his fate.——Socrates",
                    "The unexamined life is not worth living.——Socrates",
                    "Living without an aim is like sailing without a compass.——John Ruskin",
                    "What makes life dreary is the want of motive.——George Eliot",
                    "There is no such thing as a great talent without great will - power.——Balzac",
                    "Towering genius disdains a beaten path. It seeks regions hitherto unexplored.——Lincoln",
                    "The good seaman is known in bad weather.",
                    "Try not to become a man of success but rather try to become a man of value.——A. Einstein",
                    "You have to believe in yourself. That’s the secret of success.——Charles Chaplin",
                    "An aim in life is the only fortune worth finding.——Robert Louis Stevenson",
					"While there is life there is hope. -- English proverb",
                    "Cease to struggle and you cease to live. -- Thomas Carlyle",

					"The best preparation for tomorrow is doing your best today.",
					"Never put off what you can do today until tomorrow.",
					"Learn and live.",
					"Life is but a span.",
					"I am a slow walker,but I never walk backwards. ",
					"Do what you say,say what you do.",
					"Do one thing at a time, and do well."
				]
			};
		},
		computed: {
			talksToShow: function() {
				var index = Math.floor(Math.random() * this.talks.length);
				return this.talks[index];
			}
		}
	};
</script>

<style lang="stylus" scoped>
	#footer {
		margin-top: 40px;
		text-align: center;
		color: #bfbfbf;
		font-size: 20px;
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	}
</style>