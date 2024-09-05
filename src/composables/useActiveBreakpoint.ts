import {breakpoints} from "@/config/constants";
import { useBreakpoints } from '@vueuse/core'

export function useActiveBreakpoint() {
  const detectBreakpoint = useBreakpoints(breakpoints)
  const activeBreakpoint = detectBreakpoint.active()
  return {
    activeBreakpoint
  }
}