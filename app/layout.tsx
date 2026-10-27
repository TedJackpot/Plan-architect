import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'MON ARCHITECT — Imaginez votre maison',description:'Concevez un avant-projet résidentiel : terrain, plans 2D, maquette 3D, matériaux, budget et guide de construction.',manifest:'/manifest.webmanifest',icons:{icon:'/icon.svg',apple:'/icon-192.png'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>;}
