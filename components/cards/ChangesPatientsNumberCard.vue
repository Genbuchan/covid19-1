<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('治療中患者数の変化状況')"
      :title-id="'changes-in-number-of-hospitalized-patients'"
      :chart-id="'time-bar-chart-changes-patients'"
      :chart-data="changesPatientsGraph"
      :date="currentPatients.last_update"
      :unit="$t('人')"
      :url="'http://open-data.pref.hyogo.lg.jp/?page_id=141'"
      :default-data-kind="'cumulative'"
    >
      <template v-slot:description>
        <ul class="ListStyleNone">
          <li>
            {{
              $t(
                '（注）治療中患者数とは、陽性患者数から退院者数と死亡者数を除いた人数を指す'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
import currentPatients from '@/data/current_patients.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 治療中患者数の変化状況グラフ
    const changesPatientsGraph = formatGraph(currentPatients.data)

    const data = {
      currentPatients,
      changesPatientsGraph
    }
    return data
  }
}
</script>
