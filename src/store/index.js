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
    isAdmin: true,
    isSending: false,
    leadership: 
    [
      {
        name: "Julia Egan",
        title: "President",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996082_Egan_Julia012jpg_10416498.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Jama Mohamed",
        title: "Founders",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996215_20171009171638_IMG_002503jpeg_101420297.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Christopher Abad",
        title: "Admissions",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_706365_30955549328_a22ea79b58_ojpg_52422342.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Addy Quirk",
        title: "Startup Recruiting",
        img: "https://static1.campusgroups.com/images/ico/male_user_large.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Angela Klein",
        title: "Officer",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2017/s3_image_upload_536553_12747956_10154332916261754_8030394093390064216_o_92218246_crop.jpg",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Holly Han",
        title: "Officer",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_536558_profilejpg_49232647.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Janet Chung",
        title: "Officer",
        img: "https://static1.campusgroups.com/images/ico/female_user_large.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Jackson Foster",
        title: "D48s",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2020/s3_image_upload_996093_Foster_Jackson005jpg_11012028.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Maura Liebendorfer",
        title: "Alumni Relations",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996185_Liebendorfer_Maura007jpg_92920228.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Mitzi Benavides",
        title: "Competitions",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_996236_upload_10416535_10416535.jpg",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "PRATYUSH KANKANWADI",
        title: "Competitions",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2018/s3_image_upload_678289_99d4cc7daba54d84b6f6780b25c0aecb_1016152119.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Alec Steinfeld",
        title: "MBA Program Relations",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_1208018_WhatsApp_Image_20190924_at_121026jpeg_1111123220.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Frank DiZenzo",
        title: "Business Formation",
        img: "https://static1.campusgroups.com/images/ico/male_user_large.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Alan Spindel",
        title: "Speaker Series",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_996285_upload_93013522_93013522.jpg",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Mai Bui",
        title: "Innovation",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996024_Bui_Mai0091jpg_111513348.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Andy Chang",
        title: "Technology",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2020/s3_image_upload_996034_Chang_11716320.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Daniel Beckerman",
        title: "Marketing",
        img: "https://static1.campusgroups.com/images/ico/male_user_large.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Lucy Zhou",
        title: "External Relations",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996343_Zhou_Lucy008jpg_1021211320.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Luke Katz",
        title: "DOJs",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_upload_996149_Anderson_Headshotjpg_10915148.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Lindsay Miller",
        title: "Venture Capital",
        img: "https://static1.campusgroups.com/upload/uclaanderson/2019/s3_image_996213_upload_102415511_102415511.jpg",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      },
      {
        name: "Arun Gajendran Karunmurthi",
        title: "Finance",
        img: "https://static1.campusgroups.com/images/ico/male_user_large.png",
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
        email: '',
        linkedin: '',
      }
    ],
    founders: [
      {
          url: "https://i.imgur.com/QeYfrxi.png",
          name: 'Sahara',
          desc: 'Sahara is a SaaS platform that enables users to build physical products without downloading any software or purchasing any electronics, letting them prototype quickly and cheaply from anywhere. Our platform accomplishes this by allowing developers to connect to circuit boards, chips, and test equipment we host in the cloud.',
          team: "Andy Chang, UCLA Anderson 2021 Josh Kimmel, UCLA Anderson 2021 Annie Lu, UCLA Anderson 2021 Jama Mohamed, UCLA Anderson 2021 Elaine Park, UCLA Law 2021",
          looking: "",
      },
      {
          url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/91/a8/3c/d0/4cbeafbed81f29bb61d0a391_262x130.jpg",
          name: 'RealAppeal',
          desc: 'For property owners who want to reduce their property taxes, realAppeal uses localized data and machine learning to file property tax appeals on your behalf, reducing your liability and in turn saving you money.',
          team: "Colton Pace (EMBA '21), Frank DiZenzo (EMBA '21), Maura Liebendorfer (EMBA '21)",
          looking: "Lawyer (real estate specialist)",
      },
      {
          url: "https://i.imgur.com/UosxPAK.png",
          name: 'Oya Apparel',
          desc: 'OYA Apparel is the first company to design health-inspired, direct-to-consumer leggings for a woman’s fit and lifestyle needs. Our pro-woman brand will normalize conversations around women’s health while increasing a woman’s confidence about her needs.',
          team: "Patrick Ayers, UCLA Anderson 2021 Mitchella Gilbert, UCLA Anderson 2021 Mac Seder, UCLA Anderson 2021 Ashley Sykora, UCLA Law 2021 Raylan Vaz, UCLA Anderson 2021",
          looking: "",
      },
      {
          url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/2e/78/0f/d1/b9ec9b394d9ce5584aadb3fb_214x214.jpg",
          name: 'Socialite',
          desc: 'Socialite is an on-demand staffing platform for events and experiential marketing agencies, that uses matchmaking technology to fill shifts in real-time with promotional models, bartenders, servers and photographers. ',
          team: "Ania Puczylowska (EMBA '20), Matthew Cole (EMBA '20), Stephen A. Johnson (FEMBA '21), Naomi Chi (FEMBA '21)",
          looking: "",
      },
      {
          url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/bb/fc/c5/20/8d98948bb19bf1b41c59e8fe_238x130.jpg",
          name: 'Gleam',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
          team: "",
          looking: "",
      },
      {
          url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/6a/d8/c5/6f/5e3daabd2875280bcbbb45e5_238x76.jpg",
          name: 'Outpace Cancer',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
          team: "",
          looking: "",
      },
      {
          url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/74/01/64/5c/f29563d13e806f8eba4a5f31_166x166.jpg",
          name: 'PDR Chemical',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
          team: "",
          looking: "",
      },
      {
          url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/e1/09/47/bb/51b9bcaa7b3a221f1f654df9_226x120.jpg",
          name: 'Protean',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
          team: "",
          looking: "",
      },
      {
          url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/4f/47/33/1e/85e04bb81b840a3d319c109b_250x88.jpg",
          name: 'Rest.',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
          team: "",
          looking: "",
      },
      {
          url: "http://d31hzlhk6di2h5.cloudfront.net/20200423/93/db/e9/d5/0d760de193c6b1630a4fc61e_238x132.jpg",
          name: 'Wine Vision',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet dui. Aliquam erat volutpat. Suspendisse rutrum ultrices neque, a dictum odio vehicula',
          team: "",
          looking: "",
      },
    ],
    venturecapital: 
      [
          {
              name: 'Hiyo', 
              url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/hiyo.jpg'
          },
          {
              name: 'Wire', 
              url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/wire.jpg',
          },
          {
              name: 'Vhomes', 
              url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/vhomes.jpg'
          },
          {
              name: 'RealAppeal', 
              url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/real.jpg'
          },
          {
              name: 'Gen Beauty', 
              url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/gen.jpg'
          },
          {
              name: 'Sahara',
              url: 'https://i.imgur.com/QeYfrxi.png',
          },
          {
              name: 'Gucci', 
              site: 'Gucci.com'
          },
          
      ],
    startup: 
      [
        {
            name: 'Hiyo', 
            url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/hiyo.jpg'
        },
        {
            name: 'Wire', 
            url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/wire.jpg',
        },
        {
            name: 'Vhomes', 
            url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/vhomes.jpg'
        },
        {
            name: 'RealAppeal', 
            url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/real.jpg'
        },
        {
            name: 'Gen Beauty', 
            url: 'https://www.anderson.ucla.edu/images/2017/sites/centers/price/knapp/2020/gen.jpg'
        },
        {
            name: 'Sahara',
            url: 'https://i.imgur.com/QeYfrxi.png',
        },
        {
            name: 'Gucci', 
            site: 'Gucci.com'
        },
          
      ]
  },
  getters: {
    getVentureCapital(state){
      return state.venturecapital
    },
    getStartUps(store){
      return store.startup
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
  },
  mutations: {
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
    pushToFirebase(state,val) {
      state.isSending = true
      console.log("Document is being written!", state.isSending);
      if (state.updatingDocument == "Home"){
        console.log("PUPPIES")
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
      }
      else {
        state.db.collection("Pages").doc(state.updatingDocument.toLowerCase()).set({arr: val})
        .then(function() {
            state.isSending = false
            console.log("Document successfully written!", state.isSending);
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
      console.log(state)
        state.db.collection('Pages').get()
          .then(querySnapshot => {
            querySnapshot.docs.map(doc => {
              if (!doc.exists) {
                console.log('No such document!');
              } else {
                console.log(doc.id + ' Document data:', doc.data());
                if (doc.id == "home"){
                  state[doc.id] = doc.data()
                }else{
                  state[doc.id] = doc.data()['arr']
                }
              }
            })
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
