import React from 'react'

export function LittleVideo() {
    return (
        <div>
            <div className="rounded-lg flex flex-col gap-4 hover:bg-gray-100/25 px-2 py-2 cursor-pointer">
                <img className="rounded-lg w-full h-1/2" src="https://images.unsplash.com/photo-1715351885312-3ab5f7d85df1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='flex gap-2 items-start '>
                    <img className="size-9 rounded-full" src="https://images.unsplash.com/photo-1715351885312-3ab5f7d85df1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className='flex-1'>
                        <h4 className="font-semibold text-white text-base mb-1">React Config 2024</h4>
                        <p className="text-white text-sm">React Config </p>
                        <span className="text-sm text-white/60">484 Assistente</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
