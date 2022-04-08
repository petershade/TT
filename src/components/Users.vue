<script setup lang="ts">
import type {
  User,
  UsersList,
} from '~/types'
import { useUsersStore } from '~/stores/users'

const usersStore = useUsersStore()

const props = defineProps<{
  users: UsersList
}>()

const shift = ref(0)

const filteredUsers = computed(() => {
  return props.users.slice(shift.value, shift.value + 4)
})

function handleLeftClick() {
  if (shift.value > 0)
    shift.value--
}

function handleRightClick() {
  if (shift.value < props.users.length - 4)
    shift.value++
}

async function handleUserClick(user: User) {
  usersStore.selectUser(user.id)
  usersStore.getSelectedUserPosts()
}
</script>

<template>
  <ul class="users__buttons">
    <li
      class="users__button"
      @click="handleLeftClick"
    >
      <img src="/left.svg" alt="1 человек">
    </li>
    <li
      class="users__button"
      @click="handleRightClick"
    >
      <img src="/right.svg" alt="2 человек">
    </li>
  </ul>
  <ul class="users__list">
    <User
      v-for="user of filteredUsers"
      :key="user.id"
      class="users__user"
      :user="user"
      @click="handleUserClick(user)"
    />
  </ul>
</template>

<style lang="scss">
.users {
  &__buttons {
    width: 134px;
    height: 48px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
  }
  &__button {
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
  }
  &__list {
    width: 1280px;
    height: 398px;
    display: flex;
    margin-top: 20px;
  }
  &__user:nth-child(1) {
    margin-right: 34px;
  }
  &__user:nth-child(2) {
    margin-right: 46px;
  }
  &__user:nth-child(3) {
    margin-right: 40px;
  }
}
</style>
