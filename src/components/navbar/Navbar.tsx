import { useEffect, useState } from "react";

function Navbar() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");


    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "night" ? "winter" : "night");
    };

    return (
        <div className="w-full flex justify-center py-4 bg-base-100 text-white">
            <div className="container flex justify-between text-lg ">
                <span className="font-title text-yellow-500">GENFIT</span>

                <div className="flex gap-8 font-body  justify-end items-center ">

                    <button className="btn btn-outline">PERFIL</button>
                    <button className="btn btn-outline btn-primary">EXERCÍCIOS</button>
                    <button className="btn btn-outline btn-secondary">OBJETIVOS</button>
                    <button className="btn btn-outline btn-warning">SOBRE NÓS</button>
                    <button className="btn btn-outline btn-accent">SAIR</button>
              
                </div>
            </div>
        </div>
    );
}

export default Navbar;
