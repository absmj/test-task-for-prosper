<template>
    <section id="lesson-content">


        <div class="accordion" id="accordionExample">
            <div v-for="intro in $store.getters.getLesson?.sections || []" :key="intro.id" class="accordion-item">
                <h2 class="accordion-header" :id="'heading' + intro.id">
                    <button class="accordion-button" :class="!intro.isActive ? 'collapsed' : ''" type="button"
                        data-bs-toggle="collapse" :data-bs-target="'#collapse' + intro.id"
                        :aria-expanded="intro.isActive ? 'true' : 'false'" :aria-controls="'collapse' + intro.id">
                        <div class="d-flex">
                            <span>Bölmə&nbsp;{{intro.id}}:</span>
                            <span class="mx-2">
                                {{intro.title}}
                            </span>
                        </div>


                    </button>
                </h2>
                <div :id="'collapse' + intro.id" class="accordion-collapse collapse"
                    :class="intro.isActive ? 'show' : ''" :aria-labelledby="'heading' + intro.id">
                    <div class="accordion-body">
                        <div class="lesson-content-body ps-4" v-for="paragraph in intro.paragraphs || []" :key="paragraph.id"
                            :is-active="Number(paragraph.isActive)">
                            <div class="title"><strong>{{paragraph.id}}.&nbsp;{{paragraph.title}}</strong></div>
                            <dd class="row time m-0">
                                <dl class="col-12 col-lg-3 p-0">
                                    <badge>{{getType(paragraph.type).title}}</badge>
                                </dl>

                                <dl class="col-12 col-lg-9 p-0">
                                    <clock />
                                    {{$root.generateReadibleDeadLine(paragraph.deadline)}}
                                </dl>
                            </dd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'LessonContent',
        methods: {
            getType(lessonType) {
                const index = this.$store.state.types.findIndex(type => type.id == lessonType)
                return this.$store.state.types[index];
            }
        },
    }
</script>