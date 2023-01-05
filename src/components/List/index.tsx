import { ListContainer } from "./style";

interface ListProps {
    children: any;
}

export default function List({ children }: ListProps) {
    return(
        <ListContainer>
            {children}
        </ListContainer>
    )
}