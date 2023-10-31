import React, { useState } from 'react'
import { OpenAI } from 'openai'

import Button from '../layouts/Button';
import input from './pages/input';

const ChatAi = () => {

  // const openai = new OpenAI({
  //   apiKey: import.meta.env.VITE_OPENAI_KEY,
  //   dangerouslyAllowBrowser: true,
  // });

  const [result, setResult] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-3w px-4">
        <section className='w-screen h-screem flex-flex-col gap-y justifity-center item-center'>
          <div className='W-60 '>
            <input id={'openai'} placeholder={'type input here'} />
            <div className='w-20-h-10'>
              <Button id={'submit'} label={'click'} />
            </div>

          </div>
          <div className='w-60-h60'>
            <textarea
              className='w-full h-full rounded-md bg-white' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ChatAi