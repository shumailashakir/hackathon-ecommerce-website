"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button>
            <AiOutlineMenu />  
            </Button>
          </SheetTrigger>
          <SheetHeader>
          <SheetTitle>
          
          </SheetTitle>
          </SheetHeader>
          <SheetContent side={side}>
            {/* Links for desktop */}
          <div className="grid grid-cols-1 gap-y-6">
            <Link href="/" className="text-sm font-bold text-[#252B42]">Home</Link>
            <Link href="/shop" className="text-sm font-bold text-[#252B42] flex items-center">Shop</Link>
            <Link href="/about" className="text-sm font-bold text-[#252B42]">About</Link>
            <Link href="/blog" className="text-sm font-bold text-[#252B42]">Blog</Link>
            <Link href="/contact" className="text-sm font-bold text-[#252B42]">Contact</Link>
            <Link href="/pages" className="text-sm font-bold text-[#252B42]">Pages</Link>
            
          </div>
           
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
