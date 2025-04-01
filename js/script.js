document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle')
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

  // Get theme from localStorage
  const currentTheme = localStorage.getItem('color-theme')

  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark') // Ensure dark mode is applied
    themeToggleLightIcon.classList.remove('hidden') // Show light icon
    themeToggleDarkIcon.classList.add('hidden') // Hide dark icon
  } else {
    document.documentElement.classList.remove('dark') // Ensure light mode is applied
    themeToggleDarkIcon.classList.remove('hidden') // Show dark icon
    themeToggleLightIcon.classList.add('hidden') // Hide light icon
  }

  // Toggle theme on button click
  themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark') // Switch theme

    // Update localStorage
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('color-theme', 'dark')
      themeToggleLightIcon.classList.remove('hidden')
      themeToggleDarkIcon.classList.add('hidden')
    } else {
      localStorage.setItem('color-theme', 'light')
      themeToggleDarkIcon.classList.remove('hidden')
      themeToggleLightIcon.classList.add('hidden')
    }
  })
})
