"use client"

export default function ConfirmationPage() {
    return (
        <div className="flex flex-col items-center justify-center my-40 gap-2.5">
            <div className="flex items-center justify-center size-[49px] border-3 border-b-b-black p-0.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                    <path d="M18 1.5L7 13.5L2 8.04545" stroke="#1D1D1D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <h4 className="font-archivo font-semibold text-lg md:text-xl xl:text-2xl">
                    Thanks for your order!
                </h4>
                <p className="font-archivo text-b-dark-gray text-xs md:text-sm">
                    The order confirmation has been sent to johndoe@gmail.com
                </p>
            </div>
        </div>
    )
}