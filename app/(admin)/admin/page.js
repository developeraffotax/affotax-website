import { redirect } from 'next/navigation'





export default function AdminPage() {

    redirect('/admin/dashboard')


    return (
        <h2>
            Admin Page
        </h2>
    )
}