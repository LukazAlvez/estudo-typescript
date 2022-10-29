import { HeaderBar, Container, Brand } from "./styles"

export const Header = () =>{
    return(
        <HeaderBar>
            <Container>
                <Brand>
                    <img src="https://media-exp1.licdn.com/dms/image/D4D03AQGkoyvweXvcGg/profile-displayphoto-shrink_400_400/0/1664824073026?e=1672272000&v=beta&t=XbkRYMNyjSFrWrd2VDXz5d4Vzgd9zLjmQNQpKqHdlq8" alt="Lucas Alves" />
                    <h1>&lt;Lucas Alves /&gt;</h1>     
                </Brand>
            </Container>
        </HeaderBar>
    )
}