import { FormEvent, useState } from 'react'
import axios from 'axios'
import React from 'react'
import './style/app.css'

function App() {

  type Field = {
    type: string,
    fieldName: string,
    placeholder?: string
  }

  const [item, setItem] = useState({ name: '', price: 0 })

  const fields: Field[] = [
    { type: 'text', fieldName: 'name', placeholder: 'Product name' },
    { type: 'number', fieldName: 'price' }
  ]

  const onSetItem = (val: string, fieldName: string) => {
    setItem(item => ({ ...item, [fieldName]: val }))
  }

  async function onCreateProduct(e: FormEvent) {
    e.preventDefault()
    try {
      await axios({
        url: '//localhost:3030/api/product',
        method: 'POST',
        data: item
      })
        .then(response => console.log('res', response.data))
    } catch (error) {
      console.log('err:', error)
    }
  }

  return (
    <section className='products-page'>
      <header>
        <h1>Sportix</h1>
      </header>
      <h2>Add a product</h2>
      <form onSubmit={onCreateProduct}>
        {
          fields.map(field => {
            return (
              <React.Fragment key={field.fieldName}>
                <label htmlFor={field.fieldName}>{field.fieldName}</label>
                <input
                  type={field.type}
                  id={field.fieldName}
                  name={field.fieldName}
                  placeholder={field.placeholder || ''}
                  onChange={(e) => onSetItem(e.target.value, field.fieldName)} />
              </React.Fragment >
            )
          })
        }
        <button>Create</button>
      </form>
    </section>
  )
}

export default App
