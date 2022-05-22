import { Affix, Button, Card, Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import {
  fetchDoubanNovelKinds,
  fetchDoubanNovelStatus,
  fetchDoubanNovelTags
} from '../apis/doubanNovelApi';
import { QueryHeaderProps } from '../interfaces/props';

interface Option {
  lable: string;
  value: string;
}

const arrayToOptions = (values: string[]): Option[] => {
  return values.map((v) => {
    return { lable: v, value: v };
  });
};

const QueryHeader = (props: QueryHeaderProps) => {
  const [status, setStatus] = useState<Option[]>([]);
  const [kinds, setKinds] = useState<Option[]>([]);
  const [tags, setTags] = useState<Option[]>([]);

  useEffect(() => {
    const statusResult = fetchDoubanNovelStatus();
    statusResult.then((r) => {
      setStatus(arrayToOptions(r.data.data));
    });

    const kindsResult = fetchDoubanNovelKinds();
    kindsResult.then((r) => {
      setKinds(arrayToOptions(r.data.data));
    });

    const tagResult = fetchDoubanNovelTags();
    tagResult.then((r) => {
      setTags(arrayToOptions(r.data.data));
    });
  }, []);

  return (
    <Affix>
      <Card style={{ marginBottom: 16 }}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          layout="inline"
          {...props}
        >
          <Form.Item label="书名" name="name" style={{ width: 200 }}>
            <Input />
          </Form.Item>

          <Form.Item label="作者" name="author" style={{ width: 200 }}>
            <Input />
          </Form.Item>

          <Form.Item label="状态" name="status" style={{ width: 200 }}>
            <Select placeholder="状态" allowClear options={status} />
          </Form.Item>

          <Form.Item label="类型" name="kind" style={{ width: 200 }}>
            <Select placeholder="类型" allowClear options={kinds} />
          </Form.Item>

          <Form.Item label="标签" name="tag" style={{ width: 200 }}>
            <Select placeholder="标签" allowClear options={tags} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Affix>
  );
};

export default QueryHeader;
