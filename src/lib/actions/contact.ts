'use server'
import { redirect } from 'next/navigation'
import { ContactSchema, ContactType } from '@/validations/contact'

// ActionStateの型定義
type ActionState = {
  success: boolean
  errors: {
    name?: string[]
    email?: string[]
  }
  serverError?: string
}
export async function submitContactForm(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get('name')
  const email = formData.get('email')

  const validationResult = ContactSchema.safeParse({ name, email })

  if (!validationResult.success) {
    // エラーメッセージの取得 flattenでエラーを見やすく加工
    const errors = validationResult.error.flatten().fieldErrors
    console.log('サーバー側でエラー', errors)
    return {
      success: false,
      errors: {
        name: errors?.name || [],
        email: errors?.email || [],
      },
      serverError: '入力に誤りがあります'
    }
  }


  console.log(name, email)
  redirect('/contacts/complete')
}