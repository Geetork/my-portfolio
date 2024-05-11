import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const { alert, showAlert, hideAlert } = useAlert();

  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value]
    });
    setCurrentAnimation('walk');
  }

  const handleFocus = (e) => {}
  const handleBlur = (e) => {}
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Galina',
        from_email: form.email,
        to_email: 'galinaleespb@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      setForm({ name: '', email: '', message: '' });
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success' });

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
      }, 3000);
    }).catch((error) => {
      setLoading(false);
      setCurrentAnimation('idle');
      showAlert({ show: true, text: "I didn't get your message!", type: 'danger' });
      console.log(error);
    })
  }

  return (
    <section className='w-full h-full relative flex lg:flex-row flex-col max-container'>
      { alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>
          Get in touch
        </h1>

        <form className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input 
              type="text" 
              name="name" 
              className='input' 
              value={form.name}
              placeholder='John' 
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required/>
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input 
              type="email" 
              name="email" 
              className='input' 
              value={form.email}
              placeholder='jogn@email.com' 
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required/>
          </label>

          <label className='text-black-500 font-semibold'>
            Message
            <input 
              name="message" 
              className='input' 
              value={form.message}
              placeholder='Let me know how I can help you' 
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required/>
          </label>

          <button
            type='submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[300px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
            <directionalLight intensity={4} position={[0, 1, 3]}/>
            <ambientLight intensity={1}/>
            <Suspense fallback={<Loader/>}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0, 0, 0]}
                rotation={[0, -0.3, 0]}
                scale={[0.6, 0.6, 0.6]}
              />
            </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact