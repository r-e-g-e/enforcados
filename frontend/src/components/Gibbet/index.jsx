import React from "react"
import { Container } from "./styles"

export function Gibbet({lifes}) {
  return (
    <Container>
      <div className="gibbet">
        <div className="gibbet__rope">
          <div className="gibbet__persona">
            <div className="persona__head"></div>
            <div className="persona__body"></div>
            <div className="persona__arm--left"></div>
            <div className="persona__arm--right"></div>
            <div className="persona__leg--left"></div>
            <div className="persona__leg--right"></div>
          </div>
        </div>
      </div>
    </Container>
  )
}