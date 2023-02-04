export default {
    state: () => ({
        loading: true,
        lessons: [],
        activeLesson: 1,
        activeSubject: 1,
        activeParagraph: 1,
        currentQuestion: 0,
        types: [],
        questions: []
    }),

    actions: {
        async getLessons({commit}) {
            commit('setLoading', true)
            try {
                const request = await fetch("mock/lessons.json")
                const response = await request.json()
                commit('setLessons', response)
            } catch(e) {
                alert("Error happened when fetching lessons: " + e.message)
            } finally {
                commit('setLoading', false)
            }
        },
        async getQuestions({commit}) {
            commit('setLoading', true)
            try {
                const request = await fetch("mock/questions.json")
                const response = await request.json()
                commit('setQuestions', response)
            } catch(e) {
                alert("Error happened when fetching questions: " + e.message)
            } finally {
                commit('setLoading', false)
            }
        },

        async getTypes({commit}) {
            commit('setLoading', true)
            try {
                const request = await fetch("mock/types.json")
                const response = await request.json()
                commit('setTypes', response)
            } catch(e) {
                alert("Error happened when fetching types: " +  e.message)
            } finally {
                commit('setLoading', false)
            }
        },

        reply({commit}, variant) {
            commit('replyQuestion', variant)
        }
    },
    mutations: {
        setLoading(state, bool) {
            state.loading = bool
        },
        setLessons(state, data) {
            state.lessons.push(...data)
        },
        setQuestions(state, data) {
            state.questions.push(...data)
        },
        setTypes(state, data) {
            state.types.push(...data)
        },
        replyQuestion(state, data) {
            state.questions[s]
        },
        setCurrentQuestion(state, data) {
            state.currentQuestion = data;
        }
    },
    getters: {
        activeLesson: state => {
            return state.lessons.findIndex(lesson => lesson.id === state.activeLesson)
        },

        getLesson: (state, getters) => {
            return state.lessons[getters.activeLesson];
        },

        
        activeSubject: (state, getters) => {
            return getters.getLesson.sections.findIndex(subject => subject.id == state.activeSubject);
        },

        getSubject: (state, getters) => {
            return getters.getLesson.sections[getters.activeSubject];
        },

        activeParagraph: (state, getters) => {
            return getters.getSubject.paragraphs.findIndex(p => p.id === state.activeParagraph);
        },

        getActiveParagraph: (state, getters) => {
            return getters.getSubject.paragraphs[getters.activeParagraph];
        },

        getLessonQuestions: state => {
            return state.questions.filter(question => question.lesson_id == state.activeLesson);
        },

        getLessonQuestion: state => {
            const index = state.questions.findIndex(question => question.lesson_id == state.activeLesson);
            return state.questions[index].questions[state.currentQuestion]
        },
    }
}