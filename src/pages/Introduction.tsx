import { Breadcrumb } from 'antd'
import React from 'react'

type Props = {}

const Introduction = (props: Props) => {
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24 }}>Bill is a cat.</div>
    </>
  )
}

export default Introduction
