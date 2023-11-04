import Image from "next/image"
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
  return (
    <div className="bg-neutral-800 h-100 bottom-0">
      <footer>
        <div className="flex flex-wrap px-16 xl:px-80 justify-items-center">
          <div className="basis-2/4 py-16">
            <ul>
              <li className="text-white text-xl font-bold mb-5">Contato</li>
              <li className="text-white text-lg mb-2 flex items-center cursor-pointer ">
                <span className="material-symbols-outlined">mail</span>
                <a href="mailto:kayan@fullvision.one" className="ml-2">Comercial: kayan@fullvision.one</a>
              </li>
              <li className="text-white text-lg mb-2 flex items-center cursor-pointer ">
                <span className="material-symbols-outlined">mail</span>
                <a href="mailto:central@fullvision.one" className="ml-2">Financeiro: central@fullvision.one</a>
              </li>
              <li className="text-white text-lg mb-2 flex items-center cursor-pointer ">
                <InstagramIcon />
                <a href="https://www.instagram.com/fullvision.one/" className="ml-2">fullvision.one</a>
              </li>
              <li className="text-white text-lg mb-2 flex items-center cursor-pointer">
                <span className="material-symbols-outlined">call</span>
                <a href="tel:1198122-0823" className="ml-2">(11) 98122-0823</a>
              </li>
            </ul>
          </div>
          <div className="basis-2/4 py-16">
            <ul>
              <li className="text-white text-xl font-bold mb-5">Clientes e Parceiros</li>
              <div className="flex space-x-9">
                <Image src="/images/emp1.jpg" width={150} height={40} alt="" />
                <Image src="/images/emp2.jpg" width={150} height={40} alt="" />
              </div>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
