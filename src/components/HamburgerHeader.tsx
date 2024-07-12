import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";


export default function HamburgerHeader() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"><RxHamburgerMenu /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <DropdownMenuItem>
                    <Link href="#about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#skill">Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#project">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#experience">Experiences</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
