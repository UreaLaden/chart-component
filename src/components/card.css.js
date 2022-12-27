import { mergeStyleSets } from "@fluentui/merge-styles";
import { white,darkBrown } from "../utils/Colors";

export const styles = mergeStyleSets({
    cardContainer: {
        backgroundColor:white,
        borderRadius:"20px",
        width:"50vw",
        marginTop:"20px",
    },
    title:{
        color:darkBrown,
        fontFamily:"DM Sans, sans-serif",
        fontStyle:'normal',
        fontWeight:700,
        fontSize:"3vw",
        lineHeight:"12vw",
        padding:"0px 150px 0px 20px", 
        width:'100%',
    }
})