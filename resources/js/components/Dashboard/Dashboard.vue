<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card header="Web">
          <b-row>
            <b-col
              sm="12"
              lg="6">
              <b-row>
                <b-col sm="3">
                  <Callout variant="success">
                    <small class="text-muted">Passed</small><br>
                    <strong class="h4">60</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[35, 23, 56, 22, 97, 23, 64]"
                        variant="#20a8d8"
                        width="80"
                        height="30" />
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="3">
                  <Callout variant="danger">
                    <small class="text-muted">Failed</small><br>
                    <strong class="h4">40</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[65, 59, 84, 84, 51, 55, 40]"
                        variant="#f86c6b"
                        width="80"
                        height="30" />
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="3">
                  <Callout variant="danger">
                    <small class="text-muted">Total</small><br>
                    <strong class="h4">100</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[65, 59, 84, 84, 51, 55, 40]"
                        variant="#f86c6b"
                        width="80"
                        height="30" />
                    </div>
                  </Callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <ul class="horizontal-bars">
                <li>
                  <div class="title">
                    Regression Test
                  </div>
                  <div class="bars">
                    <b-progress
                      :value="60"
                      height="{}"
                      class="progress-xs"
                      variant="success"/>
                    <b-progress
                      :value="40"
                      height="{}"
                      class="progress-xs"
                      variant="danger"/>
                  </div>
                </li>
                <li class="legend">
                  <b-badge
                    pill
                    variant="success"/> <small>Passed</small> &nbsp; <b-badge
                      pill
                      variant="danger"/> <small>Failed</small>
                </li>
              </ul>
            </b-col>
            <b-col
              sm="12"
              lg="6"/>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card header="Mobile Web">
          <b-row>
            <b-col
              sm="12"
              lg="6">
              <b-row>
                <b-col sm="3">
                  <Callout variant="success">
                    <small class="text-muted">Passed</small><br>
                    <strong class="h4">60</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[35, 23, 56, 22, 97, 23, 64]"
                        variant="#20a8d8"
                        width="80"
                        height="30" />
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="3">
                  <Callout variant="danger">
                    <small class="text-muted">Failed</small><br>
                    <strong class="h4">40</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[65, 59, 84, 84, 51, 55, 40]"
                        variant="#f86c6b"
                        width="80"
                        height="30" />
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="3">
                  <Callout variant="danger">
                    <small class="text-muted">Total</small><br>
                    <strong class="h4">100</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example
                        :data="[65, 59, 84, 84, 51, 55, 40]"
                        variant="#f86c6b"
                        width="80"
                        height="30" />
                    </div>
                  </Callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <ul class="horizontal-bars">
                <li>
                  <div class="title">
                    Regression Test
                  </div>
                  <div class="bars">
                    <b-progress
                      :value="60"
                      height="{}"
                      class="progress-xs"
                      variant="success"/>
                    <b-progress
                      :value="40"
                      height="{}"
                      class="progress-xs"
                      variant="danger"/>
                  </div>
                </li>
                <li class="legend">
                  <b-badge
                    pill
                    variant="success"/> <small>Passed</small> &nbsp; <b-badge
                      pill
                      variant="danger"/> <small>Failed</small>
                </li>
              </ul>
            </b-col>
            <b-col
              sm="12"
              lg="6"/>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
};
</script>

