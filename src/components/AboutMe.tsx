import { User, Code, BookOpen } from 'lucide-react'

import BurhanJpg from '../images/burhan.jpg'
const AboutMe = () => {
    return (
        <section data-aos="fade-down" id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10">👨‍💻 Hakkımda</h2>

            <div className="flex flex-col items-center gap-6">
                <img
                    src={BurhanJpg}
                    alt="Burhan Sağlık"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
                />

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Merhaba! Ben <span className="font-semibold text-blue-600 dark:text-blue-400">Burhan</span>, React.js ve modern web teknolojileriyle ilgilenen tutkulu bir frontend geliştiricisiyim. Kullanıcı deneyimi, performans ve sade tasarımlar benim için ön planda.
                    <br />
                    🎯 Sürekli öğrenmeye ve öğrendiklerimi paylaşmaya bayılırım.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    <div className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-4 flex flex-col items-center">
                        <User className="text-blue-500" size={28} />
                        <h3 className="mt-2 font-semibold">Frontend Geliştirici</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">React.js, TypeScript, Tailwind</p>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-4 flex flex-col items-center">
                        <Code className="text-green-500" size={28} />
                        <h3 className="mt-2 font-semibold">Fullstack Yolculuğu</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Node.js ve modern backend teknolojileri</p>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-4 flex flex-col items-center">
                        <BookOpen className="text-purple-500" size={28} />
                        <h3 className="mt-2 font-semibold">Blog Yazarı</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Bilgiyi paylaşmak, öğrenmenin en güzel yolu</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
