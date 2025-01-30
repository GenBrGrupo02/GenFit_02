function Home() {

    const scrollToSection = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div id="topo" style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                position: "relative",
                background: "linear-gradient(to bottom, #000000,rgb(35, 66, 112))"
            }}>
                <div>
                    <div style={{
                        marginTop: "5vh",
                        borderTop: "2px solid gray",
                        borderBottom: "2px solid gray",
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
                            
                            <h2 className="font-title text-[2.7vw] text-primary" style={{
                                position: "absolute",
                                top: "20%",
                                transform: "translateX(60%) translateY(-50%)",
                                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
                            }}>
                                <span className="font-title text-yellow-500">GENFIT</span> <br/> TRANSFORME SEU CORPO,<br /> FORTALEÇA SUA MENTE.
                            </h2>
                            <br />
                            <br />
                            <p className="font-body text-yellow-500 text-[1vw]" style={{
                                justifyContent: "center",
                                position: "relative",
                                maxWidth: "80%",
                                transform: "translateX(99%) translateY(300%)",
                            }}>
                                Aqui, cada treino é um passo para a melhor versão de você.
                            </p>
                        </div>

                        <div style={{
                            width: "50%",
                            display: "flex",
                            transform: "translateX(25%)",
                            justifyContent: "center",
                            position: "relative",
                        }}>
                            <img
                                src="https://i.imgur.com/zhk6sgx.png"
                                alt="Imagem da Página Home"
                                style={{
                                    width: "80vh",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center px-4 mt-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                            <div className="stat w-90 bg-neutral text-white shadow-xl rounded-xl">
                                <div className="stat-title">Membros</div>
                                <div className="stat-value text-3xl">+3500</div>
                                <div className="stat-desc">Membros ativos</div>
                            </div>
                            <div className="stat w-90 bg-neutral text-white shadow-xl rounded-xl">
                                <div className="stat-title">Academias no Brasil</div>
                                <div className="stat-value text-3xl">+250 unidades</div>
                                <div className="stat-desc">Presença nacional</div>
                            </div>
                            <div className="stat w-90 bg-neutral text-white shadow-xl rounded-xl">
                                <div className="stat-title">Equipamentos</div>
                                <div className="stat-value text-3xl">+5000 equipamentos</div>
                                <div className="stat-desc">Equipamentos modernos</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <button onClick={() => scrollToSection("planos")} className="btn btn-primary rounded-xl text-2xl font-body px-12 py-1">
                            CONHEÇA NOSSOS PLANOS
                        </button>
                    </div>
                </div>
            </div>

            <div id="planos"
                className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#234270] to-black p-10">

                <h2 className="text-4xl font-title text-primary mb-8">NOSSOS PLANOS</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="card w-80 bg-base-100 shadow-xl rounded-2xl border border-yellow-600">
                        <div className="card-body text-center">
                            <h3 className="text-2xl font-bold text-yellow-600">Plano Bronze</h3>
                            <p className="text-lg font-semibold">R$ 99,90/mês</p>
                            <ul className="text-left mt-4">
                                <li>✅ Acesso à academia</li>
                                <li>✅ Aulas coletivas</li>
                                <li>❌ Personal Trainer</li>
                                <li>❌ Acesso 24h</li>
                            </ul>
                            <button className="btn btn-primary mt-4 rounded-xl">Assinar</button>
                        </div>
                    </div>

                    <div className="card w-80 bg-base-100 shadow-xl rounded-2xl border border-gray-400">
                        <div className="card-body text-center">
                            <h3 className="text-2xl font-bold text-gray-400">Plano Prata</h3>
                            <p className="text-lg font-semibold">R$ 149,90/mês</p>
                            <ul className="text-left mt-4">
                                <li>✅ Acesso à academia</li>
                                <li>✅ Aulas coletivas</li>
                                <li>✅ Personal Trainer 2x/semana</li>
                                <li>❌ Acesso 24h</li>
                            </ul>
                            <button className="btn btn-primary mt-4 rounded-xl">Assinar</button>
                        </div>
                    </div>

                    <div className="card w-80 bg-base-100 shadow-xl rounded-2xl border border-yellow-400">
                        <div className="card-body text-center">
                            <h3 className="text-2xl font-bold text-yellow-400">Plano Ouro</h3>
                            <p className="text-lg font-semibold">R$ 199,90/mês</p>
                            <ul className="text-left mt-4">
                                <li>✅ Acesso à academia</li>
                                <li>✅ Aulas coletivas</li>
                                <li>✅ Personal Trainer 5x/semana</li>
                                <li>✅ Acesso 24h</li>
                            </ul>
                            <button className="btn btn-primary mt-4 rounded-xl">Assinar</button>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => scrollToSection("topo")}
                    className="btn btn-neutral btn-circle p-2 mt-4"
                    title="Voltar ao topo"
                >
                    
                </button>
            </div>
        </>
    );
}

export default Home;
