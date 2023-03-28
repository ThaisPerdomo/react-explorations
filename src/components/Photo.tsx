import { ReactNode } from 'react';

type Props = {
    legenda: string;
    children: ReactNode;
}

export const Photo = ( {legenda, children}: Props) =>{
    return (
        <>
            {children}
            <p>{legenda}</p>
        </>
    )
}