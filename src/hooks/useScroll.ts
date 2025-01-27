import { useCallback } from 'react'

export const useScroll = () => {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id)
    const headerElement = document.getElementById('header')
    const mainElement = document.getElementById('main-container')

    if (element && mainElement) {
      // Obtener el margen superior dinámicamente
      const computedStyle = window.getComputedStyle(element)
      const marginTop = parseInt(computedStyle.marginTop, 10) || 0
      const computedMainElementStyle = window.getComputedStyle(mainElement)
      const mainElementMarginTop =
        parseInt(computedMainElementStyle.marginTop, 10) || 0
      const headerHeight = headerElement?.getBoundingClientRect().height || 0
      const extraHeight = headerHeight + mainElementMarginTop

      // Calcular la posición de desplazamiento con ajuste del margen
      const yPosition =
        element.getBoundingClientRect().top - marginTop - extraHeight

      window.scrollTo({ top: yPosition, behavior: 'smooth' })
    }
  }, [])
  return { scrollTo }
}
