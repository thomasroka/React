import { useState } from 'react'

import Card from './components/Card'
import Users from './components/Users'
import './App.css'
import { Heading1 } from 'lucide-react'
function App() {
  const arr=[10,20,230,40]
  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/kcwUNFQXnhfIN8R_IcdMTWqvnE5qdZmvcIxvLigMHK4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/MtNuh1aotfRatVgidHfJWsBcyQZDuDpPqZOADAzWx_A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbmti/b3RkZXNpZ24uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA5L21pY3Jvc29m/dC1sb2dvLWRlc2ln/bi0yMDE0LTEwMjR4/NTU5LndlYnA",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/LY2taOaJ164Exo29kfHpylmKkov2r0ZQx1tBlpuDi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
    name: "Meta",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/cuSlAR5WJOPiH4XZwL4Q3HzjTJhHXqDj7hHBHdk4TdE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/Mjk3NjQ3YzdlYzc2/YjgyZmIyMWZjZTMu/cG5n",
    name: "Netflix",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/vEC69FKkLkyev5_C3q0PjEb6AAaBjfv7UhVwLUFh4Ec/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9TcG90aWZ5/L1Nwb3RpZnktTG9n/by53aW5lLnN2Zw",
    name: "Spotify",
    datePosted: "4 days ago",
    post: "Mobile Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 30,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/V3sDylkJ-zgd73yrhtMUD_62m8dRfVUogHVyFAzVKu4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NS9hZG9iZV9pbmMu/LWxvZ28tYnJhbmRs/b2dvcy5uZXRfLTMw/MHgzMDAucG5n",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/WmMhLyNyQ4CN8_MOtqmi77fdnPTYKn15INPkKtJnanY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDgvWC1Mb2dvLTUw/MHgyODEucG5n",
    name: "X",
    datePosted: "6 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/1QWoKiPL_Aku3S3RII5dpGypE9eYcLeweUgqgYypF5c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAz/L0xpbmtlZGluLUxv/Z28tMjAwMy01MDB4/MjgxLnBuZw",
    name: "LinkedIn",
    datePosted: "2 days ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/i3ja3OeJLbvq-ZUcRpNFwj_uAYX1WBajVhGIIgsOmBk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA5/MDg5NzY1NC9waG90/by9uZXcteW9yay1u/eS1hbi1hcHBsZS1s/b2dvLWlzLWRpc3Bs/YXllZC1pbi1hbi1h/cHBsZS1yZXRhaWwt/c3RvcmUtaW4tZ3Jh/bmQtY2VudHJhbC10/ZXJtaW5hbC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9OXY1/ajdVSmxMV1h2WHBq/UE44d3NvRkVNNEtS/M0FOUy05NnFqODZB/QWFTRT0",
    name: "Apple",
    datePosted: "8 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Mumbai, India"
  }
]
  return(<>
  <div className='parent h-screen w-full bg-green-300 p-8 '>
  
    <div className='w-screen  h-full  bg-amber-200 flex flex-wrap gap-8'>{jobOpenings.map((job, index)=>{
      return <Card companyname={job.name} brandLogo={job.brandLogo} Post={job.post} datePosted={jobOpenings.datePosted} tag1={job.tag1} tag2={job.tag2} Pay={job.pay} Location={job.location
      } />
    })}
    </div>
    
  </div>
  </>)
}

export default App
