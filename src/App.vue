<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
	title: 'front test task',
	meta: [
		{ name: 'description', content: 'Opinionated Vite Starter Template' },
	],
})
</script>

<template>
	<header>
		<h1>Наши топ-блогеры</h1>
		<h2>Лучшие специалисты в своем деле, <p>средний опыт работы в профессии - 27 лет</p></h2>
	</header>
	<main>
		<ul class="buttons">
			<li class="button">
				<img src="/public/left.svg" alt="1 человек">
			</li>
			<li class="button">
				<img src="/public/right.svg" alt="2 человек">
			</li>								
		</ul>
		<ul class="cards-list">
			<li class="card1">
				<img src="/public/1img.png" alt="1 человек">
				<h3>Иванов Сергей<p>Delphine</p></h3>
			</li>
			<li class="card2">
				<img src="/public/2img.png" alt="2 человек">
				<h3>Петров Дмитрий<p>Moriah.Stanton</p></h3>
			</li>
			<li class="card3">
				<img src="/public/3img.png" alt="3 человек">
				<h3>Сидоров Иван<p>Delphine</p></h3>
			</li>
			<li class="card4">
				<img src="/public/4img.png" alt="4 человек">
				<h3>Аксенов Егор<p>Delphine</p></h3>
			</li>									
		</ul>
		<div class="posts">
			<div class="apostrophe">
				<img src="/public/vector.svg" alt="апостроф">
			</div>
			<ul class="posts-list">
				<h5>3 актуальных поста Moriah.Stanton</h5>
				<li class = "post">
					<h3>Заголовок поста</h3>
					<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum. 
							<p>Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus</p> 
							<p>mauris mattis viverra amet sed elit. Pellentesque dui vitae amet diam convallis nisi nec.</p>
					</h4>
				</li>
				<li class = "post">
					<h3>Заголовок поста</h3>
					<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum. 
							<p>Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus</p> 
							<p>mauris mattis viverra amet sed elit. Pellentesque dui vitae amet diam convallis nisi nec.</p>
					</h4>
				</li>	
				<li class = "post">
					<h3>Заголовок поста</h3>
					<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum. 
							<p>Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus</p> 
							<p>mauris mattis viverra amet sed elit. Pellentesque dui vitae amet diam convallis nisi nec.</p>
					</h4>
				</li>				
			</ul>
		</div> 
	</main>
</template>

<style lang="scss">
.buttons {
	width: 134px;
	height: 48px;
	display: flex;
	margin-right: auto;
	margin-left: auto;
}

.button {
	margin-right: auto;
	margin-left: auto;
}

.cards-list {
	width: 1280px;
	height: 398px;
	display: flex;
	margin-top: 20px;
}

.card1 {
	margin-right: 34px;
}

.card2 {
	margin-right: 46px;
}

.card3 {
	margin-right: 40px;
}

.cards-list img {
	height: 320px;
	width: 290px;
}

.cards-list h3 {
	margin-top: 20px;
	line-height: 1.5;
}

.posts {
	display: flex;
}

.apostrophe {
	width: 290px;
	margin-right: 34px;
	margin-top: 44px;
	text-align: right;
	img {
		display: inline;
	}
}

.posts-list {
	width: 956px;
	height: 545px;
	margin-top: 44px;
}

.posts-list h2 {
	font-size: 24px;
	font-weight: 500;
}

.posts-list h5 {
	margin-bottom: 60px;
}

.posts-list h3 {
	margin-bottom: 15px;
	margin-top: 30px;
}

.posts-list h4 p {
	font-size: 20px;
	font-weight: 400;
	color: #606F81;
	line-height: 1.4;
}

</style>