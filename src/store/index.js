import Vue from 'vue'
import Vuex from 'vuex'
import fb from './firebaseInit'

Vue.use(Vuex)
// let home = {
//         title: 'Anderson Entrepreneur Association',
//         titleSub: 'The official entrepreneur assoication website for UCLA Anderson',
//         learn: 'Learn more about how we\'re using a business-minded approach to changing the world',
//         whatWeDoTitle: 'WHAT WE DO',
//         whatWeDoDesc: 'We\'re an ever-expanding group of like minded entrepreneurs.',
//         betterTitle: 'Better than ever before',
//         betterDesc: 'With more than 600 members, the Entrepreneur Association (EA) is among the largest student organizations at UCLA Anderson. <br> <br> The EA fosters the entrepreneurial and venture community on campus through a wide range of initiatives. The organization works closely with the Harold and Pauline Price Center for Entrepreneurship & Innovation, which provides curriculum, mentoring relationships and educational programs that prepare MBA candidates for the challenges of management in entrepreneurial environments. <br> <br> The EA takes advantage of its vast resources to hold over 50 events each year, including hands-on workshops, intimate networking events with successful entrepreneurs and local startups, and a world-class business plan competition',
//         whatWeDoTitle1: 'Founders',
//         whatWeDoDesc1: 'Do you have a burning passion for an idea? Be a part of a community of founders tackling a diverse set of exciting problems spanning every industry. Access resources to help with fundraising, building a team, achieving growth, and managing your startup operations. Join the startup tribe!',
//         whatWeDoTitle2: 'Startups',
//         whatWeDoDesc2: 'Do you have a burning passion for an idea? Be a part of a community of founders tackling a diverse set of exciting problems spanning every industry. Access resources to help with fundraising, building a team, achieving growth, and managing your startup operations. Join the startup tribe!',
//         whatWeDoTitle3: 'VC',
//         whatWeDoDesc3: 'Do you have a burning passion for an idea? Be a part of a community of founders tackling a diverse set of exciting problems spanning every industry. Access resources to help with fundraising, building a team, achieving growth, and managing your startup operations. Join the startup tribe!',
//         benefits1Title: 'Get in the loop',
//         benefits1Desc: 'We provide members with direct access to successful entrepreneurs, startups, venture capititalists, and potential partners in both the UCLA Anderson alumni community and the broader Los Angeles entrepreneurial ecosystem through regular dinners for eight, speaker series, ELabs workshops, and our flagship annual event, the crEAte conference.',
//         benefits2Title: 'Expanded investment opportunities',
//         benefits2Desc: 'Members of the Entrepreneur Association are consistently successful when seeking investment during their time at Anderson through our strong connection to private investors in our alumni community. Together, EA and the Price Center facilitate formal opportunities for you to gain exposure to your growing businesses and you as a developing entrepreneur. <br> <br> Two primary examples are our annual Knapp Business Plan Competition and various fellowships provided through generous alumni and Anderson affiliates which provide essential early-stage capital for students. ',
//         benefits3Title: 'Experience Not Required',
//         benefits3Desc: 'Even if you come to UCLA Anderson without a fully developed business idea, EA will coordinate workshops and mentorship programs so that you can take your idea from scratch to a completed business plan - not to mention the possibility of getting some funding to give you a real shot at starting your business. <br> <br> No matter what stage you are in your entrepreneurial career, EA will support you and will connect you to the right people and resoures to catalyze your business and entrepreneurial growth.',
//         eventsTitle: 'Upcoming Events',
//         event1Time: 'May 28 | 11:30am - 12:30pm',
//         event1Title: 'Virtual DOJ w/ Max Nimaroff @ Doordash',
//         event1Img: 'https://uclaanderson.campusgroups.com/upload/uclaanderson/2020/r1_image_upload_996149_DoorDash1jpg_514122819.jpeg',
//         event2Time: 'May 28 | 7:30pm - 9:30pm',
//         event2Title: '[EA x AWC] - Wine Tasting Experience with Eliqs',
//         event2Img: 'https://uclaanderson.campusgroups.com/upload/uclaanderson/2020/r1_image_upload_996343_Screen_Shot_20200515_at_10742_AM_51513571.png',
//         event3Time: 'Jun 16 | 6:30pm - 8:30pm',
//         event3Img: 'https://uclaanderson.campusgroups.com/upload/uclaanderson/2020/r1_image_upload_1208018_Screenshot_20200519_203609_519233828.png',
//         event3Title: '[FEMBA] BCO Digital Mixer',
//         title2: 'LET\'S GET THIS BREAD. <br> TOGETHER',
//         title2Button: 'Join Us',
//         contactTitle: 'Contact Us',
//         contactDesc: 'If you\'re a student, VC, or faculty member. Fill out the form below and we will get back to you within 24 hours.',
//         contactButton: 'Send Message',
//         membersTitle: 'Members Benefits',
//         val1Title: 'Officers',
//         val1Value: '56',
//         val2Title: 'Members',
//         val2Value: '444',
//         val3Title: 'Email/News Letters ',
//         val3Value: '541',
//         val4Title: 'Events',
//         val4Value: '211',
        
//       }
let home1;
//       fb.collection("Pages").doc("home").set(home)
// fb.collection('Pages').doc('home').get()
//   .then(doc => {
//     if (!doc.exists) {
//       console.log('No such document!');
//     } else {
//       console.log('Document data:', doc.data());
//       home1 = doc.data()
//     }
//   })
//   .catch(err => {
//     console.log('Error getting document', err);
//   });

export default new Vuex.Store({
  state: {
    db: fb,
    eventName: '',
    home: home1,
    updatingDocument: '',
    updatingVariable: '',
    updatingValue: '',
    isAdmin: false,
    isSending: false,
  },
  getters: {
    getHome(state) {
      return state.home
    },
    getIsSending(state) {
      return state.isSending
    },
    getUpdating(state) {
      return {
        updatingDocument: state.updatingDocument,
        updatingVariable: state.updatingVariable,
        updatingValue: state.updatingValue,
      }
    },
    getIsAdmin(state) {
      return state.isAdmin
    },
    getUpdatingValue (state) {
      return state.updatingValue
    },
  },
  mutations: {
    setUpdatingValue(state, val) {
      state.updatingValue = val
    },
    flipAdmin (state) {
      state.isAdmin = !state.isAdmin
    },
    updateSelected (state, val) {
      state.selected = val
      window.console.log(state.selected)
    },
    cancelUpdating(state) {
      state.updatingDocument = ''
      state.updatingVariable = ''
      state.updatingValue = ''
    },
    pushToFirebase(state) {
      state.isSending = true
      console.log("Document is being written!", state.isSending);
      var temp = {}
      temp[state.updatingVariable] = state.updatingValue
      console.log(temp)
      state.db.collection("Pages").doc("home").set(temp,{merge:true})
      .then(function() {
          state.isSending = false
          console.log("Document successfully written!", state.isSending);
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      state.updatingDocument = ''
      state.updatingVariable = ''
      state.updatingValue = ''
    },
    updateVariable(state, {documentName, variable, value}) {
      window.console.log('working on the vuexstore')

      state.updatingDocument = documentName
      state.updatingVariable = variable
      state.updatingValue = value
    },
    setHome (state, { elem , val}) {
      state.home[elem] = val
    },
    pullFirebase(state){
        state.db.collection('Pages').doc('home').get()
          .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
              state.home = doc.data()
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });
    },
    changeHome(state,homeVal){
      state.db.collection("Pages").doc("home").set(homeVal,{merge:true})
    },
    changeEvent(state,id,change){
      state.db.collection("Events").doc(id).set(change,{merge:true})
    },
    deleteEvent(state,id){
      state.db.collection("Events").doc(id).delete()
          .then(function() {
              console.log("Document successfully deleted!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
    },
    addEvent(state,event){
      state.db.collection('Events').doc().set(event)
    },
    pullFirebaseDoc(state,name){
      state.db.collection('Pages').doc(name).get()
          .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
              state[name] = doc.data()
              state[name].id = doc.id
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });
    }
  },
  actions: {

  },
  modules: {
  }
})
