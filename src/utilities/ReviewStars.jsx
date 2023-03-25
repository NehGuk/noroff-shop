import { Star, StarHalf } from "phosphor-react";

export default function showStars(numberOfStars, size) {
    if (numberOfStars === 0 ) {
        return <><Star size={size} color="#941651" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /></>
    } else if (numberOfStars <= 0.9) {
        return <><StarHalf size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /></>
    } else if (numberOfStars === 1) {
        return <><Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /></>
    } else if (numberOfStars <= 1.9) {
        return <><Star size={size} color="#941651" weight="fill"/> <StarHalf size={size} color="#941651" weight="fill" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /></>
    } else if (numberOfStars === 2) {
        return <><Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /></>        
    } else if (numberOfStars <= 2.9) {
        return <><Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill"/> <StarHalf size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /></>        
    } else if (numberOfStars === 3) {
        return <><Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" /> <Star size={size} color="#941651" /></>        
    } else if (numberOfStars <= 3.9) {
        return <><Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill"/> <StarHalf size={size} color="#941651" weight="fill" /> <Star size={size} color="#941651" /></>        
    } else if (numberOfStars === 4) {
        return <><Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill" /> <Star size={size} color="#941651" /></>        
    } else if (numberOfStars <= 4.9) {
        return <><Star size={size} color="#941651" weight="fill" /> <Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill" /> <Star size={size} color="#941651" weight="fill" /> <StarHalf size={size} color="#941651" weight="fill" /></>
    } else if (numberOfStars === 5) {
        return <><Star size={size} color="#941651" weight="fill" /> <Star size={size} color="#941651" weight="fill"/> <Star size={size} color="#941651" weight="fill" /> <Star size={size} color="#941651" weight="fill" /> <Star size={size} color="#941651" weight="fill" /></>
    }
}
