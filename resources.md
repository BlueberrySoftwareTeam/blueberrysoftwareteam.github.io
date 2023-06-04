# 资源

## 颜色

* 主题色：<code style="color: #1E88E5;">#1E88E5</code>（Material Design Blue 600）
* 错误色：<code style="color: #E539;">#E53935</code>（Material Design Red 600）

## 标志

符合“蓝色应用”规范的应用可以添加“蓝色应用”标签，吸引更多用户。

* Markdown 标志：<img :src="labelUrl" style="display: inline-block;"/>
* Material Design 标志（应用商店）：<span class="blueAppBadge" :style="{'background-color': labelColor}">蓝色应用 Lv.{{labelLevel}}</span>
* 颜色值：<code :style="{color: labelColor}">{{labelColor}}</code>
* 等级：{{labelLevel}}
* 分值：{{labelScorce}}

<input type="range" v-model.number="labelScorce" :min="SCORCE_MIN" :max="SCORCE_MAX" @click="updateLabelUrl"/>

* 计算规则：
  * 背景色：
    * 主题色百分比：`得分 / 100`
    * 错误色百分比：`1 - 主题色百分比`
    * `rgb((主题红色 * 主题色百分比 + 错误红色 * 错误色百分比), (主题绿色 * 主题色百分比 + 错误绿色 * 错误色百分比), (主题蓝色 * 主题色百分比 + 错误蓝色 * 错误色百分比))`
  * 等级：`Math.round((得分-60)/10+1)`

:::: details 颜色计算代码
::: code-group

```js [JavaScript]
function getSkyAppBgColor(labelScorce){
    const percent = labelScorce / 100
    const r = Math.round(0x1E * percent + 0xE5 * (1 - percent))
    const g = Math.round(0x88 * percent + 0x39 * (1 - percent))
    const b = Math.round(0xE5 * percent + 0x35 * (1 - percent))
    const color = '#' + Math.round(r * 0x1000000 + g * 0x10000 + b * 0x100 + 0xFF).toString(16)
    return color
}
```

:::
::::

## 应用查询

您需要在软件内或者软件文档内合适的位置添加查询链接以查询是否被蓝色软件团队收录，以获取用户信任。

* 查询链接：`https://xxxx.xxxx/xxxx/xxxx` <Badge type="info" text="敬请期待" />

<script setup>
    import { ref, computed } from 'vue';
    const SCORCE_MAX = 100
    const SCORCE_MIN = 60
    const COLOR_PRIMARY = 0x1E88E5FF
    const COLOR_DANGER = 0xE53935FF

    const labelScorce = ref(SCORCE_MAX)
    const labelColor = computed(() => {
        const percent = labelScorce.value / 100
const r = Math.round(getColor(COLOR_PRIMARY, 0x1000000)*percent + getColor(COLOR_DANGER, 0x1000000)*(1 - percent))
const g = Math.round(getColor(COLOR_PRIMARY, 0x10000)*percent + getColor(COLOR_DANGER, 0x10000)*(1 - percent))
const b = Math.round(getColor(COLOR_PRIMARY, 0x100)*percent + getColor(COLOR_DANGER, 0x100)*(1 - percent))

return '#'+Math.round(r*0x1000000 + g*0x10000 + b*0x100 + 0xFF).toString(16)
    })
    const labelLevel = computed(()=> Math.round((labelScorce.value-60)/10+1))
    const labelUrl = ref('')
    function updateLabelUrl(){
        labelUrl.value=`https://img.shields.io/badge/蓝色应用-Lv.${labelLevel.value}-${labelColor.value.toString(16).replace('#','%23')}`
    }
    function getColor(color, index) {
        return (color / index) & 0xFF
    }
    updateLabelUrl()

</script>

<style>
    .blueAppBadge{
        background-color: #1E88E5;
        font-size: 12px;
        color: white;
        border-radius: 2px;
        padding: 2px 4px;
        transition: background-color 0.5s;
    }
</style>
