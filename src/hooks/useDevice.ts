import { useBreakpoint } from "gatsby-plugin-breakpoints"

const useDevice = () => {
  const breakpoints = useBreakpoint()
  const isMobile = !breakpoints.xs && breakpoints.sm && breakpoints.md && breakpoints.l
  const isTablet = !breakpoints.xs && !breakpoints.sm && breakpoints.md && breakpoints.l

  return  {
      isMobile,
      isTablet
  }
}

export default useDevice