function Home() {
    return (
        <>
            
            <div style={{
                width: "100vw",
                height: "150vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                background: "linear-gradient(to bottom , #000000,rgb(12, 33, 65))"
            }}>
                <div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "80vw",
                        position: "relative",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "50%",
                            zIndex: 2,
                            position: "relative",
                        }}>
                            <h2 className="font-title text-5xl" style={{
                                position: "absolute",
                                top: "20%",
                                transform: "translateX(50%)",
                                color: "white",
                                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
                            }}>
                                TRANSFORME SEU CORPO,<br /> FORTALEÇA SUA MENTE.
                            </h2>
                            <p className="font-body text-lg" style={{

                                    position: "absolute",
                                    maxWidth: "80%",
                                    transform: "translateX(80%) translateY(680%)", 
                                }}>
                                Aqui, cada treino é um passo para a melhor versão de você.
                            </p>
                        </div>

                        <div style={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                        }}>
                            <img
                                src="https://i.imgur.com/zhk6sgx.png"
                                alt="Imagem da Página Home"
                                style={{
                                    width: "800px",
                                    height: "auto",
                                }}
                            />
                        </div>

                    </div>

                    {/* Cards de informação logo abaixo da imagem */}
                    <div className="flex justify-center px-4 mt-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                            {/* Card de Membros usando stat */}
                            <div className="stat w-90 bg-neutral text-white shadow-xl rounded-xl">
                                <div className="stat-title">Membros</div>
                                <div className="stat-value text-3xl">+3500</div>
                                <div className="stat-desc">Membros ativos</div>
                            </div>

                            {/* Card de Academias no Brasil usando stat */}
                            <div className="stat w-90 bg-neutral text-white shadow-xl rounded-xl">
                                <div className="stat-title">Academias no Brasil</div>
                                <div className="stat-value text-3xl">+250 unidades</div>
                                <div className="stat-desc">Presença nacional</div>
                            </div>

                            {/* Card de Equipamentos usando stat */}
                            <div className="stat w-90 bg-neutral text-white shadow-xl rounded-xl">
                                <div className="stat-title">Equipamentos</div>
                                <div className="stat-value text-3xl">+5000 equipamentos</div>
                                <div className="stat-desc">Equipamentos modernos</div>
                            </div>
                        </div>
                    </div>
                        <div className="flex justify-center mt-12">
                            <button className="btn btn-primary rounded-xl text-2xl font-body px-12 py-1">
                            CONHEÇA NOSSOS PLANOS
                            </button>
                        </div>
                </div>
            </div>
            
        </>
    );
}

export default Home;
