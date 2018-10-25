<template>
  <div class="app">
    <Header/>
    <div class="app-body">
      <Sidebar :nav-items="nav"/>
      <notifications
        :style="{ 'margin-top': offset }"
        class="custom-notifications"/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view/>
        </div>
      </main>
      <!-- <Aside/> -->
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Breadcrumb from './Breadcrumb/Breadcrumb';
// import Aside from './Aside/Aside';

import nav from '../nav';

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar,
    Footer,
    Breadcrumb
  },
  data() {
    return {
      nav: nav.items,
      offset: true
    };
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched;
    }
  }
};
</script>
