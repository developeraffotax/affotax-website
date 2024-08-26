import { redirect } from 'next/navigation'





export default function AdminPage() {

    redirect('/admin/view-blogs')


    return (
        <h2>
            Admin Page
        </h2>
    )
}