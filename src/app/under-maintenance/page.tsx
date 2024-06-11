import Image from "next/image";

export default function UnderMaintenance() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 pt-14">
            <Image src='/maintenance.svg' className="block m-auto" width={500} height={500} alt="icon" />
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Under Maintenance</h1>
            <p className="font-serif font-semibold">We're currently performing scheduled maintenance. Please check back soon.</p>
        </div>
    )
}