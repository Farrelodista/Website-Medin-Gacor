import { FloatUp } from './animations/float-up';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <FloatUp>
          {/* GRID MENJADI 3 KOLOM AGAR RATA */}
          <div className="grid md:grid-cols-3 gap-12 mb-10 text-center md:text-left">

            {/* Brand */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="relative w-12 h-12 bg-background rounded-lg p-1">
                  <Image
                    src="/logo hmti.png"
                    alt="Logo HMTI UNS"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">HMTI UNS</div>
                  <div className="text-xs text-background/70">Teknik Industri</div>
                </div>
              </div>

              <p className="text-background/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Himpunan Mahasiswa Teknik Industri Universitas Sebelas Maret
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4 justify-center md:justify-start">
                <a className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Instagram className="w-4 h-4" />
                </a>
                <a className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Facebook className="w-4 h-4" />
                </a>
                <a className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Twitter className="w-4 h-4" />
                </a>
                <a className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Menu Cepat</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><Link href="/#home" className="hover:text-background transition-colors hover:translate-x-1 inline-block">Beranda</Link></li>
                <li><Link href="/#about" className="hover:text-background transition-colors hover:translate-x-1 inline-block">Tentang Kami</Link></li>
                <li><Link href="/organisasi" className="hover:text-background transition-colors hover:translate-x-1 inline-block">Struktur Organisasi</Link></li>
                <li><Link href="/proker" className="hover:text-background transition-colors hover:translate-x-1 inline-block">Program Kerja</Link></li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h4 className="font-bold mb-4">Sosial Media</h4>
              <ul className="space-y-3 text-sm text-background/70">
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <FaInstagram className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>@hmti_uns</span>
                </li>
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <FaYoutube className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>HMTI UNS</span>
                </li>
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <FaTiktok className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>@hmti_uns</span>
                </li>
              </ul>
            </div>

          </div>
        </FloatUp>

        {/* Divider */}
        <FloatUp delay={0.2}>
          <div className="border-t border-background/20 pt-8 text-sm text-background/70 text-center">
            <p>&copy; {currentYear} Himpunan Mahasiswa Teknik Industri UNS. All rights reserved.</p>
          </div>
        </FloatUp>

      </div>
    </footer>
  );
}