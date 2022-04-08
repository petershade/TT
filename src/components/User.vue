<script setup lang="ts">
import type { User } from '~/types'
import { useUsersStore } from '~/stores/users'

const usersStore = useUsersStore()

const props = defineProps<{
  user: User
}>()
</script>

<template>
  <li
    :class="{
      'user': true,
      'user--active': props.user.id === usersStore.selectedUser?.id
    }"
  >
    <div class="user__avatar">
      <img :src="`https://i.pravatar.cc?${props.user.id}`">
    </div>
    <h3 class="user__name">
      {{ props.user.name }}
    </h3>
    <h4 class="user__company">
      {{ props.user.company.name }}
    </h4>
  </li>
</template>

<style lang="scss">
$orange:#FE8700;

.user {
  cursor: pointer;
  &__avatar {
    position: relative;
    height: 320px;
    width: 290px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &--active &__avatar:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    bottom: 0;
    background: $orange;
  }
  &__name {
    margin-top: 20px;
    line-height: 1.5;
  }
  &--active &__name, &--active &__company {
    color: $orange;
  }
}
</style>
