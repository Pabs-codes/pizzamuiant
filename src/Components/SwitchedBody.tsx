import Bodyy from "./Body";
import BodyTwo from "./BodyTwo";

interface SwitchedBodyProps {
    index: number;
}

export default function SwitchedBody({ index }: SwitchedBodyProps) {
    switch(index){
        case 0: return <BodyTwo/>
        case 1: return <BodyTwo/>
        case 2: return <Bodyy/>
    }
}