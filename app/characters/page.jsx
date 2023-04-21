"use client"

import { filteredCharacters } from '@/src/utils/server/filterChars'
import { findCharacter } from '@/src/utils/server/findChar'
import React,{useState,useEffect} from 'react'

export default function page() {

	const [char,setChar] = useState([])
	const [value,setValue] = useState('')

	useEffect(()=>{  
		findCharacter()
		.then((data)=>setChar(data))
		},[])

		const filterChars = (array) => {
			return array.filter(el => el.name.toLowerCase().includes(value))}

			const filtered = filterChars(char)

	return (
		<div className="container">
			<div className="flex flex-col items-center justify-center h-screen pt-10">
			
							<div class="">
								<div class="inline-flex flex-col justify-center relative text-gray-500">
									<div class="relative">
										<input 
										type="text" 
										class="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" 
										placeholder="search a character"
										onChange={(event)=>setValue(event.target.value)}
										/>
										<svg class="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
										</svg>
									</div>
								</div>
							</div>	

{filtered.map((character)=> 
<span>{character.name}</span>
)}
					
						
			</div>
		</div>
	)
}
