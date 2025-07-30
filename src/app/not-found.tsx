"use client"

import { Button } from "@/components/atoms/Button"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const router = useRouter();
    const handleGoToHome = () => {
        router.push("/")
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6 mt-40 md:gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="font-archivo font-bold text-6xl text-b-black lg:text-8xl">
                    Oops!
                </h1>
                <h3 className="font-archivo font-semibold text-xl text-b-black md:text-2xl">
                    Page Not Found
                </h3>
                <p className="font-archivo text-sm text-center text-b-dark-gray md:text-base">
                    Sorry, we couldn't find the page you're looking for.
                </p>
            </div>
            <Button 
                label="Go back home" 
                variant="filled" 
                size="small"
                color="black"
                onClick={handleGoToHome} 
                className="px-8 py-7 md:py-8 md:px-12 md:text-xl"
            />
        </div>
    )
}