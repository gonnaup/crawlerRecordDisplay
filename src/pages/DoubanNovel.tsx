import React, { useEffect, useState } from 'react'
import { fetchDoubanNovelPaged } from '../apis/axiosUtil'
import QueryHeader from '../components/QueryHeader'

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
      {/* <QueryHeader /> */}
      <ul style={{ marginTop: 20 }}>
        {novelList.map((novel) => {
          return <li key={novel.id}>{novel.title}</li>
        })}
      </ul>
    </div>
  )
}

export default DoubanNovel
