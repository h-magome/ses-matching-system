import React from 'react'
import Link from 'next/link'
import { Leaf } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf size={32} />
          <span className="text-xl font-bold">SESマッチャー</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/engineers" className="hover:text-green-200">エンジニア一覧</Link></li>
            <li><Link href="/projects" className="hover:text-green-200">案件一覧</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header