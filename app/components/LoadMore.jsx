"use client"
import React, { useState } from 'react'
import { getSeries } from '../action'
import Card from './Card'

let currentPage = 1
const LoadMore = () => {

    const [data, setData] = useState([])

    const handleClick = () => {
        getSeries(currentPage)
            .then((res) => {
                setData([...data, ...res])
                currentPage++
            }
        )}

    return (
        <div className='w-full h-screen relative '>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-10">
                {data?.map((serie, index) => (
                    <Card key={index} data={serie} />
                ))}
            </section>
            <button className='px-5 py-3 rounded-full bg-black text-white absolute bottom-[5%] left-1/2 transform -translate-x-1/2' onClick={() => handleClick()}>load more</button>
        </div>
    )
}

export default LoadMore