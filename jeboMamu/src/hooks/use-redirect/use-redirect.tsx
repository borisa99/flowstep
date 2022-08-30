const useRedirect = () => {
  const redirectOutside = (url: string, targetBlank: boolean) => {
    const link = document.createElement('a')
    link.href = url
    if (targetBlank) {
      link.target = '_blank'
    }
    link.click()
    targetBlank && link.remove()
  }

  return {
    redirectOutside,
  }
}

export default useRedirect
