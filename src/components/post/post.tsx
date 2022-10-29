import { Container } from "./styles"

type PostProps ={
    children: React.ReactNode
}

export const Post = ({children}: PostProps) =>{
    return(
        <Container>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <time>29 Out, 2022</time>
            <h1>Titulo da postagem</h1>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur odio iste nemo? Eum hic consequuntur beatae nam aliquam facere, tempora, deleniti animi minus accusantium ea quisquam corrupti inventore? Maxime.</h2>
            <div>
                <p>JavaScript</p>
                <p>ReactJs</p>
            </div>
        </Container>
    )
}