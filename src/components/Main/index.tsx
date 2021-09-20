import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logoreact.svg" alt="imagem de um átomo" />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, React JS, NextJS e Styled Components
    </S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a tela com código."
    />
  </S.Wrapper>
)

export default Main
