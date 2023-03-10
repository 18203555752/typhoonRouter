export interface AnimationParmas {
  length: number
  callBack: (cur: number) => void
  successCallback?: () => void
}

export default function myAnimation(parmas: AnimationParmas) {
  let current = 0
  const length = parmas.length - 1
  const callBack = parmas.callBack
  const successCallback = parmas.successCallback
  let looped: number | null
  const looping = () => {
    looped = requestAnimationFrame(looping)
    // console.log(current)
    if (current < length) {
      callBack(current)
      current = current + 1 >= length ? length : current + 1
    } else {
      // console.log(current)
      callBack(current)
      cancelAnimationFrame(looped)
      looped = null
      successCallback && successCallback()
    }
  }

  looping()

  return function() {
    if( looped ){
      cancelAnimationFrame(looped)
      looped = null
    }
  }
}
