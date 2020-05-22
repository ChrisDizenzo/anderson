import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: [],
    eventName: '',
    home: {
        title: 'THE OFFICIAL ENTREPRENEUR ASSOCIATION OF UCLA ANDERSON',
        learn: 'Learn more about how we\'re using a business-minded approach to changing the world',
        whatWeDoTitle: 'WHAT WE DO',
        whatWeDoDesc: 'We\'re an ever-expanding group of like minded entrepreneurs.',
        whatWeDoTitle1: 'Founders',
        whatWeDoTitle1Desc: 'Do you have a burning passion for an idea? Be a part of a community of founders tackling a diverse set of exciting problems spanning every industry. Access resources to help with fundraising, building a team, achieving growth, and managing your startup operations. Join the startup tribe!',
        whatWeDoTitle2: 'Startups',
        whatWeDoTitle2Desc: 'Do you have a burning passion for an idea? Be a part of a community of founders tackling a diverse set of exciting problems spanning every industry. Access resources to help with fundraising, building a team, achieving growth, and managing your startup operations. Join the startup tribe!',
        whatWeDoTitle3: 'VC',
        whatWeDoTitle3Desc: 'Do you have a burning passion for an idea? Be a part of a community of founders tackling a diverse set of exciting problems spanning every industry. Access resources to help with fundraising, building a team, achieving growth, and managing your startup operations. Join the startup tribe!',
        title2: 'LET\'S GET THIS BREAD. <br> TOGETHER',
        title2Button: 'Join Us',
        contactTitle: 'Contact Us',
        contactDesc: 'If you\'re a student, VC, or faculty member. Fill out the form below and we will get back to you within 24 hours.',
        contactButton: 'Send Message',
        membersTitle: 'Members Benefits',
        
      },
  },
  getters: {
    getHome(state) {
      return state.home
    },
  },
  mutations: {
    updateSelected (state, val) {
      state.selected = val
      window.console.log(state.selected)
    },
    setHome (state, { elem , val}) {
      state.home[elem] = val
    }
  },
  actions: {

  },
  modules: {
  }
})
