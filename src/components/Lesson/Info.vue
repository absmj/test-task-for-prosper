<template>
    <section id="lesson">
        <div class="card">
            <div class="card-body deadline-info">
                Dərsi bitirməyiniz üçün son tarix&nbsp;{{$root.getDeadlineEnd($store.getters.getActiveParagraph?.deadline)}}
            </div>
        </div>

        <div class="lesson-video">
            <iframe src="https://www.youtube.com/embed/Qwu43z-RJOU" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>

        <p class="mt-3 mb-4">Salam, hörmətli təlim iştirakçısı. Kursa tanışlıq videosuna baxmağınız xahiş olunur.</p>

        <div>
            <button type="button" class="btn btn-success me-1"><bookmark />&nbsp;Təlimə dair materiallar</button>
            <button type="button" class="btn btn-primary btn-additional ms-1"><check />&nbsp;Testlər</button>
        </div>

    </section>
</template>