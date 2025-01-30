import { Link } from "react-router-dom"
import Objetivo from "../../../models/Objetivo"

interface CardObjetivosProps {
    objetivo: Objetivo
}

function CardObjetivos({ objetivo }: CardObjetivosProps) {
    return (

        <>
            <h1 className="font-title text-5xl font-bold text-center text-primary mt-20">Objetivos</h1>

            <div className="bg-base-200 collapse">
                <input type="checkbox" className="peer" />
                <div className="font-title tcollapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Objetivo {objetivo.id}
                </div>

                <div
                    className="font-body collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>{objetivo.descricao}</p>
                    <div className="flex">
                        <Link to={`/editarobjetivo/${objetivo.id}`}
                            className='w-full text-slate-100 hover:text-primary flex items-center justify-center py-2'>
                            <button>Editar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}
export default CardObjetivos