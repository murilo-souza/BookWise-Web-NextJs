import { AvatarImage, Container } from './styles'

interface AvatarProps {
  size: 'sm' | 'md' | 'lg'
  src: string
  alt: string
}

export function Avatar({ size, src, alt }: AvatarProps) {
  return (
    <Container size={size}>
      <AvatarImage src={src} alt={alt} width={80} height={80} />
    </Container>
  )
}
