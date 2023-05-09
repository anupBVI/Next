import React from 'react'
import * as style from "./Breadcrumb.style"

const Breadcrumb = ({crumbs}:any) => {

  return (
    <style.BreadCrumbs>
      Home / {crumbs}
    </style.BreadCrumbs>
  )
}

export default Breadcrumb
