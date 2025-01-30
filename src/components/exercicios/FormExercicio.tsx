import { useForm } from "react-hook-form";
import { useState } from "react";
import Exercicio from "../../models/Exercicio";

export default function ExercicioForm({ onSubmit }: { onSubmit: (data: Exercicio) => void }) {
    const { register, handleSubmit, formState: { errors } } = useForm<Exercicio>();
    const [videoUrl, setVideoUrl] = useState("");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-neutral text-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Adicionar Exercício</h2>
            
            <label className="block mb-2">Nome:</label>
            <input {...register("nome", { required: "Nome é obrigatório" })} className="input input-bordered w-full mb-2" />
            {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
            
            <label className="block mb-2">Descrição:</label>
            <textarea {...register("descricao", { required: "Descrição é obrigatória" })} className="textarea textarea-bordered w-full mb-2" />
            {errors.descricao && <p className="text-red-500">{errors.descricao.message}</p>}
            
            <label className="block mb-2">Dificuldade (1-10):</label>
            <input type="number" {...register("dificuldade", { required: "Escolha uma dificuldade", min: 1, max: 10 })} className="input input-bordered w-full mb-2" />
            {errors.dificuldade && <p className="text-red-500">{errors.dificuldade.message}</p>}
            
            <label className="block mb-2">Vídeo Tutorial (URL):</label>
            <input 
                type="url" 
                {...register("videoTutorial", { required: "URL do vídeo é obrigatória" })} 
                className="input input-bordered w-full mb-2" 
                onChange={(e) => setVideoUrl(e.target.value)}
            />
            {errors.videoTutorial && <p className="text-red-500">{errors.videoTutorial.message}</p>}
            
            {videoUrl && <iframe className="w-full h-48 mb-2" src={videoUrl} title="Vídeo Tutorial" allowFullScreen />}
            
            <button type="submit" className="btn btn-primary w-full mt-4">Adicionar Exercício</button>
        </form>
    );
}
