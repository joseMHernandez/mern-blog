import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, json, useNavigate} from 'react-router-dom'
import axios from 'axios'


const SingUp = () => {

  const [formData, setformData] = useState({})
  const [errorMessage, seterrorMessage] = useState(null)
  const [loading, setloading] = useState(false)
const navigate = useNavigate()
  
  const handleChange = (e) =>{
    setformData({
      ...formData, 
      [e.target.id]: e.target.value.trim()
    })
  }
  
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    if(!formData.username || !formData.email || !formData.password){
      return  seterrorMessage('please fill out all fields')
    }
    
    try {
      setloading(true)
      seterrorMessage(null)
      const response = await axios.post('/api/auth/signup', formData)
      
      setformData(response.data)

     /*  if(response.success === false){
        return seterrorMessage('the username or email is already in used')
      } */
      
      setloading(false)
      navigate('/sign-in')
    } catch (error) {
      setloading(false)

      seterrorMessage('the username or email is already in used')
    }

    
  }

  return (
    <div className='min-h-screen mt-20'>

<div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5'> 
{/* left */}
<div className=' flex-1'>

<Link to='/' className=' text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'  >
    <span className='px-2 py-3'>Blog</span>
   </Link>
<p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsam doloribus sint accusamus hic excepturi ullam labore alias nulla facere.</p>
</div>

{/* right */}
<div className='flex-1'>

  <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
    <div>
      <Label value='Your Username'/>
      <TextInput type='text' placeholder='userName' id='username' onChange={handleChange}/>
    </div>

    <div>
      <Label value='Your Email'/>
      <TextInput type='email' placeholder='email@email.com' id='email' onChange={handleChange}/>
    </div>

    <div>
      <Label value='Your Password'/>
      <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
    </div>

    <Button gradientDuoTone={'purpleToPink'} type='submit' disabled={loading}>
   {
    loading ? (
      <><Spinner size='sm' /><span className='pl-3'>Loading...</span></>
    ): 'sign up'
   }
    </Button>

  </form>

  <div className='flex gap-2 text-sm mt-5'>
    <span>Have an accaunt?</span>
    <Link to='/sign-in' className='text-blue-500'>
      sign in 
    </Link>
  </div>

{
  errorMessage && (
    <Alert className='mt-5' color='failure'>
      {errorMessage}
    </Alert>
  ) 
}

</div>
</div>


    </div>
  )
}

export default SingUp