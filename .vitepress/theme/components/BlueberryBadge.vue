<script setup lang="ts">
import { computed, ref } from 'vue';
import { BlueberryBadgeTheme } from '../ts/interfaces/badge.interfaces';
import { getBadgeColor } from '../utils/blueberry';

const props = defineProps<{
    theme?: BlueberryBadgeTheme
    score: number
}>()

const SCORCE_MAX = 100
const SCORCE_MIN = 60
const COLOR_PRIMARY = 0x1E88E5FF
const COLOR_DANGER = 0xE53935FF

const labelScorce = ref(SCORCE_MAX)
const labelColor = computed(() => {
    return getBadgeColor(COLOR_PRIMARY, COLOR_DANGER, labelScorce.value)
})
const labelLevel = computed(() => Math.round((labelScorce.value - 60) / 10 + 1))


</script>

<template>
    <span v-if="props.theme === 'material2'" class="skyAppFluentBadge" :style="{ 'background-color': getBadgeColor(COLOR_PRIMARY, COLOR_DANGER, labelScorce) }">
        蓝色应用 Lv.{{ labelLevel }}
    </span>
    <span v-else class="skyAppMaterialBadge" :style="{ 'background-color': getBadgeColor(COLOR_PRIMARY, COLOR_DANGER, labelScorce) }">
        蓝色应用 Lv.{{ labelLevel }}
    </span>
</template>

<style scoped>
.skyAppMaterialBadge {
    background-color: #1E88E5;
    font-size: 12px;
    color: white;
    border-radius: 4px;
    padding: 2px 4px;
}

.skyAppFluentBadge {
    --fontFamilyBase: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
    --fontSizeBase200: 12px;
    --fontWeightSemibold: 600;
    --lineHeightBase200: 16px;
    --spacingHorizontalXS: 4px;
    --spacingHorizontalXXS: 2px;
    --borderRadiusCircular: 10000px;
    --colorTransparentStroke: transparent;
    font-family: var(--fontFamilyBase);
    font-size: var(--fontSizeBase200);
    font-weight: var(--fontWeightSemibold);
    line-height: var(--lineHeightBase200);
    height: 20px;
    min-width: 20px;
    padding: 0 calc(var(--spacingHorizontalXS) + var(--spacingHorizontalXXS));
    border-radius: var(--borderRadiusCircular);
    border-color: var(--colorTransparentStroke);
    color: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

</style>