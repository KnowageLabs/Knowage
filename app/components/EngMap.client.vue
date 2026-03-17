<template>
  <div
    ref="mapEl"
    class="h-[460px] w-full"
    role="application"
    aria-label="Interactive map of ENG office locations in Europe"
  />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

const mapEl = ref<HTMLElement | null>(null)
let mapInstance: any = null
let tileLayer: any = null

const colorMode = useColorMode()

const offices = [
  { name: 'Turin', country: 'Italy', lat: 45.0703, lng: 7.6869 },
  { name: 'Bologna', country: 'Italy', lat: 44.4949, lng: 11.3426 },
  { name: 'Rome', country: 'Italy', lat: 41.9028, lng: 12.4964 },
  { name: 'Padua', country: 'Italy', lat: 45.4064, lng: 11.8768 },
  { name: 'Belgrade', country: 'Serbia', lat: 44.8176, lng: 20.4569 }
]

const tileUrls = {
  light: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
}

function getTileUrl() {
  return colorMode.value === 'dark' ? tileUrls.dark : tileUrls.light
}

// Pin-shaped marker with the ENG double-diamond mark inside
const markerHtml = `
  <div style="width:36px;height:44px;position:relative;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.35))">
    <svg viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:36px;height:44px">
      <!-- Pin shape -->
      <path d="M18 0C8.06 0 0 8.06 0 18c0 12.5 18 26 18 26s18-13.5 18-26C36 8.06 27.94 0 18 0z" fill="#cc1414"/>
      <!-- ENG double-diamond mark, scaled to fit in the circle area (center ~18,17, radius ~12) -->
      <!-- Original mark viewBox is roughly 0 0 54 46; scale ~0.42, translate to center -->
      <g transform="translate(5, 5) scale(0.48)">
        <!-- Left diamond -->
        <path d="M23.1874 37.1367V39.7895H2.35624C1.87538 38.9689 1.4987 38.0799 1.15087 37.1399L23.1874 37.1367Z" fill="white"/>
        <path d="M23.1874 42.3086V44.7335C23.1874 44.8578 23.0864 44.9597 22.9598 44.9597H11.4494C9.13485 44.9597 6.50612 44.1583 4.43519 42.3086H23.1874Z" fill="white"/>
        <path d="M25.7039 0.226121V15.8622C25.7039 15.9578 25.6734 16.0502 25.6173 16.1282L15.9872 29.2661C15.9022 29.3824 15.7644 29.4525 15.6201 29.4525H0.605894C0.456826 29.4525 0.344624 29.3107 0.386299 29.1673C0.738934 27.915 1.32399 26.7583 2.09017 25.7434L18.7971 3.77904C21.1838 0.839518 24.2517 0.17673 25.4458 0.00306728C25.5821 -0.0176448 25.7039 0.0891022 25.7039 0.226121Z" fill="white"/>
        <path d="M23.1874 32.1052V34.6209H0.344621C0.338209 34.6002 0.028852 33.7733 0 32.2007C0 32.0733 0.099379 31.9697 0.22761 31.9697H23.0511C23.1265 31.9697 23.1874 32.0303 23.1874 32.1052Z" fill="white"/>
        <!-- Right diamond -->
        <path d="M52.9449 37.1399C52.5971 38.0799 52.2204 38.9689 51.7396 39.7895H30.9085V37.1367L52.9449 37.1399Z" fill="white"/>
        <path d="M30.9085 42.3086V44.7335C30.9085 44.8578 31.0094 44.9597 31.1361 44.9597H42.6464C44.961 44.9597 47.5897 44.1583 49.6606 42.3086H30.9085Z" fill="white"/>
        <path d="M28.3919 0.226481V15.8625C28.3919 15.9581 28.4224 16.0505 28.4785 16.1286L38.1086 29.2665C38.1936 29.3828 38.3314 29.4529 38.4757 29.4529H53.4899C53.639 29.4529 53.7512 29.3111 53.7095 29.1677C53.3569 27.9154 52.7718 26.7587 52.0057 25.7438L35.2972 3.781C32.9105 0.841471 29.8425 0.178683 28.6484 0.00502041C28.5121 -0.0156917 28.3903 0.0910553 28.3903 0.228074H28.3919V0.226481Z" fill="white"/>
        <path d="M30.9085 32.196V34.6209H53.7512C53.7576 34.6002 54.067 33.7733 54.0958 32.2007C54.0974 32.0733 53.9964 31.9697 53.8682 31.9697H31.1361C31.011 31.9697 30.9085 32.0701 30.9085 32.196Z" fill="white"/>
      </g>
    </svg>
  </div>
`

function popupHtml(name: string, country: string) {
  return `
    <div class="eng-popup">
      <div class="eng-popup-header">
        <svg width="28" height="9" viewBox="0 0 149 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.1874 37.1367V39.7895H2.35624C1.87538 38.9689 1.4987 38.0799 1.15087 37.1399L23.1874 37.1367Z" fill="currentColor"/>
          <path d="M23.1874 42.3086V44.7335C23.1874 44.8578 23.0864 44.9597 22.9598 44.9597H11.4494C9.13485 44.9597 6.50612 44.1583 4.43519 42.3086H23.1874Z" fill="currentColor"/>
          <path d="M25.7039 0.226121V15.8622C25.7039 15.9578 25.6734 16.0502 25.6173 16.1282L15.9872 29.2661C15.9022 29.3824 15.7644 29.4525 15.6201 29.4525H0.605894C0.456826 29.4525 0.344624 29.3107 0.386299 29.1673C0.738934 27.915 1.32399 26.7583 2.09017 25.7434L18.7971 3.77904C21.1838 0.839518 24.2517 0.17673 25.4458 0.00306728C25.5821 -0.0176448 25.7039 0.0891022 25.7039 0.226121Z" fill="currentColor"/>
          <path d="M23.1874 32.1052V34.6209H0.344621C0.338209 34.6002 0.028852 33.7733 0 32.2007C0 32.0733 0.099379 31.9697 0.22761 31.9697H23.0511C23.1265 31.9697 23.1874 32.0303 23.1874 32.1052Z" fill="currentColor"/>
          <path d="M52.9449 37.1399C52.5971 38.0799 52.2204 38.9689 51.7396 39.7895H30.9085V37.1367L52.9449 37.1399Z" fill="currentColor"/>
          <path d="M30.9085 42.3086V44.7335C30.9085 44.8578 31.0094 44.9597 31.1361 44.9597H42.6464C44.961 44.9597 47.5897 44.1583 49.6606 42.3086H30.9085Z" fill="currentColor"/>
          <path d="M28.3919 0.226481V15.8625C28.3919 15.9581 28.4224 16.0505 28.4785 16.1286L38.1086 29.2665C38.1936 29.3828 38.3314 29.4529 38.4757 29.4529H53.4899C53.639 29.4529 53.7512 29.3111 53.7095 29.1677C53.3569 27.9154 52.7718 26.7587 52.0057 25.7438L35.2972 3.781C32.9105 0.841471 29.8425 0.178683 28.6484 0.00502041C28.5121 -0.0156917 28.3903 0.0910553 28.3903 0.228074H28.3919V0.226481Z" fill="currentColor"/>
          <path d="M30.9085 32.196V34.6209H53.7512C53.7576 34.6002 54.067 33.7733 54.0958 32.2007C54.0974 32.0733 53.9964 31.9697 53.8682 31.9697H31.1361C31.011 31.9697 30.9085 32.0701 30.9085 32.196Z" fill="currentColor"/>
        </svg>
        <span class="eng-popup-office">Office</span>
      </div>
      <div class="eng-popup-city">${name}</div>
      <div class="eng-popup-country">${country}</div>
    </div>
  `
}

onMounted(async () => {
  const L = (await import('leaflet')).default

  mapInstance = L.map(mapEl.value!, {
    zoomControl: true,
    scrollWheelZoom: false
  })

  tileLayer = L.tileLayer(getTileUrl(), {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com">CARTO</a>',
    maxZoom: 18
  }).addTo(mapInstance)

  const icon = L.divIcon({
    className: '',
    html: markerHtml,
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -46]
  })

  const bounds: [number, number][] = offices.map(({ lat, lng }) => [lat, lng])
  mapInstance.fitBounds(bounds, { padding: [50, 50] })

  offices.forEach(({ name, country, lat, lng }) => {
    L.marker([lat, lng], { icon })
      .addTo(mapInstance)
      .bindPopup(popupHtml(name, country), { className: 'eng-popup-wrapper', maxWidth: 160 })
  })
})

watch(() => colorMode.value, (mode) => {
  if (!mapInstance || !tileLayer) return
  tileLayer.setUrl(mode === 'dark' ? tileUrls.dark : tileUrls.light)
})

onBeforeUnmount(() => {
  mapInstance?.remove()
})
</script>

<style>
.eng-popup-wrapper .leaflet-popup-content-wrapper {
  border-radius: 10px;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
  border: none;
}

.eng-popup-wrapper .leaflet-popup-content {
  margin: 0;
  min-width: 140px;
}

.eng-popup-wrapper .leaflet-popup-tip-container {
  margin-top: -1px;
}

.eng-popup {
  font-family: system-ui, -apple-system, sans-serif;
  text-align: center;
}

.eng-popup-header {
  background: #cc1414;
  color: white;
  padding: 10px 16px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.eng-popup-office {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.9;
}

.eng-popup-city {
  font-size: 15px;
  font-weight: 700;
  color: #111;
  padding: 8px 16px 2px;
}

.eng-popup-country {
  font-size: 11px;
  color: #888;
  padding: 0 16px 10px;
  letter-spacing: 0.04em;
}
</style>
