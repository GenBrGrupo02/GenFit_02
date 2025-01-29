/* import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { InfinitySpin } from "react-loader-spinner";
import ExercicioCard from "./ExercicioCard";
import Exercicio from "../../models/Exercicio";
import { buscar } from "../../services/Service";

function ListaExercicios() {

    const navigate = useNavigate();

    const [exercicios, setExercicios] = useState<Exercicio[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarExercicios() {
        try {
            await buscar('/exercicios', setExercicios, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarExercicios()
    }, [exercicios.length])

    return (
        <>
            {exercicios.length === 0 && (
                <InfinitySpin
                    width="200"
                    color="primary"
                />
            )}
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {exercicios.map((exercicio) => (
                    <div className="card w-full bg-base-200 shadow-xl">
                        <ExercicioCard key={exercicio.id} exercicio={exercicio} />
                    </div>
                ))}

            </div>
        </>
    );
}

export default ListaExercicios; */