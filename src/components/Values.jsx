import Image from '../images/values.webp';
import SectionHead from './SectionHead';
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card';
function Values() {
    return (
        <section className='values'>
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="Values image" style={{minHeight : 600}} />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond />} title="Values" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit veniam porro harum voluptate ullam, magni voluptatem voluptates excepturi tempore aspernatur voluptatibus enim consequatur maiores dolores unde adipisci! Dolor, impedit!</p>
                    <div className="values__wrapper">
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return (
                                    <Card className="values__value" key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc} </small>

                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Values