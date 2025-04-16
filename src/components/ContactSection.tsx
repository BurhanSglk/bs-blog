const ContactSection = () => {
    return (
        <section data-aos="fade-down" id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-8">İletişim</h2>
            <form className="max-w-xl mx-auto space-y-4">
                <input
                    type="text"
                    placeholder="Adınız"
                    className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                />

                <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                />
                <textarea
                    placeholder="Mesajınız"
                    rows={5}
                    className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition"
                >
                    Gönder
                </button>
            </form>
        </section>
    )
}

export default ContactSection