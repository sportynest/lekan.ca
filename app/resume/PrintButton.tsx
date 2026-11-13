"use client"

import { Download04Icon } from "hugeicons-react"

export default function PrintButton() {
  return (
    <button type="button" className="resume-print" onClick={() => window.print()}>
      <Download04Icon size={14} />
      Save as PDF
    </button>
  )
}
