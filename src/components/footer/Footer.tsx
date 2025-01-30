import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-200 text-secondary py-10 relative">
   
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>

           
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
                <div>
                    <h2 className="text-yellow-500 text-lg font-bold">GENFIT ACADEMIA</h2>
                    <p className="mt-2 text-gray-500">
                        Transformando vidas através do fitness e da motivação diária. Junte-se a nós!
                    </p>
                </div>

                <div>
                    <h2 className="text-yellow-500 text-lg font-bold">Links Rápidos</h2>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-yellow-400">Quem Somos</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Nossos Prêmios</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Treinamentos</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Histórias de Sucesso</a></li>
                    </ul>
                </div>

           
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-yellow-500 text-lg font-bold">Acompanhe-nos</h2>
                    <p className="text-lg mt-2">Acesse nossas redes sociais</p>

                    <div className="flex gap-4 mt-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077B5] transition-colors">
                            <LinkedinLogo size={36} weight="bold" />
                        </a>

                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors">
                            <InstagramLogo size={36} weight="bold" />
                        </a>

                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                            <FacebookLogo size={36} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>

            
            <div className="text-center mt-8 text-gray-500">
                &copy; {currentYear} Genfit Academia Generation | Todos os direitos reservados.
            </div>

        
            <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
               
                <a href="tel:+5511999999999" className="bg-neutral p-3 rounded-full shadow-lg hover:bg-base-200 flex items-center justify-center">
                <WhatsappLogo size={32} color="#21a810" weight="fill" />
</a>

                <button
                    className="bg-neutral p-3 rounded-full shadow-lg hover:bg-base-200 flex items-center justify-center"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                </button>
            </div>
        </footer>
    );
}

export default Footer;
