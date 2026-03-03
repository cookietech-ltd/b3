import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/5 font-body sharp">
            <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
                <div className="font-heading font-thin text-2xl md:text-3xl tracking-tight opacity-70">
                    Structure creates <span className="text-white font-normal">leverage</span>. <br />
                    Leverage creates <span className="text-white font-normal">optionality</span>. <br />
                    Optionality creates <span className="text-white font-normal">value</span>.
                </div>

                <div className="flex flex-col md:items-end gap-4 text-sm text-gray-500">
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                    <p>© {new Date().getFullYear()} B³ Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
