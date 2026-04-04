
import { Container } from "../components/container"
import HomePageComponent from "../components/home/home-component"

export const HomePage = () => {
  return (
   <div className="mx-auto max-w-3xl border-l border-r shadow-2xl shadow-primary-foreground">
     <Container>
        <HomePageComponent/>
    </Container>
   </div>
  )
}
