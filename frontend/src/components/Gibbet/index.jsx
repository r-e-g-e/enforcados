import React, { useEffect, useState } from "react"
import { Container } from "./styles"

const personaParts = ['persona__leg--right', 'persona__leg--left', 'persona__arm--right', 'persona__arm--left', 'persona__body', 'persona__head']

export function Gibbet({ lifes }) {
  const [persona, setPersona] = useState([])

  useEffect(() => {
    const persona = []
    for (let i = lifes; i < personaParts.length; i++) {
      persona.push(
        <div key={i} className={personaParts[i]}></div>
      )
    }

    setPersona(persona)
  }, [lifes])

  return (
    <Container>
      <div className="gibbet">
        <div className="gibbet__rope">
          <div className="gibbet__persona">
            {persona}
          </div>
        </div>
      </div>
    </Container>
  )
}