import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className=" flex justify-between items-center py-7 px-7 bg-slate-200">
            <ul id="links" className="flex gap-12 items-end text-slate-500">
                <li>
                    <Link href="/">
                        <h1 className="text-slate-900 text-4xl">TOTAL PEÇAS</h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="perfil" && "text-slate-900"} href="/perfil">
                    perfil
                    </Link>
                </li>
                
                <li>
                    <Link className={active=="carteira" && "text-slate-300"} href="/carteira">
                        carteira
                    </Link>
                </li>
                
                <li>
                    <Link className={active=="produtos" && "text-slate-300"} href="/produtos">
                        produtos
                    </Link>
                </li>
                
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://img.freepik.com/vetores-premium/mascote-de-desenho-mecanico_85893-206.jpg" alt="avatar do usuário" />
            </div>

        </nav>
    )
}