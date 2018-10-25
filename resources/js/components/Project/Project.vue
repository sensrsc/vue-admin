<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col
        sm="6"
        md="4">
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
          <!-- <b-modal
            v-model="largeModal"
            title="Project Settings"
            size="lg"
            class="text-left"
            @ok="largeModal = false"> -->
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
            <b-form-group>
              <label for="vat">VAT</label>
              <b-form-input
                id="vat"
                type="text"
                placeholder="PL1234567890"/>
            </b-form-group>
            <b-form-group>
              <label for="street">Street</label>
              <b-form-input
                id="street"
                type="text"
                placeholder="Enter street name"/>
            </b-form-group>
            <b-row>
              <b-col sm="8">
                <b-form-group>
                  <label for="city">City</label>
                  <b-form-input
                    id="city"
                    type="text"
                    placeholder="Enter your city"/>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="postal-code">Postal Code</label>
                  <b-form-input
                    id="postal-code"
                    type="text"
                    placeholder="Postal Code"/>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group>
              <label for="country">Country</label>
              <b-form-input
                id="country"
                type="text"
                placeholder="Country name"/>
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
  methods: {
    projectCreate() {
      console.log(this.name);
    }
  }
};
</script>
