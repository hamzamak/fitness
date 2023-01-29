import React from 'react'
import SectionHead from './SectionHead'
import {FaCrown} from 'react-icons/fa'
import {programs} from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'

function Programs() {
  return (
    <section>
        <div className="container programs-container">
         <SectionHead title='Programs' icon = {<FaCrown/>} />
       

        <div className="programs__wrapper">
            {
                programs.map(({id,icon,info,title,path}) => {
                    return (
                        <Card className="programs__program" key={id} >
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info} </small>
                            <Link to={path} className='btn sm'>Learn More <AiFillCaretRight/>  </Link>
                        </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs