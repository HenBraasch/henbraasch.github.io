import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

const messages = {
  en: {
    message: {
      about: 'About Me',
      contact: 'Contact Me',
      findMeOnLinkedin: 'Find Me On Linkedin',
      thatsMe: 'I am software engineer, tech enthusiast and father from Christchurch, New Zealand.',
      aboutMeTitle: 'About Hendrik Braasch',
      aboutParagraphOne: `I am a strategic thinker who can break complex data,
      issues and challenges into easily understandable parts for stakeholders and
      use this knowledge to create well-rounded web and software applications.`,
      aboutParagraphTwo: `I have a natural understanding of structures,
      processes and software tools and am not afraid to
      challenge the status quo and bring in new ideas and solutions
      while aligning with company values.`
    }
  },
  de: {
    message: {
      about: 'Über mich',
      contact: 'Kontakt',
      findMeOnLinkedin: 'Zu meinem Linkedin Profil',
      thatsMe: 'Ich bin ein Technologie begeisterter Software Entwickler und Vater aus Christchurch, Neuseeland.',
      aboutMeTitle: 'Über Hendrik Braasch',
      aboutParagraphOne: `Ich bin ein erfahrener Software Entwickler mit einem Hintergrund im Kundenservice.
      Mein Schwerpunkt liegt in der Planung, Entwicklung und Integration von REST APIs.`,
      aboutParagraphTwo: `Durch meinen mehrjährigen Auslandsaufenthalt in Neuseeland verfüge ich über tiefgreifende 
      Erfahrungen im Umgang mit anderen Kulturen und ausgezeichnete, verhandlungssichere Englischkenntnisse. 
      Arbeiten in internationalen Teams ist daher für mich kein Problem, sondern erstrebenswert.`
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'de',
  messages
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
