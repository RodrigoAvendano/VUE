<template>
  <div>
    <h2>Lista de usuarios:</h2>
    <ul>
      <template
        v-for="(user, index) in users"
        :key="user.id"
      >
        <li>
          <h3>{{ user.name }}</h3>
          <ul>
            <template
              v-for="(post, index) in user.posts"
              :key="post.id"
            >
              <li>{{ post.title }}</li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
</div>
</template>
 
<script setup>
const users = [
  {
    id: 1,
    name: 'Juan',
    posts: [
      { id: 1, title: 'Mi primer post' },
      { id: 2, title: 'Mi segundo post' },
    ]
  },
  {
    id: 2,
    name: 'Maria',
    posts: [
      { id: 3, title: 'Mi tercer post' },
      { id: 4, title: 'Mi cuarto post' },
    ]
  }
]
</script>