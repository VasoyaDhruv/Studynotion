import { useRef, useState } from "react"
import useOnClickOutside from "../../hooks/useOnClickOutside"
import { NavbarLinks } from "../../assets/data/navbar-links"
import { Link } from "react-router-dom"
import { MdMenuOpen } from "react-icons/md";

export default function ProfileDropdown() {


    
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <button className="relative" onClick={() => setOpen(true)}>
        <button className='text-white text-4xl block lg:hidden md:hidden hover:text-blue-50 transition-all duration-100'
           >
                                                     <MdMenuOpen/>
                                            </button>
      
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          ref={ref}
        >
   
             <ul>
                {
                NavbarLinks.map((link,index) => (
                    <Link to={link?.path} onClick={() => setOpen(false)} className="text-white">
                        <p>
                            {link.title}
                        </p>
                    </Link>
                ))
                }
            </ul>   
         
        </div>
      )}

    </button>
  )
}