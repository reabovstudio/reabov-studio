import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";

export default [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/portfolio/:slug',
        name: 'PortfolioView',
        component: PortfolioView,
    }
]
