import Vue from 'vue'
import Vuex from 'vuex'
import {db, storage} from './firebaseInit'

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

    db: db,
    storage: storage,
    hasSentMessage: false,
    eventName: '',
    home: home1,
    updatingDocument: '',
    updatingVariable: '',
    updatingValue: '',
    isAdmin: false,
    isSending: false,
    leadership: 
    [
      // {
      //   name: "Julia Egan",
      //   title: "President",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996082_Egan_Julia012jpg_10416498.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Jama Mohamed",
      //   title: "Founders",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996215_20171009171638_IMG_002503jpeg_101420297.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Christopher Abad",
      //   title: "Admissions",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_706365_30955549328_a22ea79b58_ojpg_52422342.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Addy Quirk",
      //   title: "Startup Recruiting",
      //   img: "https://static1.campusgroups.com/images/ico/male_user_large.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Angela Klein",
      //   title: "Officer",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2017/s3_image_upload_536553_12747956_10154332916261754_8030394093390064216_o_92218246_crop.jpg",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Holly Han",
      //   title: "Officer",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_536558_profilejpg_49232647.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Janet Chung",
      //   title: "Officer",
      //   img: "https://static1.campusgroups.com/images/ico/female_user_large.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Jackson Foster",
      //   title: "D48s",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2020/s3_image_upload_996093_Foster_Jackson005jpg_11012028.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Maura Liebendorfer",
      //   title: "Alumni Relations",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996185_Liebendorfer_Maura007jpg_92920228.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Mitzi Benavides",
      //   title: "Competitions",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_996236_upload_10416535_10416535.jpg",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "PRATYUSH KANKANWADI",
      //   title: "Competitions",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2018/s3_image_upload_678289_99d4cc7daba54d84b6f6780b25c0aecb_1016152119.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Alec Steinfeld",
      //   title: "MBA Program Relations",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_1208018_WhatsApp_Image_20190924_at_121026jpeg_1111123220.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Frank DiZenzo",
      //   title: "Business Formation",
      //   img: "https://static1.campusgroups.com/images/ico/male_user_large.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Alan Spindel",
      //   title: "Speaker Series",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_996285_upload_93013522_93013522.jpg",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Mai Bui",
      //   title: "Innovation",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996024_Bui_Mai0091jpg_111513348.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Andy Chang",
      //   title: "Technology",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2020/s3_image_upload_996034_Chang_11716320.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Daniel Beckerman",
      //   title: "Marketing",
      //   img: "https://static1.campusgroups.com/images/ico/male_user_large.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Lucy Zhou",
      //   title: "External Relations",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996343_Zhou_Lucy008jpg_1021211320.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Luke Katz",
      //   title: "DOJs",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996149_Anderson_Headshotjpg_10915148.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Lindsay Miller",
      //   title: "Venture Capital",
      //   img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_996213_upload_102415511_102415511.jpg",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // },
      // {
      //   name: "Arun Gajendran Karunmurthi",
      //   title: "Finance",
      //   img: "https://static1.campusgroups.com/images/ico/male_user_large.png",
      //   quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
      //   email: '',
      //   linkedin: '',
      // }
    ],
    founders: [],
    messages: [],
    venturecapital: 
      [
          // {
          //     name: 'Hiyo', 
          //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/hiyo.jpg'
          // },
          // {
          //     name: 'Wire', 
          //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/wire.jpg',
          // },
          // {
          //     name: 'Vhomes', 
          //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/vhomes.jpg'
          // },
          // {
          //     name: 'RealAppeal', 
          //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/real.jpg'
          // },
          // {
          //     name: 'Gen Beauty', 
          //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/gen.jpg'
          // },
          // {
          //     name: 'Sahara',
          //     url: 'https://i.imgur.com/QeYfrxi.png',
          // },
          // {
          //     name: 'Gucci', 
          //     site: 'Gucci.com'
          // },
          
      ],
    startups: 
      [
        // {
        //     name: 'Hiyo', 
        //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/hiyo.jpg'
        // },
        // {
        //     name: 'Wire', 
        //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/wire.jpg',
        // },
        // {
        //     name: 'Vhomes', 
        //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/vhomes.jpg'
        // },
        // {
        //     name: 'RealAppeal', 
        //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/real.jpg'
        // },
        // {
        //     name: 'Gen Beauty', 
        //     url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/gen.jpg'
        // },
        // {
        //     name: 'Sahara',
        //     url: 'https://i.imgur.com/QeYfrxi.png',
        // },
        // {
        //     name: 'Gucci', 
        //     site: 'Gucci.com'
        // },
          
      ]
  },
  getters: {
    getVentureCapital(state){
      return state.venturecapital
    },
    getStartUps(store){
      return store.startups
    },
    getHome(state) {
      return state.home
    },
    getFounders(state){
      return state.founders
    },
    getLeadership(state) {
      return state.leadership
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
    getMessages(state) {
      return state.messages
    }
  },
  mutations: {
    removeFounder(state,{ind}) {
      state.founders.arr.splice(ind, 1)
      state.db.collection("Pages").doc("founders").set({arr: state.founders.arr}, {merge:true})
    },
    addFounder(state,val) {
      state.founders.arr.push(val)
      state.db.collection("Pages").doc("founders").set({arr: state.founders.arr}, {merge:true})
    },
    editFounder(state, {founderData, ind}) {
      state.founders.arr[ind] = founderData
      state.db.collection("Pages").doc("founders").set({arr: state.founders.arr}, {merge:true})
    },
    removeStartup(state,{ind}) {
      state.startups.arr.splice(ind, 1)
      state.db.collection("Pages").doc("startups").set({arr: state.startups.arr}, {merge:true})
    },
    addStartup(state,val) {
      state.startups.arr.push(val)
      state.db.collection("Pages").doc("startups").set({arr: state.startups.arr}, {merge:true})
    },
    editStartup(state, {startupData, ind}) {
      state.startups.arr[ind] = startupData
      state.db.collection("Pages").doc("startups").set({arr: state.startups.arr}, {merge: false})
    },
    addVC(state,val) {
      state.venturecapital.arr.push(val)
      state.db.collection("Pages").doc("venturecapital").set({arr: state.venturecapital.arr}, {merge:false})
    },
    addLeadership(state,val) {
      state.leadership.arr.push(val)
      state.db.collection("Pages").doc("leadership").set({arr: state.leadership.arr}, {merge:false})
    },
    changeLeadershipOrder(state,{ind1, ind2}) {
      let hold = state.leadership.arr.splice(ind1,1)[0];
      state.leadership.arr.splice(ind2,0,hold);
    },
    setUpdatingValue(state, val) {
      state.updatingValue = val
    },
    flipAdmin (state) {
      state.isAdmin = !state.isAdmin
    },
    updateDocument(state, val) {
      state.updatingDocument = val
      state.updatingVariable = val
    },
    updateSelected (state, val) {
      state.selected = val
    },
    cancelUpdating(state) {
      state.updatingDocument = ''
      state.updatingVariable = ''
      state.updatingValue = ''
    },
    pushToFirebase(state,{val, val2, val3}) {
      state.isSending = true
      if (state.updatingDocument == "Home"){
        var temp = {}
        temp[state.updatingVariable] = state.updatingValue
        state.db.collection("Pages").doc("home").set(temp,{merge:true})
        .then(function() {
            state.isSending = false
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      }
      else {
        state.db.collection("Pages").doc(state.updatingDocument.toLowerCase()).set({arr: val, heading: val2, contactHeading: val3})
        .then(function() {
            state.isSending = false
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

      }
      state.updatingDocument = ''
      state.updatingVariable = ''
      state.updatingValue = ''
    },
    updateVariable(state, {documentName, variable, value}) {

      state.updatingDocument = documentName
      state.updatingVariable = variable
      state.updatingValue = value
    },
    setHome (state, { elem , val}) {
      state.home[elem] = val
    },
    pullFirebase(state){
      state.db.collection('Pages').onSnapshot(querySnapshot => {
          querySnapshot.docs.map(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              state[doc.id] = doc.data()
            }
          })
        })
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
    addFounderAndImage({commit}, {img, founderInfo}) {
        let name = founderInfo.name +'_founder_'+ Math.floor(Math.random() * 30)
      storage.child(name).put(img).then(() => {
        storage.child(name).getDownloadURL().then((url) => {
          founderInfo.url = url
          commit("addFounder", founderInfo);

        })
      })
    },
    replaceFounderAndImage({commit}, {img, founderInfo, founderEditorInd}) {
      let name = founderInfo.name+'_founder_'+ Math.floor(Math.random() * 30)  
      storage.child(name).put(img).then(() => {
        storage.child(name).getDownloadURL().then((url) => {
          founderInfo.url = url
          commit("editFounder", {founderData: founderInfo, ind: founderEditorInd});
        })
      })
    },
  addStartup({commit}, {img, startupInfo}) {
    let name = img.name.split(".")[0]+'_startup_'+ Math.floor(Math.random() * 30)
    storage.child(name).put(img).then(() => {
    storage.child(name).getDownloadURL().then((url) => {
      startupInfo.url = url
      commit("addStartup", startupInfo);
      })
    })
  },
  addVC({commit}, {img, vcInfo}) {
    let name = img.name.split(".")[0]+'_vc_'+ Math.floor(Math.random() * 30)
    storage.child(name).put(img).then(() => {
    storage.child(name).getDownloadURL().then((url) => {
      vcInfo.url = url
      commit("addVC", vcInfo);
      })
    })
  },
  removeVC({state},{ind}) {
    state.venturecapital.arr.splice(ind, 1)
    state.db.collection("Pages").doc("venturecapital").set({arr: state.venturecapital.arr}, {merge:false})
  },
  addLeadership({commit}, {img, leadershipInfo}) {
    let name = img.name.split(".")[0]+'_leadership_'+ Math.floor(Math.random() * 30)
    storage.child(name).put(img).then(() => {
    storage.child(name).getDownloadURL().then((url) => {
      leadershipInfo.img = url
      commit("addLeadership", leadershipInfo);
      })
    })
  },
  removeLeadership({state},{ind}) {
    state.leadership.arr.splice(ind, 1)
    state.db.collection("Pages").doc("leadership").set({arr: state.leadership.arr}, {merge:false})
  },
  submitLeadershipOrder({state}) {
    state.db.collection("Pages").doc("leadership").set({arr: state.leadership.arr}, {merge:false})
  },
  flipMessageSending({state}) {
    state.db.collection("Pages").doc("messages").set({isOn: !state.messages.isOn}, {merge:true})
  },
  addMessage({state}, out) {
    console.log('here i am')
    if(state.hasSentMessage && state.messages.isOn) return
    state.hasSentMessage = true
    state.messages.arr.push(out)
    state.db.collection("Pages").doc("messages").set({arr: state.messages.arr}, {merge: true})
  },
  },
  modules: {
  }
})
