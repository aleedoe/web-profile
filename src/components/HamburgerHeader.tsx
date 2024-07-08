import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function HamburgerHeader() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <DropdownMenuItem>
                <Link rel="stylesheet" href="" >About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link rel="stylesheet" href="" >Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link rel="stylesheet" href="" >Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link rel="stylesheet" href="" >Experiences</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link rel="stylesheet" href="" >Testimonials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link rel="stylesheet" href="" >Contact</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
