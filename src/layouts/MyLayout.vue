<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Gestão de Tarefas</div>
    <div class="text-subtitle"><span>Data actual: </span>{{ todaysDate }}</div>
      </div>
      <q-img src="statics/mountains.jpg" class="header-image absolute-top"/>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 185px); margin-top: 185px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
              to="/"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Tarefas
              </q-item-section>
            </q-item>

          <q-item
              to="/help"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Ajuda
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
        <q-img class="absolute-top" src="statics/mountains.jpg" style="height: 185px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="statics/avatar.jpg">
            </q-avatar>
            <div class="text-weight-bold">Júlio M. Rafael</div>
            <div>@jmrafael</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate () {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'D - MM - YYYY - H:m:s')
    }
  }
}
</script>

<style lang="scss">
 .header-image {
   height: 100%;
   z-index: -1;
   opacity: 0.2;
   filter: grayscale (100%)
  }
</style>
