<script setup lang="ts">
import { ref, watch } from 'vue'
import map from '@/assets/img/choose-flat/map.jpeg'

import type { addressItem } from '@/config/constants'
import { resetMarkers } from '@/utils/main'

type Filter = string | { min: number, max: number }

interface Props {
  buildings: addressItem[]
  activeFilters: Filter[]
}

const props = defineProps<Props>()

const markers = ref<Record<string, boolean>>({ 'Ясеневая 9': false, 'Ясеневая дом 5 корп 1': false, 'Ясеневая 7': false, 'Ясеневая дом 5': false, 'Ясеневая 3 корп 1': false, 'Ясеневая 3': false, 'Ясеневая дом 1 корп 1': false, 'Ясеневая дом 1': false })

watch(() => props.buildings, () => {
  if (props.activeFilters.length) {
    props.buildings.forEach((el) => {
      const address = el.address
      markers.value[address] = true
    })
  }
  else {
    resetMarkers(markers.value)
  }
})
</script>

<template>
  <svg id="map" viewBox="0 0 1920 825" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g clip-path="url(#clip0_2_25)">
      <rect width="1920" height="825" fill="white" />
      <rect width="1920" height="825" fill="url(#pattern0_2_25)" />
      <path class="building-marker" :class="{ 'building-marker-active': markers['Ясеневая 9'] }" d="M1313.16 26L1281 40.516V134.443L1530.12 213L1572.57 185.249L1576 85.3447L1522.83 70.8288L1509.11 78.5137L1487.24 72.9635L1479.52 67.8402L1435.36 55.8858H1423.78L1388.19 46.4932L1381.76 42.2237L1313.16 26Z" fill="#543E30" fill-opacity="0.6" />
      <path class="building-marker" :class="{ 'building-marker-active': markers['Ясеневая дом 5 корп 1'] }" d="M990 136.598V218.614L1136.79 275L1179.52 249.797V185.722L1184.59 183.159L1277.66 213.488L1317 191.276V88.3287L1301.77 86.1929L1297.96 82.7756L1279.77 78.0768V71.6693L1262.43 66.5433L1256.51 68.252L1247.2 66.5433H1237.47L1223.51 63.126L1211.67 68.252L1171.9 58L1152.02 66.5433L1138.48 61.4173L1106.33 75.5138H1098.72L1068.68 88.3287L1061.91 93.8819L1033.15 106.697V117.376L990 136.598Z" fill="#543E30" fill-opacity="0.6" />
      <path class="building-marker" :class="{ 'building-marker-active': markers['Ясеневая 7'] }" d="M1525 258.5L1475 292L1422.5 273V261.5L1308 221.5V117.667L1347.12 99L1362.95 103.667H1373.19L1381.11 105.533L1389.96 100.867L1412.31 107.867V115.333L1433.26 120.467L1442.11 126.067L1459.81 131.2V144.267L1525 164.333V258.5Z" fill="#543E30" fill-opacity="0.6" />
      <path class="building-marker" :class="{ 'building-marker-active': markers['Ясеневая дом 5'] }" d="M1033.39 203.687L990 224.133V325.937L1240.26 432L1426.89 308.473L1429 196.02L1370.02 176L1358.64 182.815L1344.74 185.797L1316.93 200.28L1311.88 207.947L1286.6 222.429L1275.64 223.707L1242.36 241.597L1238.15 248.413L1221.72 257.358L1177.9 242.875L1170.32 235.208L1125.24 219.022L1106.7 215.614V198.576L1054.88 180.686L1033.39 190.908V203.687Z" fill="#543E30" fill-opacity="0.7" />
      <path class="building-marker" :class="{ 'building-marker-active': markers['Ясеневая 3 корп 1'] }" d="M773.911 211.275L718 233.87L720.102 338.32L789.465 372L838.65 348.126V324.678L914.318 290.572L937.019 299.951L982 277.356V168.216L958.038 158.411L942.484 165.232L911.376 155L892.459 162.248L874.803 168.216L863.452 162.248L836.968 169.495L825.197 168.216L809.223 174.185V181.859L796.611 186.548L773.911 199.338V211.275Z" fill="#543E30" fill-opacity="0.7" />
      <path class="building-marker" :class="{ 'building-marker-active': markers['Ясеневая 3'] }" d="M888.661 650L837.403 621.031L824.694 613.893L823 472.405L845.875 461.489L851.806 452.252L899.675 427.481L914.078 424.542L899.675 418.664L874.682 432.939L823 405.649V286.412L848.841 274.237L862.82 281.794L899.675 265L941.19 281.794L957.288 276.336L992.448 286.412L1002.19 281.794L1021.25 289.351V297.328L1039.47 304.046L1047.94 312.023L1090.73 328.397V341.412L1153 368.282V480.382L1085.64 518.168L1083.1 528.244L1027.18 567.29H1013.21L984.399 583.244L980.587 595L917.891 636.985L905.606 639.084L888.661 650Z" fill="#543E30" fill-opacity="0.6" />
      <path class="building-marker" :class="{ 'building-marker-active': markers['Ясеневая дом 1 корп 1'] }" d="M430.49 378.042L361 407.045L367.317 525.582L438.07 570.559L440.597 579.806L478.08 604.186L491.978 605.868L514.299 621L584.631 582.749L581.262 483.548L610.321 469.256L617.48 456.225L656.226 438.991L678.126 449.92L683.601 457.907L718.978 476.822L734.981 479.765L756.881 491.534L815 461.69L812.473 334.326L796.891 328.021L793.942 321.716L775.412 314.15V305.322L756.881 296.915L749.301 299.858L740.456 295.234H729.085L714.345 289.349L700.026 295.234L662.965 278L621.271 295.234L605.688 288.088L562.731 306.583L542.937 310.787L493.241 330.963L482.291 341.051L430.49 362.489V378.042Z" fill="#543E30" fill-opacity="0.7" />
      <path class="building-marker" :class="{ 'building-marker-active': markers['Ясеневая дом 1'] }" d="M624.54 469L554 504.865L556.519 650.857L575.834 664.359L581.292 674.485L626.22 704.021L643.435 707.397L735.389 769L837 704.021V554.232L772.338 518.789L741.687 536.089L720.273 524.696L715.654 515.414L694.24 503.177V492.629L671.147 479.97L661.07 484.19L652.672 479.97L641.335 478.283L624.54 469Z" fill="#543E30" fill-opacity="0.7" />
    </g>
    <defs>
      <pattern id="pattern0_2_25" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_2_25" transform="scale(0.000520833 0.00121212)" />
      </pattern>
      <clipPath id="clip0_2_25">
        <rect width="1920" height="825" fill="white" />
      </clipPath>
      <image id="image0_2_25" width="1920" height="825" :xlink:href="map" />
    </defs>
  </svg>
</template>

<style scoped>
.building-marker {
  transition: .5s;
  opacity: 0;
}
.building-marker-active {
  fill: #543E30;
  opacity: 1;
}
</style>
