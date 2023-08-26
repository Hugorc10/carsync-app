'use client'

import {
  Home as HomeIcon,
  Search,
  Tag,
  Box,
  BarChart,
  Settings,
  Bookmark,
  BadgePercent,
  User2,
  MessageCircle,
} from 'lucide-react'
import React, { useRef } from 'react'

export const SideBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDivClick = () => {
    inputRef.current?.focus()
  }

  return (
    <aside className="flex flex-col mt-10 w-72 bg-white p-6">
      <nav className="space-y-5">
        <div
          className="flex items-center gap-2 text-sm font-semibold border rounded w-44 p-2 bg-[#f5f7f9]"
          onClick={handleDivClick}
        >
          <Search />
          <input
            type="text"
            placeholder="Buscar"
            ref={inputRef}
            className="bg-[#f5f7f9] w-20 h-8 focus:outline-none"
          />
        </div>
        <a
          href="/dashboard"
          className="flex items-center gap-3 text-sm font-semibold hover:text-[#363535]"
        >
          <HomeIcon />
          Dashboard
        </a>
        <a
          href="/sales"
          className="flex items-center gap-3 text-sm font-semibold hover:text-[#363535]"
        >
          <Tag />
          Vendas
        </a>
        <a
          href="/promotions"
          className="flex items-center gap-3 text-sm font-semibold hover:text-[#363535]"
        >
          <BadgePercent />
          Promoções
        </a>
        <a
          href="/products"
          className="flex items-center gap-3 text-sm font-semibold hover:text-[#363535]"
        >
          <Box />
          Produtos
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold hover:text-[#363535]"
        >
          <BarChart />
          Métricas
        </a>
        <a
          href="/clients"
          className="flex items-center gap-3 text-sm font-semibold hover:text-[#363535]"
        >
          <User2 />
          Clientes
        </a>
      </nav>

      <nav className="mt-16 pt-6 border-t space-y-5 flex flex-col gap-2">
        <a
          href="/chat"
          className="flex items-center gap-3 text-sm font-semibold hover:text-[#363535]"
        >
          <MessageCircle />
          Chat
        </a>
        <a
          href="/settings"
          className="flex items-center gap-3 text-sm font-semibold hover:text-[#363535]"
        >
          <Settings />
          Configurações
        </a>
        <a
          href="/status"
          className="flex items-center gap-3 text-sm font-semibold hover:text-[#363535]"
        >
          <Bookmark />
          Status
        </a>
      </nav>
    </aside>
  )
}
