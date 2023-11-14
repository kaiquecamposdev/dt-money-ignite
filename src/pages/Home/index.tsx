import { Form } from '@/components/Form'
import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'
import { Container, Content, MainContainer, MainContent } from './styles'

export function Home() {
  return (
    <Container>
      <Content>
        <Header />
        <MainContainer>
          <MainContent>
            <Summary />
            <Form />
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  )
}
