function FormObjetivo() {

   /* const navigate = useNavigate();

    const [objetivo, setObjetivo] = useState<Objetivo>({} as Objetivo)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/objetivos/${id}`, setObjetivo, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado!")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setObjetivo({
            ...objetivo,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/objetivos")
    }

    async function gerarNovoObjetivo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/objetivos`, objetivo, setObjetivo, {
                    headers: { 'Authorization': token }
                })
               alert("O Objetivo foi atualizado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert("Erro ao atualizar o objetivo.")
                }

            }
        } else {
            try {
                await cadastrar(`/objetivos`, objetivo, setObjetivo, {
                    headers: { 'Authorization': token }
                })
                alert("O Objetivo foi cadastrado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert("Erro ao cadastrar o objetivo.")
                }

            }
        }

        setIsLoading(false)
        retornar()
    }*/

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="font-title text-4xl text-center my-8">
                Novo Objetivo
            </h1>

            <form className="w-1/2 flex flex-col gap-4" >
                <div className="font-body flex flex-col gap-2">
                    <label htmlFor="descricao">Qual o seu objetivo?</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu objetivo"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <button
                    className="rounded font-body text-slate-100 bg-primary
                               hover:bg-secondary w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormObjetivo;