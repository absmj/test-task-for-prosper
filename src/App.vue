<template>
  <header>
    <Navigation />
  </header>

  <main v-if="loaded">
    <div class="container mt-2">
      <div class="navigation-lesson">
        <div class="mb-4">
          <div class="d-inline" id="back-to">
            <back />&nbsp;<strong class="ms-3">Geri</strong>
          </div>
        </div>
        <h6 class="text-small-4">Bölmə&nbsp;{{$store.getters.getSubject?.id}}:&nbsp;{{$store.getters.getSubject?.title}}
        </h6>
        <h6>{{$store.getters.getActiveParagraph?.id}}.&nbsp;{{$store.getters.getActiveParagraph?.title}}</h6>
      </div>


      <div class="d-flex justify-content-end mt-2 mb-2">
        <div>
          <button type="button" class="btn btn-light me-1">
            <chart />&nbsp;
            Dərs cədvəli və nəticələriniz
          </button>
          <button @click="hide ^= true" :style="{'background-color': hide ? 'var(--test-task-color-6)' : 'var(--test-task-color-2)' }" type="button" class="btn btn-light px-2"><hide /></button>
        </div>
      </div>

      <div class="row">
        <template v-if="hide">
          <div class="col-12">
            <info />
            <exam />
          </div>
        </template>

        <template v-else>
          <div class="col-12 col-lg-6">
            <info />
            <exam />
          </div>
          <div class="d-none d-lg-block offset-lg-1 col-lg-5">
            <content />
          </div>
        </template>
      </div>
    </div>
  </main>
  <loading v-else />
  <bottom-footer />
</template>



<script>
  import { Content, Exam, Info } from "./components/Lesson/index.js"

  export default {
    data() {
      return {
        loaded: false,
        hide: false
      }
    },
    components: { Content, Exam, Info },

    methods: {
      getDeadlineEnd(deadline) {
        return this.generateReadibleDeadLine(deadline?.split("|").at(-1), false);
      },

      readebleMonth(month) {
        month = Number(month)
        switch (month) {
          case 1:
            return "yanvar";

          case 2:
            return "fevral";

          case 3:
            return "mart";

          case 4:
            return "aprel";

          case 5:
            return "may";

          case 6:
            return "iyun";

          case 7:
            return "iyul";

          case 8:
            return "avqust";

          case 9:
            return "sentyabr";

          case 10:
            return "oktyabr";

          case 11:
            return "noyabr";

          case 12:
            return "dekabr";
        }
      },

      generateReadibleDeadLine(deadline, suffix = true) {
        let day = [], time = [], text = null;
        const generate = deadline?.replace(/(\d{1,2})\.(\d{1,2})~(\d{1,2}:\d{2})/g, (match, p1, p2, p3) => {

          if (!time.includes(p3)) {
            time.push(p3)
          }

          if (!day.includes(p1)) {
            day.push(p1)
          }

          text = day.map((d, k) => new String(`${d} ${this.$root.readebleMonth((p2))}, ${time?.[k]}`))

        })

        text = new String(text.join(" - "))
        return !/-/.test(text) && suffix ? text.replace(/(\d{1,2}:\d{1,2})$/, "$1-dək") : text;
      },
    },

    async mounted() {
      await this.$store.dispatch("getLessons")
      await this.$store.dispatch("getQuestions")
      await this.$store.dispatch("getTypes")
      this.loaded = true
    },
  }
</script>

<style scoped>

</style>