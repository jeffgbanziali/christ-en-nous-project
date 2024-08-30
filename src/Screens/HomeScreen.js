// src/Screen/HomeScreen.js
import React from 'react';
import Navbar from '../Components/NavBar';
import { useSpring, animated } from '@react-spring/web';
import logo from '../assets/logo.gif';
import banner from '../assets/banner.jpeg';
import accueil from '../assets/accueil.jpeg';
import exterior from '../assets/exterior.jpeg';
import sanctuary from '../assets/sanctuary.jpeg';
import altar from '../assets/altar.jpeg';
import pews from '../assets/pews.jpeg';
import stainedGlass from '../assets/stainedGlass.jpeg';
import library from '../assets/library.jpeg';
import prayerSpace from '../assets/prayerSpace.jpeg';
import service from '../assets/service.jpeg';
import specialEvent from '../assets/specialEvent.jpeg';
import communityActivity from '../assets/communityActivity.jpeg';
import childrenMinistry from '../assets/childrenMinistry.jpeg';
import teensMinistry from '../assets/teensMinistry.jpeg';
import adultsMinistry from '../assets/adultsMinistry.jpeg';
import welcomeMinistry from '../assets/welcomeMinistry.jpeg';
import contact from '../assets/contact.jpeg';
import donation from '../assets/donation.jpeg';
import testimonial from '../assets/testimonial.jpeg';

const HomeScreen = () => {
    const headerSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
    const sectionSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, delay: 500 });
    const imageSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, delay: 1000 });

    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-start w-full h-full pt-6'>
                <div className="font-sans ">
                    {/* Header */}
                    <header className="bg-white shadow-md">
                        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                            <animated.img src={logo} alt="Logo" className="h-16" style={headerSpring} />
                        </div>
                    </header>

                    {/* Banner */}
                    <section className="relative">
                        <img src={banner} alt="Banner" className="w-full h-72 object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-white text-4xl font-bold text-center">Bienvenue à l'Église [Nom de l'Église]</h1>
                        </div>
                    </section>

                    {/* Accueil */}
                    <section className="py-8">
                        <animated.div className="container mx-auto px-4" style={sectionSpring}>
                            <h2 className="text-3xl font-bold mb-6">Bienvenue à Notre Église</h2>
                            <p className="mb-6">Nous sommes ravis de vous accueillir sur notre site web. Notre église est un lieu de rassemblement et de foi où nous croyons en la puissance de la communauté et en l'amour divin. Explorez notre site pour en savoir plus sur nos services, nos activités et nos différents ministères.</p>
                            <animated.img src={accueil} alt="Accueil" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                        </animated.div>
                    </section>

                    {/* Notre Église */}
                    <section className="bg-gray-200 py-8">
                        <animated.div className="container mx-auto px-4" style={sectionSpring}>
                            <h2 className="text-3xl font-bold mb-6">Découvrez Notre Église</h2>
                            <p className="mb-6">Notre église est un espace inspirant où chaque coin reflète la beauté et la sérénité. Découvrez notre extérieur majestueux, notre sanctuaire sacré, l'autel central, les bancs confortables et les magnifiques vitraux qui ajoutent une touche de couleur et de lumière. Notre bibliothèque et nos espaces de prière offrent des moments de calme et de réflexion.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <animated.img src={exterior} alt="Extérieur" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={sanctuary} alt="Sanctuaire" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={altar} alt="Autel" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={pews} alt="Bancs" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={stainedGlass} alt="Vitraux" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={library} alt="Bibliothèque" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={prayerSpace} alt="Espaces de Prière" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                            </div>
                        </animated.div>
                    </section>

                    {/* Services et Événements */}
                    <section className="py-8">
                        <animated.div className="container mx-auto px-4" style={sectionSpring}>
                            <h2 className="text-3xl font-bold mb-6">Services et Événements</h2>
                            <p className="mb-6">Nous proposons une gamme de services spirituels et d'événements pour tous les âges et tous les besoins. Assistez à nos services réguliers, participez à des événements spéciaux et rejoignez nos activités communautaires pour renforcer votre foi et votre engagement.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <animated.img src={service} alt="Service" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={specialEvent} alt="Événements Spéciaux" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={communityActivity} alt="Activités Communautaires" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                            </div>
                        </animated.div>
                    </section>

                    {/* Ministères */}
                    <section className="bg-gray-200 py-8">
                        <animated.div className="container mx-auto px-4" style={sectionSpring}>
                            <h2 className="text-3xl font-bold mb-6">Nos Ministères</h2>
                            <p className="mb-6">Nous avons plusieurs ministères dédiés à servir différents groupes de notre communauté. Qu'il s'agisse de nos jeunes, des enfants, ou des adultes, chaque ministère a pour mission de répondre aux besoins spirituels et sociaux de ses membres.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <animated.img src={childrenMinistry} alt="Ministère des Enfants" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={teensMinistry} alt="Ministère des Ados" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={adultsMinistry} alt="Ministère des Adultes" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={welcomeMinistry} alt="Ministère de l’Accueil" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                            </div>
                        </animated.div>
                    </section>

                    {/* Contact */}
                    <section className="py-8">
                        <animated.div className="container mx-auto px-4" style={sectionSpring}>
                            <h2 className="text-3xl font-bold mb-6">Contactez-Nous</h2>
                            <p className="mb-6">Nous serions ravis de répondre à vos questions ou préoccupations. N'hésitez pas à nous contacter pour toute information supplémentaire concernant nos services, événements, ou autres demandes.</p>
                            <animated.img src={contact} alt="Contact" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                        </animated.div>
                    </section>

                    {/* Faire un Don */}
                    <section className="bg-gray-200 py-8">
                        <animated.div className="container mx-auto px-4" style={sectionSpring}>
                            <h2 className="text-3xl font-bold mb-6">Faire un Don</h2>
                            <p className="mb-6">Votre soutien financier est essentiel pour nous aider à poursuivre notre mission et à offrir des services de qualité. Découvrez comment vous pouvez contribuer et voir l'impact de votre don à travers les témoignages de nos donateurs.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <animated.img src={donation} alt="Faire un Don" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                                <animated.img src={testimonial} alt="Témoignages de Donateurs" className="w-full h-64 object-cover rounded-lg shadow-md" style={imageSpring} />
                            </div>
                        </animated.div>
                    </section>

                    {/* Footer */}
                    <footer className="bg-white py-6">
                        <div className="container mx-auto px-4 text-center">
                            <p className="text-gray-600">&copy; 2024 Église [Nom de l'Église]. Tous droits réservés.</p>
                            <p className="text-gray-600">Adresse | Téléphone | Email</p>
                            <div className="flex justify-center space-x-4 mt-4">
                                {/* Liens vers les réseaux sociaux */}
                                <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
