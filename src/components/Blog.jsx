import React from 'react'

export default function Blog() {

    const blogs =[
        {id:1, title:"Creating Streamlined Safeguarding Processes with OneRen",image:"/src/assets/blog12.png"},
        {id:2, title:"What are your safeguarding responsibilities and how can you manage them?",image:"/src/assets/blog13.png"},
        {id:3, title:"Revamping the Membership Model with Triathlon Australia",image:"/src/assets/blog11.png"},
    ]

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
        <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos sint nam fugiat unde autem saepe aliquid optio, inventore sit tempora quas iste adipisci debitis repellendus. Velit laborum reiciendis voluptas.</p>
      </div>

{/* all blogs */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
            blogs.map(blog=><div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300' />
                <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                    <h3 className='mb-3 text-neutralDGrey font-semibold'>{blog.title}</h3>
                    <div className='flex items-center justify-center gap-8'>
                        <a href='/' className='font-bold text-brandPrimary text-sm hover:text-neutral-700'>Read More</a>
                        <img src='/src/assets/right3.png' alt='' className='inline-block'/>
                    </div>
                </div>
            </div>)
        }
      </div>
    </div>
  )
}
