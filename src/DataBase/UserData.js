import { useState } from "react"

const data=localStorage.getItem("clientData")

const DataPars=JSON.parse(data)
export const clientData=[DataPars]