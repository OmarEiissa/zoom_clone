import CallList from '@/components/CallList'
import React from 'react'

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white  pt-3 xl:pb-2 xl:pt-[1.25rem] px-1 sm:px-10">
      <h1 className="text-3xl font-bold">
        Recordings
      </h1>

      <CallList type='recordings' />
    </section>
  )
}

export default Recordings