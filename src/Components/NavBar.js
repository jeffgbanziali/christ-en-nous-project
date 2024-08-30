import React from 'react';
import { FiSearch } from "react-icons/fi";
import image from './image.gif';
import './NavBar.css';  // Assurez-vous que ce fichier CSS est importé

const Navbar = () => {
    return (
        <>
            <div className='z-10 flex flex-col items-center justify-center xl:h-[120px] h-[90px] shadow-lg w-full'>
                <div className='bg-blue-900 xl:h-[50%] h-full w-full justify-center flex items-center p-2'>
                    <div className='flex items-center w-full lg:w-1/4 p-2'>
                        <img src={image} alt="logo" className="h-8 w-auto" />
                    </div>
                    <div className='flex items-center w-1/2 justify-center'>
                        <div className='h-8 w-full max-w-full bg-gray-100 rounded-xl flex items-center'>
                            <FiSearch className='h-4 w-4 ml-2 text-gray-500' />
                            <input type="text" placeholder='Rechercher une ressource' className='h-full w-full bg-gray-100 rounded-full focus:outline-none ml-2' />
                        </div>
                    </div>
                    <div className='flex items-center w-full lg:w-1/3 justify-end'>
                        <button
                            className="xl:w-24 w-24 xl:flex hidden item-center justify-center bg-blue-500 text-white text-[8px] py-2 rounded-lg hover:bg-blue-600">
                            SE CONNECTER
                        </button>
                    </div>
                </div>
                <div className={`xl:h-[50%] w-[1000px] xl:flex items-center justify-center flex`}>
                    <ul className='navbar-list xl:flex hidden justify-around w-full p-4'>
                        <li><button>Accueil</button></li>
                        <li><button>Qui sommes-nous ?</button></li>
                        <li><button>Vision</button></li>
                        <li><button>Markos</button></li>
                        <li><button>Christ en nous Academy</button></li>
                        <li><button>Missions</button></li>
                        <li><button>Don</button></li>
                        <li><button>E-Shop</button></li>
                        <li><button>Les églises Christ en nous</button></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
