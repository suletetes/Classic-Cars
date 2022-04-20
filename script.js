document.querySelector('.menu').addEventListener('click', function () {
    document.querySelectorAll('.target').forEach((item, i) =>{
        item.classList.toggle('change')
    })

})
document.querySelectorAll('.wrapper').forEach((item)  =>{
    item.addEventListener('click', () =>{
        document.querySelectorAll('.target').forEach((item, i) =>{
            item.classList.remove('change')
        })
    })
})

const videos = document.querySelectorAll('.video')
videos.forEach((video, i) => {
    video.addEventListener('mouseover', () => {
        video.play()
    })
    video.addEventListener('mouseout', () => {
        video.pause()
    })
})
