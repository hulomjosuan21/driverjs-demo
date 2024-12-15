'use client'
import {Button} from "@/components/ui/button";
import useDriver from "@/hooks/use-driver";

export default function Home(){
    const { start } = useDriver();

    const handleStartTour = () => {
        const steps = [
            {
                element: '#shape1',
                popover: {
                    title: 'Shape 1',
                    description: 'Lorem ipsum dolor sit amet.',
                },
            },
            {
                element: '#shape2',
                popover: {
                    title: 'Shape 2',
                    description: 'Lorem ipsum dolor sit amet.',
                },
            },
            {
                element: '#shape3',
                popover: {
                    title: 'Shape 3',
                    description: 'Lorem ipsum dolor sit amet.',
                },
            },
        ]

        start(steps);
    }

    return (
        <main className={'h-screen flex flex-col items-center justify-center gap-12'}>

            <span className={'text-6xl font-semibold'}>Custom Driver.js Hook Demo</span>

            <div className={'flex gap-4'}>
                <div className={'w-52 h-52 grid place-items-center border rounded-full shadow-md bg-violet-300 font-semibold'} id='shape1'>Shape 1</div>

                <div className={'w-52 h-52 grid place-items-center border rounded-2xl shadow-md bg-orange-400 font-semibold'} id='shape2'>Shape 2</div>

                <div className={'w-96 h-52 grid place-items-center border rounded-full shadow-md bg-blue-300 font-semibold'} id='shape3'>Shape 3</div>
            </div>

            <Button onClick={handleStartTour}>Start</Button>
        </main>
    )
}