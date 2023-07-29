# 蓝莓资源

## 颜色

- 主题色：
  - Material Design： Blue 600 <code style="color: #1E88E5;">#1E88E5</code>
  - Fluent Design： colorPaletteBlueBorderActive <code style="color: #0078d4;">#0078d4</code>
- 危险色：
  - Material Design： Red 600 <code style="color: #E53935;">#E53935</code>

::: tip
您可以根据您的软件 UI 设计适当更换这些颜色
:::

## 标志

符合“蓝色应用”规范的应用可以添加“蓝色应用”标签，吸引更多用户。

- Markdown 标志：<img :src="labelUrl" style="display: inline-block;"/>
- [Material Design 标志][MDBadge]：<code :style="{color: materialLabelColor}">{{materialLabelColor}}</code> <BlueberryBadge theme="material2" :score="labelScorce"/>
- [Fluent Design 标志][FDBadge]：<BlueberryBadge theme="fluent2" :score="labelScorce"/>
- 等级：{{labelLevel}}
- 分值：{{labelScorce}}

<input type="range" v-model.number="labelScorce" :min="SCORCE_MIN" :max="SCORCE_MAX" @click="updateLabelUrl"/>

- 计算规则：
  - 背景色：
    - 主题色百分比：`得分 / 100`
    - 错误色百分比：`1 - 主题色百分比`
    - `rgb((主题红色 * 主题色百分比 + 错误红色 * 错误色百分比), (主题绿色 * 主题色百分比 + 错误绿色 * 错误色百分比), (主题蓝色 * 主题色百分比 + 错误蓝色 * 错误色百分比))`
  - 等级：`Math.round((得分-60)/10+1)`

:::: details 颜色计算代码
::: code-group

```js [JavaScript]
function getBadgeColor(primaryColor, dangerColor, score) {
    const percent = score / 100
    const r = Math.round(getColor(primaryColor, 0x1000000) * percent + getColor(dangerColor, 0x1000000) * (1 - percent))
    const g = Math.round(getColor(primaryColor, 0x10000) * percent + getColor(dangerColor, 0x10000) * (1 - percent))
    const b = Math.round(getColor(primaryColor, 0x100) * percent + getColor(dangerColor, 0x100) * (1 - percent))
    return '#' + Math.round(r * 0x1000000 + g * 0x10000 + b * 0x100 + 0xFF).toString(16).padStart(8, '0')
}
```

``` ts [TypeScript]
function getBadgeColor(primaryColor: number, dangerColor: number, score: number): string {
    const percent = score / 100
    const r = Math.round(getColor(primaryColor, 0x1000000) * percent + getColor(dangerColor, 0x1000000) * (1 - percent))
    const g = Math.round(getColor(primaryColor, 0x10000) * percent + getColor(dangerColor, 0x10000) * (1 - percent))
    const b = Math.round(getColor(primaryColor, 0x100) * percent + getColor(dangerColor, 0x100) * (1 - percent))
    return '#' + Math.round(r * 0x1000000 + g * 0x10000 + b * 0x100 + 0xFF).toString(16).padStart(8, '0')
}
```

:::
::::

## 应用查询

您需要在软件内或者软件文档内合适的位置添加查询链接以查询是否被蓝色软件团队收录，以获取用户信任。

- 查询链接：`https://xxxx.xxxx/xxxx/xxxx` <Badge type="info" text="敬请期待" />

[MDBadge]: http://m3.material-io.cn/components/badges/specs
[FDBadge]: https://fluent2.microsoft.design/components/web/react/badge/usage

<script setup>
    import {getBadgeColor} from '.vitepress/theme/utils/blueberry.ts'
    import BlueberryBadge from '.vitepress/theme/components/BlueberryBadge.vue'
    import Emoji from '.vitepress/theme/components/Emoji.vue'
    import { ref, computed } from 'vue';
    const SCORCE_MAX = 100
    const SCORCE_MIN = 60
    const COLOR_MD_PRIMARY = 0x1E88E5FF
    const COLOR_MD_DANGER = 0xE53935FF

    const labelScorce = ref(SCORCE_MAX)
    const labelLevel = computed(()=> Math.round((labelScorce.value-60)/10+1))
    const materialLabelColor=computed(()=>{
        return getBadgeColor(COLOR_MD_PRIMARY,COLOR_MD_DANGER,labelScorce.value)
    })

    const labelUrl = ref('')
    function updateLabelUrl() {
        labelUrl.value=`https://img.shields.io/badge/蓝色应用-Lv.${labelLevel.value}-${materialLabelColor.value.toString(16).replace('#','%23')}`
    }
    updateLabelUrl()

</script>
