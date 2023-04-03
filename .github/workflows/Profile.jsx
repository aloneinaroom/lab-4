import { Button, Input , Form} from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import QRCode from "react-qr-code";
import { updateItem } from './actions';

function Profile() {
  const [url, setUrl] = useState('')
  console.log("🚀 ~ file: Profile.jsx ~ line 9 ~ Profile ~ url", url)
  const [form] = Form.useForm();
  const profile = useSelector(state => state.auth.profile);
  const router = useRouter();
  const dispatch = useDispatch();
  const onChange = (values) => {
    dispatch(updateItem({...values, id: profile.id}))
  }

  useEffect(() => {
    setUrl(window.location.origin  + '/menu/' + profile.id)
  }, [profile])

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={profile}
        onFinish={onChange}
      >
        <Form.Item 
          label="Назва закладу"
          name="name" 
          rules={[{ required: true, message: 'Заповніть поле' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Телефон"
          name="phone"
          rules={[{ required: true, message: 'Заповніть обовязково' }]}
        >
          <Input />
        </Form.Item>

        
        <Form.Item
          label="Адрес"
          name="address"
          rules={[{ required: true, message: 'Заповніть обовязково' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Опис"
          name="desc"
          // rules={[{ required: true, message: 'Заповніть обовязково' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Зберегти
          </Button>
          <Button style={{marginLeft: 20}} onClick={() => router.push('/')}>
            На головну
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Profile