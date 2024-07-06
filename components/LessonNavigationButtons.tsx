import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowBigRight, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react'

interface LessonNavigationButtonsProps {
    prev:string,
    next:string
}

const LessonNavigationButtons = ({next,prev}:LessonNavigationButtonsProps) => {
  return (
    <div className='flex items-center justify-between gap-2 p-4 w-full'>
        <Link href={prev}>
            <Button variant={'outline'}><ChevronLeft /> Previous Lesson</Button>
        </Link>
        <Link href={next}>
            <Button variant={'outline'}> Next Lesson <ChevronRight /></Button>
        </Link>
    </div>
  )
}

export default LessonNavigationButtons