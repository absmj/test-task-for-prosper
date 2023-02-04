<template>
    <section id="exam">
        <div class="mt-4 lesson-exam">
          <h5 class="pb-3">{{$store.getters.getLessonQuestion?.title}}</h5>

          <div class="card p-2 mb-2 variant"
              v-for="(title, variant) in $store.getters.getLessonQuestion.variants" 
              :key="variant" @click="answer($store.state.currentQuestion, variant)"
              :selected="Number(answers.findIndex(a => a.id == $store.state.currentQuestion && a.variant == variant) != -1)"    
          >
            <div class="card-body">
              {{variant}})&nbsp;{{title}}
            </div>
          </div>

        </div>
        <div class="d-flex justify-content-between mt-3 mb-5">
          <button :disabled="$store.state.currentQuestion === 0" @click="$store.state.currentQuestion > 0 ? $store.commit('setCurrentQuestion', $store.state.currentQuestion - 1) : false" class="btn btn-light">
            <left />
            Əvvəlki sual
          </button>
          <button :disabled="$store.state.currentQuestion === $store.getters.getLessonQuestions.length" 
            @click="$store.getters.getLessonQuestions.length > $store.state.currentQuestion ? $store.commit('setCurrentQuestion', $store.state.currentQuestion + 1) : false" class="btn btn-success">
            Növbəti sual&nbsp;
            <right />
          </button>
        </div>

      </section>
</template>

<script>
    export default {
        data() {
            return {
              answers: []
            }
        },

        methods: {
          answer(id, variant) {
            const index = this.answers.findIndex(a => a.id == id)
            if(index == -1)
              this.answers.push({id, variant});
            else 
              this.answers.splice(id, 1, {id, variant});
          }
        },

        mounted() {

        },
    }
</script>