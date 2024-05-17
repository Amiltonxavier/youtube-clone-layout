import React from 'react'
import { CONSTANTS } from '../constants'
import { Home } from 'lucide-react'
import homeIcon from "../../assets/home.svg"

export function Sidebar() {
    return (
        <div className='px-2'>
            <ul className='flex flex-col gap'>
                {/*CONSTANTS.SIDEBARITEM.top.map((item) => (
                <li key={item.id} className=''>
                    <a href="#" className='flex items-center gap-2 text-white text-sm p-2'>
                       <span>Início</span>
                    </a>
                </li>
            ))*/}
                <li className='flex items-start px-6 py-2 hover:bg-gray-100 hover:bg-opacity-50 rounded-lg'>
                    <a href="" className='flex items-center gap-2 justify-evenly text-white '><img src={homeIcon} alt="" /> <span className='mr-auto'>Início</span></a>
                </li>
                <li className='px-6 py-2 hover:bg-gray-100 hover:bg-opacity-50 rounded-lg'>
                    <a href="" className='flex items-center gap-2 justify-evenly text-white '><img src={homeIcon} alt="" className='block' /> <span className='mr-auto'>Início</span></a>
                </li>
            </ul>
        </div>
    )
}
