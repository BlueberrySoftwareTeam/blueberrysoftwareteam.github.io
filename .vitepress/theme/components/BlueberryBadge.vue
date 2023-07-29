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
const COLOR_MD_PRIMARY = 0x1E88E5FF
const COLOR_FD_PRIMARY = 0x0078d4FF
const COLOR_DANGER = 0xE53935FF

const mdLabelColor = computed(() => {
    return getBadgeColor(COLOR_MD_PRIMARY, COLOR_DANGER, props.score)
})
const fdLabelColor = computed(() => {
    return getBadgeColor(COLOR_FD_PRIMARY, COLOR_DANGER, props.score)
})
const labelLevel = computed(() => Math.round((props.score - 60) / 10 + 1))


</script>

<template>
    <span v-if="props.theme === 'material2'" class="blueberryAppMaterialBadge"
        :style="{ 'background-color': mdLabelColor }">蓝莓应用 Lv.{{ labelLevel }}</span>
    <span v-else class="blueberryAppFluentBadge" :style="{ 'background-color': fdLabelColor }">蓝莓应用 Lv.{{ labelLevel }}
    </span>
</template>

<style scoped>
.blueberryAppMaterialBadge {
    background-color: #3F51B5;
    font-size: 12px;
    color: white;
    border-radius: 4px;
    padding: 2px 4px;
}

.blueberryAppFluentBadge {
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