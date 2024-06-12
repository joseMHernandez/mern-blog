import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {BsX} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const FooterComp = () => {
  return (
<Footer container className='border border-t-8 border-teal-500'>


<div className='w-full max-w-7xl mx-auto'>
  <div className='grid w-full justify-between sm:flex md:grid-col'>
<div className='mt-5'>

<Link to='/' className=' text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '   >
    <span className='px-2 py-3 '>Blog</span>
   </Link>

</div>

<div className='grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3 sm:gap-6'>
<div>

  <Footer.Title title='ABOUT'/>
  <Footer.LinkGroup col>
  <Footer.Link href='https://www.100jsprojects.com' target='_blank' rel='noopener noreferrer'>
    100 JS Projects

  </Footer.Link>

 
  <Footer.Link href='https://www.100jsprojects.com' target='_blank' rel='noopener noreferrer'>
    Mern Blog

  </Footer.Link>

  </Footer.LinkGroup>
</div>


<div>

<Footer.Title title='FOLLOW US'/>
  <Footer.LinkGroup col>
  <Footer.Link href='https://www.github.com/josemhernandez' target='_blank' rel='noopener noreferrer'>
    Github

  </Footer.Link>

 
  <Footer.Link href='https://www.discord.com' target='_blank' rel='noopener noreferrer'>
  Discord
  </Footer.Link>

  </Footer.LinkGroup>
</div>


<div>
<Footer.Title title='LEGAL'/>
  <Footer.LinkGroup col>
  <Footer.Link href='#'>
    Privacy policy

  </Footer.Link>

 
  <Footer.Link href='https://www.discord.com' target='_blank' rel='noopener noreferrer'>
  Terms &amp; Conditions
  </Footer.Link>

  </Footer.LinkGroup>
</div>



</div>

  </div>

<Footer.Divider/>

<div className='w-full sm:flex sm:items-center sm:justify-between '>
<Footer.Copyright
href='#'
by='Manuel Blog'
year={new Date().getFullYear()}
/>

<div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
  <Footer.Icon href='#' icon={BsFacebook}/>
  <Footer.Icon href='#' icon={BsX}/>
  <Footer.Icon href='#' icon={BsInstagram}/>

</div>
</div>

</div>

</Footer>

)
}

export default FooterComp