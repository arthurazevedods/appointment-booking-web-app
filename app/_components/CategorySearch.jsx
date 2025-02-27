import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
export default function CategorySearch() {
    return (
        <div className='mb-10 items-center flex flex-col gap-2'>
            <h2 className='font-bold text-4xl lg:text-5xl tracking-wide'>
                Procurar por <span className='text-button'>Especialistas</span>
            </h2>

            <h2 className='text-gray-400 text-xl md:text-2xl'>
                Procure pelo médico
            </h2>
            <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Procurar" />
                <Button type="submit">
                    <Search />
                    Procurar
                </Button>
            </div>


        </div>
    )
}
