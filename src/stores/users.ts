import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'
import type {
  PostsList,
  User,
  UsersList,
} from '~/types'

export const useUsersStore = defineStore('users', () => {
  const users = ref<UsersList | null>(null)
  const selectedUser = ref<User | null>(null)
  const selectedUserPosts = ref<PostsList | null>(null)

  async function getUsers() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = data
  }

  function selectUser(userId: User['id']) {
    if (users.value === null)
      throw new Error('Users array is null')
    const user = users.value.find(item => item.id === userId)
    if (user === undefined)
      throw new Error(`Users with id ${userId} was not found`)
    selectedUser.value = user
  }

  async function getSelectedUserPosts() {
    if (selectedUser.value === null)
      throw new Error('Selected user is null')
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', { params: { userId: selectedUser.value.id } })
    selectedUserPosts.value = data
  }

  return {
    users,
    selectedUser,
    selectedUserPosts,
    getUsers,
    selectUser,
    getSelectedUserPosts,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
