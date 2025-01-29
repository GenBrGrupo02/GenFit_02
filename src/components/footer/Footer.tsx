import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-base-200 text-secondary">
                <div className="container flex flex-col items-center py-6">

                    <p className="text-xl font-bold">
                       Genfit Academia Generation | Copyright: {currentYear}
                    </p>
                    <p className="text-lg mt-2">Acesse nossas redes sociais</p>

                    <div className="flex gap-4 mt-4">

                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0077B5] transition-colors"
                        >
                            <LinkedinLogo size={48} weight="bold" />
                        </a>

                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#E4405F] transition-colors"
                        >
                            <InstagramLogo size={48} weight="bold" />
                        </a>

                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#1877F2] transition-colors"
                        >
                            <FacebookLogo size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;