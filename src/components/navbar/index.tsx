import { Bell, Menu, Mic, Search, Video } from 'lucide-react'
import React from 'react'
import youtubeIcon from "../../assets/logo.svg"
export function Navbar() {
    return (
        <nav className="w-full py-3 flex justify-between px-4">
            <div className="flex gap-3 items-center">
                <Menu className="text-white" size={24} />
                <img src={youtubeIcon} alt="" width={80} />
            </div>
            <div className="hidden md:flex">
                <div className="flex items-center rounded-l-[40px] h-8 border border-[hsl(0,0%,18.82%)] px-2 py-4">
                    <Search size={24} className="text-[hsl(0,0%,18.82%)]" />
                    <input type="text" placeholder="Pesquisar" className="outline-none bg-transparent text-white px-2" />
                </div>
                <button className="bg-[hsl(0,0%,18.82%)] w-16 rounded-r-[40px] flex items-center justify-center"><Search size={20} className="text-zinc-100" /></button>
                <button className="rounded-full bg-[hsl(0,0%,18.82%)] p-2 flex items-center"><Mic className="text-gray-100" size={24} /></button>
            </div>

            <div>
                <ul className="flex gap-5">
                    <a href=""><Video className="text-white" size={24} /> </a>
                    <a href=""><Bell className="text-white" size={24} /> </a>
                    <a href=""><span className="size-8 p-2 rounded-full bg-blue-700 text-sm text-white">X</span></a>
                </ul>
            </div>
        </nav>
    )
}
