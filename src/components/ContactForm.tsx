'use client'
import React from 'react'
import { submitContactForm } from '@/lib/actions/contact'
import { useActionState, useState } from 'react'
import { z } from 'zod'
import { ContactSchema } from '@/validations/contact'

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, {
    success: false,
    errors: {},
  })

  const [clientErrors, setClientErrors] = useState({
    name: "",
    email: "",
  })

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    try{
      if (name === "name") {
        ContactSchema.pick({ name: true }).parse({ name: value })
      } else if (name === "email") {
        ContactSchema.pick({ email: true }).parse({ email: value })
      }
      setClientErrors({ ...clientErrors, [name]: "" })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors[0].message || ""
        setClientErrors({ ...clientErrors, [name]: errorMessage })
      }
    }
  }

  return (
    <form action={formAction}>
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <div className="md:w-1/2 bg-white rounded-lg p-8 flex flex-col shadow-md">
          <h2 className="text-lg mb-2 text-center">お問い合わせ</h2>
          <div className="mb-4">
            <label htmlFor="name" className="text-sm block mb-2">名前</label>
            <input 
              type="name" 
              id="name" 
              name="name"
              onBlur={handleBlur}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8" 
            />
            {state.errors.name && (
              <p className="text-red-500 text-sm">{state.errors.name.join(',')}</p>
            )}
            {clientErrors.name && (
              <p className="text-red-500 text-sm">{clientErrors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm block mb-2">メールアドレス</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              onBlur={handleBlur}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8" 
            />
            {state.errors.email && (
              <p className="text-red-500 text-sm">{state.errors.email.join(',')}</p>
            )}
            {clientErrors.email && (
              <p className="text-red-500 text-sm">{clientErrors.email}</p>
            )}
          </div>
          <button className="text-white bg-indigo-500 py-2 px-6 hover:bg-indigo-600 rounded text-lg mx-auto mt-2">送信</button>
        </div>
      </div>
    </form>
  )
}