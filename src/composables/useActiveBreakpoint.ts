import { useBreakpoints } from '@vueuse/core'
import { breakpoints } from '@/config/constants'

export function useActiveBreakpoint() {
  const detectBreakpoint = useBreakpoints(breakpoints)
  const activeBreakpoint = detectBreakpoint.active()
  return {
    activeBreakpoint,
  }
}
