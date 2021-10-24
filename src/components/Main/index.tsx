import * as S from './styles'

const Main = ({
  title = 'Mira Admin',
  description = 'Admin da iniciativa mira'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
