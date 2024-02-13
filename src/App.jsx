import { useState } from 'react'

import Trend from './tags/trend'
import './App.css'

function App() {
  return (
    <header>
      <h1 className='text-4xl text-white font-semibold py-5 transition-transform hover:scale-105'>What's on trend?</h1>
      <img src='https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707696000&semt=ais' content='x image' className='w-44 mx-auto rounded-full' />

      <div id='twitter-cols' className="grid sm:grid-cols-1 md:grid-cols-3 grid-rows-12 mx-auto py-3">
        {Trend(1, "Twitter is now named X", "Mollit minim voluptate tempor cupidatat proident eiusmod proident sit. Labore culpa cupidatat labore sit incididunt non deserunt qui consectetur est ea occaecat. Magna cillum aliquip velit aliquip magna est ullamco aute laborum enim mollit quis ut sunt.")}
        {Trend(2, "Youtube is amazing!", "Sit do Lorem voluptate ex elit occaecat minim ad et eiusmod excepteur proident dolor. Esse labore fugiat eu duis id incididunt nostrud laborum nulla dolore cillum incididunt. Commodo nulla officia magna ut non eiusmod culpa aliquip sunt in dolore in nostrud et. Enim amet qui fugiat exercitation aute cupidatat magna pariatur ipsum ut non.")}
        {Trend(3, "Anime-Con 2024", "Laboris officia reprehenderit nulla eiusmod et reprehenderit. Minim sint tempor commodo non veniam esse labore aliqua in. Fugiat qui consectetur eiusmod eu consectetur in reprehenderit culpa deserunt nostrud id pariatur est reprehenderit. Eiusmod consequat et sunt occaecat officia esse est ea. Aliquip aute velit quis in ipsum. Ex et adipisicing dolore officia est.")}
        {Trend(3, "Bun is now available!", "Laboris officia reprehenderit nulla eiusmod et reprehenderit. Minim sint tempor commodo non veniam esse labore aliqua in. Fugiat qui consectetur eiusmod eu consectetur in reprehenderit culpa deserunt nostrud id pariatur est reprehenderit. Eiusmod consequat et sunt occaecat officia esse est ea. Aliquip aute velit quis in ipsum. Ex et adipisicing dolore officia est.")}
      </div>

    </header>
  )
}

export default App
