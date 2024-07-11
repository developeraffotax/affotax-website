'use client'

import { useState } from "react";





export default function DashboardPage() {

    const [activePage, setActivePage] = useState('create-a-blog');


    return (
        <h2>
            Dashboard Page
        </h2>
    )
}