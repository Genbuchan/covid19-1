<template>
  <div class="MonitoringComment">
    <div class="MonitoringComment-heading">
      <h3 class="MonitoringComment-title">
        {{ $t('警戒基準・対応の方向性について') }}
      </h3>
    </div>
    <div class="MonitoringComment-description">
      <p>
        {{
          $t(
            '兵庫県では、県内の「感染状況」をもとに、6段階の警戒基準を設定しています。'
          )
        }}
        {{
          $t(
            '7日間ごとの県内の感染状況をもとに「対応の方向性」を3段階で評価します。'
          )
        }}
        {{
          $t(
            'なお、感染拡大特別期については、兵庫県側が総合的に判断した結果に基づいて決定されます。'
          )
        }}
      </p>
      <p>
        {{
          $t('{date}付の警戒基準と対応の方向性は以下のとおりです。', {
            date: commentDate()
          })
        }}
      </p>
      <v-icon color="#D9D9D9">mdi-chevron-right</v-icon>
      <a
        href="https://web.pref.hyogo.lg.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t('兵庫県における警戒基準の判断基準と対応の方向性について') }}
      </a>
    </div>
    <div class="MonitoringComment-comments">
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <h4>警戒基準</h4>
          <monitoring-comment-frame
            :level="colorLevel"
            :status="warningStatuses[warningAndPhase.data['警戒基準']]"
          />
          <!--
          <monitoring-comment-frame
            :level="monitoringItems.data['総括コメント-感染状況'].level - 1"
            :comment="monitoringItems.data['総括コメント-感染状況'].label"
          />
          -->
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <h4>対応の方向性</h4>
          <monitoring-comment-frame
            :level="colorLevel"
            :status="phaseStatuses[phase]"
          />
          <!--
          <monitoring-comment-frame
            :level="monitoringItems.data['総括コメント-医療提供体制'].level - 1"
            :comment="monitoringItems.data['総括コメント-医療提供体制'].label"
          />
          -->
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MonitoringCommentFrame from '@/components/MonitoringCommentFrame.vue'
import warningAndPhase from '@/data/warning_and_phase.json'
// import monitoringItems from '@/data/monitoring_items.json'

export default Vue.extend({
  components: {
    MonitoringCommentFrame
  },
  data() {
    const warningStatuses = [
      this.$t('感染小康期'),
      this.$t('感染警戒期'),
      this.$t('感染増加期'),
      this.$t('感染拡大期Ⅰ'),
      this.$t('感染拡大期Ⅱ'),
      this.$t('感染拡大特別期')
    ]
    const phaseStatuses = [
      this.$t('予防'),
      this.$t('警戒'),
      this.$t('制限強化')
    ]

    return {
      warningAndPhase,
      colorLevel: 0,
      warningStatuses,
      phaseStatuses,
      phase: 0
      // monitoringItems
    }
  },
  mounted() {
    const warning = warningAndPhase.data['警戒基準']

    switch (warning) {
      case 0:
        this.colorLevel = 0
        this.phase = 0
        break
      case 1:
        this.colorLevel = 1
        this.phase = 1
        break
      case 2:
        this.colorLevel = 2
        this.phase = 2
        break
      case 3:
        this.colorLevel = 3
        this.phase = 2
        break
      case 4:
        this.colorLevel = 3
        this.phase = 2
        break
      case 5:
        this.colorLevel = 4
        this.phase = 2
        break
    }
  },
  methods: {
    commentDate() {
      return this.$d(new Date(warningAndPhase.last_update), 'dateWithoutYear')
    }
  }
})
</script>

<style lang="scss">
.MonitoringComment {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .MonitoringComment-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .MonitoringComment-title {
      display: flex;
      align-items: center;
      padding: 12px;
      color: $gray-2;
      @include card-h2();
    }
  }

  .MonitoringComment-description {
    padding: 12px;

    @include font-size(14);
    > a {
      text-decoration: none;
      @include text-link();
    }
  }

  .MonitoringComment-comments {
    h4 {
      margin-bottom: 10px;
      color: $gray-3;
      font-weight: normal;

      @include font-size(14);
    }

    margin: 0 10px;
  }
}
</style>
