import {Button , Card , ProgressBar , Stack } from "react-bootstrap" 

import { currencyFormatter } from "./utils"

export default function BudgetCard ({name, amount, max}) {
const className= []
if (amount > max) {
  className.push("bg-danger", "bg-opacity-10")
} else if (gray) {
  className.push("bg-light")
}

  return (
    <Card>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between 
            align-items-baseline fw-normal mb-3 ">
        <div className="me-2 " >{name}</div>
        {/* <div>{amount} / {max} </div> */}
        <div className="d-flex align-items baseline  " >
            {currencyFormatter.format(amount)}
             <span className="text-muted fs-6 ms-1 " > / {currencyFormatter.format(max)} 
             </span>
         </div>
            </Card.Title>
            <ProgressBar 
            className="rounded-pill" 
            variant= {getProgressBarVariant (amount , max)}
             min={0}
             max={max}
             now={amount}
             />
             <stack direction="horizontal" gap="2" className="mt-4">
              <Button variant="outline-primary" className="ms-auto" > Add Expense </Button>
              <Button variant="outline-secondary  " > View Expense </Button>
             </stack>
        </Card.Body>
    </Card>
  )
}

function getProgramBarVariant (amount,max) {
  const ratio = amount/max
  if (ratio < 0.5) return "primary"
  if (ratio < 0.75) return "warning"
  return "danger"
}
 
