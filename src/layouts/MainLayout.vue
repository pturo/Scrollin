<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-purple-3 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <span class="title-font gt-sm">{{ $route.name }}</span>
          <q-icon class="header-icon q-pa-md lt-md" name="fas fa-feather-alt" size="sm" color="primary" />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" :width="280" bordered>
      <!-- drawer content -->
      <q-icon class="q-pa-md" name="fas fa-feather-alt" size="lg" color="primary" />
      <q-list>
      <q-item to="/" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="home" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>
      <q-item to="/about" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="help" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
      </q-item>
    </q-list>

    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
      <q-input placeholder="Search Scrollin'" class="q-ma-md" outlined rounded dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list separator>
        <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Category</q-item-label>
          <q-item-label class="text-weight-bold">Ponies are fun!</q-item-label>
          <q-item-label caption>In the land of Equestria everypony were living in perfect harmony...</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Category</q-item-label>
          <q-item-label class="text-weight-bold">Ponies are fun!</q-item-label>
          <q-item-label caption>In the land of Equestria everypony were living in perfect harmony...</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Category</q-item-label>
          <q-item-label class="text-weight-bold">Ponies are fun!</q-item-label>
          <q-item-label caption>In the land of Equestria everypony were living in perfect harmony...</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)

.title-font
  font-family: 'CelestiaMediumRedux'
</style>
