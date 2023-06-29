import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'
import Score from './components/Score.vue'
import Emoji from './components/Emoji.vue'
import './styles/custom.scss'
import './styles/index.scss'
import Layout from './Layout.vue'


export default <Theme>{
    Layout: Layout,
    extends: DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        const { app } = ctx
        app.component('Score', Score)
        app.component('Emoji', Emoji)

    }
}