import Login from '@/components/Admin/Auth/Login'
import { redirect } from 'next/navigation'





export default function LoginPage() {

    //redirect('/admin/view-blogs')


    return (
        <>
            <Login />
        </>
    )
}