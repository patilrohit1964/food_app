import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='lg:col-span-2 my-4 container mx-auto'>
      <h1 className='font-bold text-2xl'>Our Menu</h1>
      <Card>
        <CardHeader>
          <CardTitle>
            Current Menu Items
          </CardTitle>
<CardContent>
  
</CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default page