import DirectionButton from '@components/elements/DirectionButton/directionButton.component'

type Props = {
  className?: string
}

export default function BackToTopButton(props: Props) {
  function backToTheTop() {
    window.scrollTo(0, 0)
  }

  return (
    <DirectionButton
      direction="up"
      onClick={backToTheTop}
      className={props.className}
    />
  )
}
