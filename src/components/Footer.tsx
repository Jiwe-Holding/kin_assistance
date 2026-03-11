import Link from 'next/link';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Services', href: '#services' },
      { name: 'Abonnements', href: '#pricing' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        KinAssistance Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Logo & Intro */}
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Kin<span className="text-secondary">Assistance</span>
            </Link>
            <p className="text-sm leading-6 text-slate-400 max-w-xs">
              Votre assistant personnel urbain. Nous simplifions votre quotidien à Kinshasa en gérant vos courses et démarches.
            </p>
          </div>
          
          {/* Links & Info */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            
            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Navigation</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contactez-nous</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <p className="text-sm leading-6 text-slate-400">
                      <span className="text-white font-medium">Adresse :</span> Kinshasa, RDC
                    </p>
                  </li>
                  <li>
                    <a href="mailto:contact@kinassistance.cd" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">
                      <span className="text-white font-medium">Email :</span> contact@kinassistance.cd
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/243000000000" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-slate-400 hover:text-green-400 transition-colors">
                      <span className="text-white font-medium">WhatsApp :</span> +243 00 000 0000
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-500 text-center">
            &copy; {new Date().getFullYear()} KinAssistance. Tous droits réservés.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
