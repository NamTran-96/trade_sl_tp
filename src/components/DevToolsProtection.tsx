'use client'

import { useEffect } from 'react'

export function DevToolsProtection() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+I / Cmd+Option+I (Dev Tools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+J / Cmd+Option+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+U / Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+S / Cmd+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
        return false
      }
    }

    // Detect DevTools
    const detectDevTools = () => {
      const threshold = 160
      const widthThreshold = window.outerWidth - window.innerWidth > threshold
      const heightThreshold = window.outerHeight - window.innerHeight > threshold
      
      if (widthThreshold || heightThreshold) {
        // DevTools might be open - optionally take action
        // console.clear() // Clear console to remove sensitive logs
      }
    }

    // Clear console
    const clearConsole = () => {
      if (typeof console.clear === 'function') {
        console.clear()
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    
    // Check for DevTools periodically
    const interval = setInterval(detectDevTools, 1000)
    
    // Initial console clear
    clearConsole()
    
    // Override console methods in production
    if (process.env.NODE_ENV === 'production') {
      const noop = () => {}
      console.log = noop
      console.debug = noop
      console.info = noop
      console.warn = noop
      // Keep console.error for debugging critical issues
    }

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      clearInterval(interval)
    }
  }, [])

  return null
}
