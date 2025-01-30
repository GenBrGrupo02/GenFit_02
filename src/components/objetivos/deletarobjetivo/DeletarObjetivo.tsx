/*import { useState,  useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Objetivo from "../../../models/Objetivo"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"

function DeletarObjetivo() {

    const navigate = useNavigate()

    const [objetivo, setObjetivo] = useState<Objetivo>({} as Objetivo)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/objetivos/${id}`, setObjetivo, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado.")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarObjetivo() {
        setIsLoading(true)

        try {
            await deletar(`/objetivos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert("Objetivo apagado com sucesso!")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert("Erro ao deletar o objetivo.")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/objetivos")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='font-body text-4xl text-center my-4'>Deletar objetivo</h1>
            <p className='font-body text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o objetivo a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='font-title py-2 px-6 bg-primary text-white font-bold text-2xl'>
                    Objetivo
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{objetivo.descricao}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-error hover:bg-error-content w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-primary 
                                   hover:bg-primary-content flex items-center justify-center'
                                   onClick={deletarObjetivo}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarObjetivo*/