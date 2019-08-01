import React from 'react'
import {StyledJumbo} from '../styles/components'
import {Image} from './exports'

export default function Jumbo() {
    return (
        <StyledJumbo>
            <div>
                <h2>consigue el mejor swag exclusivo y especial de platzi</h2>
                <small>piezas elegantes para los mejores estudiantes</small>
            </div>
            <Image name='icon'/>
        </StyledJumbo>
    )
}
