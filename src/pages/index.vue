<script setup lang="ts">
import { useUsersStore } from '~/stores/users'

const usersStore = useUsersStore()

usersStore.getUsers().then(() => {
  const firstUser = usersStore.users?.[0]
  if (firstUser) {
    usersStore.selectUser(firstUser.id)
    usersStore.getSelectedUserPosts()
  }
})
</script>

<template>
  <header>
    <h1>Наши топ-блогеры</h1>
    <h2>Лучшие специалисты в своем деле, <p>средний опыт работы в профессии - 27 лет</p></h2>
  </header>
  <main>
    <Users
      v-if="usersStore.users !== null"
      :users="usersStore.users"
    />
    <div class="landing__posts">
      <div class="landing__posts-apostrophe">
        <img src="/vector.svg" alt="апостроф">
      </div>
      <div class="landing__posts-content">
        <h1>3 актуальных поста {{ usersStore.selectedUser?.name }}</h1>
        <Posts
          v-if="usersStore.selectedUserPosts !== null"
          :posts="usersStore.selectedUserPosts"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
$component: landing;

.#{$component} {
  &__posts {
    display: flex;
    &-apostrophe {
      width: 290px;
      margin-right: 34px;
      margin-top: 44px;
      text-align: right;
      img {
        display: inline;
      }
    }
    &-content {
      width: 956px;
      height: 545px;
      margin-top: 44px;
      h5 {
        margin-bottom: 60px;
      }
    }
  }
}
.buttons {
  width: 134px;
  height: 48px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  .button {
    margin-right: auto;
    margin-left: auto;
  }
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
</style>
