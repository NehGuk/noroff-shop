import { Star, StarHalf } from "phosphor-react";

export default function showStars(numberOfStars) {
    if (numberOfStars === 0 ) {
        return <><Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /></>
    } else if (numberOfStars <= 0.9) {
        return <><StarHalf size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /></>
    } else if (numberOfStars === 1) {
        return <><Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /></>
    } else if (numberOfStars <= 1.9) {
        return <><Star size={24} color="#941651" weight="fill"/> <StarHalf size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /></>
    } else if (numberOfStars === 2) {
        return <><Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /></>        
    } else if (numberOfStars <= 2.9) {
        return <><Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill"/> <StarHalf size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /></>        
    } else if (numberOfStars === 3) {
        return <><Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /></>        
    } else if (numberOfStars <= 3.9) {
        return <><Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill"/> <StarHalf size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" /></>        
    } else if (numberOfStars === 4) {
        return <><Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" /></>        
    } else if (numberOfStars <= 4.9) {
        return <><Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill" /> <StarHalf size={24} color="#941651" weight="fill" /></>
    } else if (numberOfStars === 5) {
        return <><Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill"/> <Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill" /></>
    }
}

/* switch(numberOfStars) {
        case 0:
            console.log("Zero stars");
            return <><Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /></>
            break;
        case 0.5:
            console.log("One star only?");
            return <><StarHalf size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /></>
            break;
        case 1:
            console.log("One star only?");
            break;
        case 1.5:
            console.log("One star and a HALF only?");
            break;
        case 2:
            console.log("One star and a HALF only?");
            break;
        case 3:
            console.log("Three staaaars");
            break;
        case 4.2:
            console.log("LESS THAN 4.5 STARRRSS");
            return <><Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill" /> <StarHalf size={24} color="#941651" weight="fill" /></>
            break;
        case 4.5:
            console.log("Much betteeer");
            return <><Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill" /> <Star size={24} color="#941651" weight="fill" /> <StarHalf size={24} color="#941651" weight="fill" /></>
            break;
        case 5:
            console.log("FIVEEE staaaars");
            return <> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> <Star size={24} color="#941651" /> </>
            break;
    
    } */