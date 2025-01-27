import { useEffect, useState } from 'react'

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark'
}

export type darkModeType = [ThemeEnum | null, () => void]

export function useDarkMode(): darkModeType {
  const [theme, setTheme] = useState<ThemeEnum | null>(null)

  const setMode = (mode: ThemeEnum) => {
    if (!mode) return
    window.localStorage.setItem('theme', mode)
    document.documentElement.className = mode
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === ThemeEnum.LIGHT
      ? setMode(ThemeEnum.DARK)
      : setMode(ThemeEnum.LIGHT)
  }

  useEffect(() => {
    const prefersColorSchema = window.matchMedia('(prefers-color-scheme: dark)')
    const systemTheme = prefersColorSchema.matches
      ? ThemeEnum.DARK
      : ThemeEnum.LIGHT
    const currentTheme = window.localStorage.getItem('theme')

    setMode((currentTheme as ThemeEnum) || systemTheme)
  }, [theme])

  return [theme, toggleTheme]
}
