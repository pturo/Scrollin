<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input class="new-scroll" autogrow bottom-slots v-model="newScrollContent" placeholder="What have you learnt today?" counter maxlength="300">
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="~assets/img/tsparkle.png">
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn @click="addNewScroll" :disable="!newScrollContent" class="q-mb-lg" rounded color="primary" label="Send" no-caps />
        </div>
      </div>
      <q-separator class="divider" size="10px" color="grey-2" />
      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >

          <q-item class="scroll q-py-md" v-for="scroll in scrolls" :key="scroll.id">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="~assets/img/tsparkle.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Twilight Sparkle</strong>
                <span class="text-grey-7">
                  @twilight_sparkle
                  <br class="lt-md">&bull; {{ scroll.date | relativeDate }}
                </span>
              </q-item-label>
              <q-item-label class="scroll-content text-body1">
                {{scroll.content}}
              </q-item-label>
              <div class="scroll-icons row justify-between q-mt-sm">
                <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
                <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
                <q-btn @click="toggleLike(scroll)" flat round :color="scroll.liked ? 'red' : 'grey'" :icon="scroll.liked ? 'fas fa-heart' : 'far fa-heart'" size="sm" />
                <q-btn @click="deleteScroll(scroll)" flat round color="grey" icon="fas fa-trash" size="sm" />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { formatDistance } from 'date-fns'
import db from 'src/boot/firebase'

export default {
  name: 'PageHome',
  data () {
    return {
      newScrollContent: '',
      scrolls: [
        /* {
          content: 'Sing a song! You need to be strong!',
          date: 1611653238221
        },
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore quae voluptas libero eum atque aspernatur laboriosam. Perferendis debitis distinctio beatae laudantium facere consequatur, libero, repellendus enim suscipit quis reprehenderit.',
          date: 1611653252444
        } */
      ]
    }
  },
  methods: {
    addNewScroll () {
      const newScroll = {
        content: this.newScrollContent,
        date: Date.now(),
        liked: false
      }
      // this.scrolls.unshift(newScroll)
      db.collection('scrolls').add(newScroll).then((docRef) => {
        console.log('Document written with ID: ', docRef.id)
      }).catch((error) => {
        console.error('Error adding document: ', error)
      })
      this.newScrollContent = ''
    },
    deleteScroll (scroll) {
      db.collection('scrolls').doc(scroll.id).delete().then(() => {
        console.log('Document successfully deleted!')
      }).catch((error) => {
        console.error('Error removing document: ', error)
      })
    },
    toggleLike (scroll) {
      db.collection('scrolls').doc(scroll.id).update({
        liked: !scroll.liked
      }).then(() => {
        console.log('Document successfully updated!')
      }).catch((error) => {
        console.error('Error updating document: ', error)
      })
    }
  },
  filters: {
    relativeDate (value) {
      return formatDistance(value, new Date())
    }
  },
  mounted () {
    db.collection('scrolls').orderBy('date').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const scrollChange = change.doc.data()
        scrollChange.id = change.doc.id
        if (change.type === 'added') {
          console.log('New scroll: ', scrollChange)
          this.scrolls.unshift(scrollChange)
        }
        if (change.type === 'modified') {
          console.log('Modified scroll: ', scrollChange)
          const index = this.scrolls.findIndex(scroll => scroll.id === scrollChange.id)
          Object.assign(this.scrolls[index], scrollChange)
        }
        if (change.type === 'removed') {
          console.log('Removed scroll: ', scrollChange)
          const index = this.scrolls.findIndex(scroll => scroll.id === scrollChange.id)
          this.scrolls.splice(index, 1)
        }
      })
    })
  }
}
</script>

<style lang="sass">
.new-scroll
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.scroll:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.scroll-content
  white-space: pre-line
.scroll-icons
  margin-left: -5px
</style>
