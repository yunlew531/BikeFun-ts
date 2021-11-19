import { ref, onUnmounted, Ref } from 'vue'

type wheelDirection = 'up' | 'down'

interface UseWheel {
  wheelDirection: Ref<wheelDirection | undefined>;
}

export const useWheel = (): UseWheel => {
  const wheelDirection = ref<wheelDirection>()

  const handleWheelDirection = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      wheelDirection.value = 'down'
    } else {
      wheelDirection.value = 'up'
    }
  }

  window.addEventListener('wheel', handleWheelDirection)

  onUnmounted(() => {
    window.removeEventListener('wheel', handleWheelDirection)
  })

  return {
    wheelDirection
  }
}
