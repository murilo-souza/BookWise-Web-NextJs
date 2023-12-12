import { AvatarImage, Container } from './styles'

interface AvatarProps {
  AvatarSize: 'sm' | 'md' | 'lg'
  src: string
  alt: string
}

export function Avatar({ AvatarSize, src, alt }: AvatarProps) {
  return (
    <Container AvatarSize={AvatarSize}>
      <AvatarImage src={src} alt={alt} width={80} height={80} />
    </Container>
  )
}
