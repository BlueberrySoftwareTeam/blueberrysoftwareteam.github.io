/**
 * 获取颜色值
 * 
 * @param color 颜色
 * @param index 末尾索引，红：0x1000000，绿：0x10000，蓝：0x100
 * @returns 颜色值
 */
function getColor(color: number, index: number): number {
    return (color / index) & 0xFF
}

/**
 * 计算角标颜色
 *
 * @export
 * @param primaryColor 主要色
 * @param errorColor 错误色
 * @param score 分值
 * @return 颜色值
 */
export function getBadgeColor(primaryColor: number, dangerColor: number, score: number): string {
    const percent = score / 100
    const r = Math.round(getColor(primaryColor, 0x1000000) * percent + getColor(dangerColor, 0x1000000) * (1 - percent))
    const g = Math.round(getColor(primaryColor, 0x10000) * percent + getColor(dangerColor, 0x10000) * (1 - percent))
    const b = Math.round(getColor(primaryColor, 0x100) * percent + getColor(dangerColor, 0x100) * (1 - percent))
    return '#' + Math.round(r * 0x1000000 + g * 0x10000 + b * 0x100 + 0xFF).toString(16)
}