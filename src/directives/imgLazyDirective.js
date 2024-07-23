import { useIntersectionObserver } from '@vueuse/core'
export default {
  mounted: (el) => {
    const catchSrc = el.src
    el.src = 'https://res.lgdsunday.club/img-load.png'
    console.log(catchSrc)
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = catchSrc
        stop()
      }
    })
  }
}
