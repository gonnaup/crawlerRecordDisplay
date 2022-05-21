import React, { useEffect, useState } from 'react'
import { fetchDoubanNovelPaged } from '../apis/axiosUtil'
import QueryHeader, { QueryHeaderProps } from '../components/QueryHeader'

type Props = {}

export interface DoubanNovelData {
  id: number
  title: string
  author: string
  authorUrl: string
  kind: string
  words: string
  status: string
  tag: string
  introduce: string
  novelUrl: string
  coverUrl: string
}

type NovelList = DoubanNovelData[]

const queryNovel = (values: any) => {
  console.log(values)
}

const headerProps: QueryHeaderProps = {
  form: {
    name: 'doubanNovelQueryForm',
    labelCol: {span: 8},
    wrapperCol: {span: 18},
    onFinish: queryNovel
  },
  formItems: [
    {
      type: 'input',
      label: '书名',
      name: 'name'
    },
    {
      type: 'input',
      label: '作者',
      name: 'author'
    },
    {
      type: 'select',
      label: '类型',
      name: 'kind',
      selectConfig: {
        options: [
          {
            label: '全部',
            value: ''
          },
          {
            label: '幻想',
            value: '幻想',
          }
        ],
        onSelect(value, option?) {
          
        },
        placeholder: '小说类型'
      }
    }
  ]
}

const DoubanNovel = function (props: Props) {
  const [novelList, setNovelList] = useState<NovelList>([])

  useEffect(() => {
    fetchDoubanNovelPaged({ page: 1, pageSize: 15 }).then((response) => {
      let list: NovelList = response.data.data.content
      setNovelList(list)
    })
  }, [])

  return (
    <div style={{ paddingTop: 16 }}>
      <QueryHeader {...headerProps} />
      <ul style={{ marginTop: 20 }}>
        {novelList.map((novel) => {
          return <li key={novel.id}>{novel.title}</li>
        })}
      </ul>
    </div>
  )
}

export default DoubanNovel
