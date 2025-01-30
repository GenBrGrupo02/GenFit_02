import { useForm } from "react-hook-form";
import Exercicio from "../../models/Exercicio";

export default function ExercicioForm({ onSubmit }: { onSubmit: (data: Exercicio) => void }) {
    const { register, handleSubmit, formState: { errors } } = useForm<Exercicio>({
        defaultValues: {
            usuario: { id: undefined },
            objetivo: { id: undefined }
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-neutral text-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Adicionar Exercício</h2>

            <label className="block mb-2">Nome:</label>
            <input {...register("nome", { required: "Nome é obrigatório" })} className="input input-bordered w-full mb-2" />
            {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}

            <label className="block mb-2">Descrição:</label>
            <textarea {...register("descricao", { required: "Descrição é obrigatória" })} className="textarea textarea-bordered w-full mb-2" />
            {errors.descricao && <p className="text-red-500">{errors.descricao.message}</p>}

            <label className="block mb-2">Usuário (ID):</label>
            <input 
                type="number" 
                {...register("usuario.id", { valueAsNumber: true, required: "Usuário é obrigatório" })} 
                className="input input-bordered w-full mb-2"
            />
            {errors.usuario?.id && <p className="text-red-500">{errors.usuario.id.message}</p>}

            <label className="block mb-2">Objetivo (ID):</label>
            <input 
                type="number" 
                {...register("objetivo.id", { valueAsNumber: true, required: "Objetivo é obrigatório" })} 
                className="input input-bordered w-full mb-2"
            />
            {errors.objetivo?.id && <p className="text-red-500">{errors.objetivo.id.message}</p>}

            <label className="block mb-2">Dificuldade (1-10):</label>
            <input type="number" {...register("dificuldade", { valueAsNumber: true, required: "Escolha uma dificuldade", min: 1, max: 10 })} className="input input-bordered w-full mb-2" />
            {errors.dificuldade && <p className="text-red-500">{errors.dificuldade.message}</p>}

            <label className="block mb-2">Vídeo Tutorial (URL):</label>
            <input 
                type="url" 
                {...register("videoTutorial", { required: "URL do vídeo é obrigatória" })} 
                className="input input-bordered w-full mb-2"
            />
            {errors.videoTutorial && <p className="text-red-500">{errors.videoTutorial.message}</p>}

            <button type="submit" className="btn btn-primary w-full mt-4">Adicionar Exercício</button>
        </form>
    );
}
