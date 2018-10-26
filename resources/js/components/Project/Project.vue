<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col
        v-for="project in this.$store.state.projects"
        :key="project.project_name"
        sm="6"
        md="4">
        <b-card
          title=""
          style="max-width: 20rem;"
          class="card-accent-primary text-center">
          <p class="card-text">
            {{ project.project_name }}
          </p>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card
          title=""
          style="max-width: 20rem;"
          class="card-accent-primary text-center">
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <b-button
            type="button"
            variant="outline-primary"
            @click="largeModal = true"><i class="fa fa-magic"/>&nbsp; Create New Project</b-button>
          <b-modal
            v-model="largeModal"
            title="Project Settings"
            size="lg"
            class="text-left"
            @ok="projectCreate()">
            <b-form-group>
              <label for="name">Name</label>
              <b-form-input
                id="name"
                v-model="name"
                type="text"
                placeholder="Enter your project name"/>
            </b-form-group>
          </b-modal>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      name: '',
      largeModal: false
    };
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    }
  },
  created() {
    this.$store.dispatch('loadProjects');
  },
  methods: {
    projectCreate() {
      this.$store.dispatch('createProject', { name: this.name })
        .then((response) => {
          this.$store.dispatch('loadProjects');
        });
    }
  }
};
</script>
