'use client'
import React from 'react'

interface IProps {
    params: Promise<{ ItemId: string }>
}
async function page({ params }: IProps) {
    const { ItemId } = await params;

    return (
        <div>
            <h1>ID: {ItemId}</h1>

        </div>
    )
}
export default page;