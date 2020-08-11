import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article.vue'
import PostList from '../components/PostList.vue'
import UserInfo from '../components/UserInfo.vue'
import SlideBar from '../components/SlideBar.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        bodyMain: PostList
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        bodyMain: Article,
        otherMain: SlideBar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components: {
        bodyMain: UserInfo
      }
    }
  ]
})
