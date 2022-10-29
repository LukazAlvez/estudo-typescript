import { Container } from "./styles"

type ContentProps = {
    children: React.ReactNode
}

export const Content = ({children}: ContentProps) => {
    return(
        <Container>
            {children}
        </Container>
    )
}