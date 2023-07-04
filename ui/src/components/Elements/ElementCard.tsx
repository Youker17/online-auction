


interface ElementCardProps {
    image: string;
    title: string;
    description: string;
    live:boolean; 
    startDate:Date;
    endDate:Date;
    anouncementDate:Date;
}


export default function ElementCard() {
    return (
        <div>
            <h1>
                ElementCard
            </h1>
        </div>
    )
}