<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
	<div class="card">
	  <img src="/public/1img.png" alt="1 человек">
	  <h3>Иванов Сергей<p>Delphine</p></h3>
	</div>
</template>
