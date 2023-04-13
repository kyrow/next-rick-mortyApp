import { Logo } from "../../icons/logo"
import '../../../../styles/globals.css'
import Link from 'next/link';
import { ROUTES } from "../../../utils/constants/routes";


export const Header = () => {
	return (
		<header className="bg-white w-full">
			
			<div className="container flex justify-between py-4 px-3 items-center text-black mx-auto font-semibold">
				<Logo/>
				<nav>
					<ul>
						<li> <Link href={ROUTES.CHARACTERS}>Characters</Link> </li>
					</ul>
				</nav>
			</div>
		
		</header>
	)
}