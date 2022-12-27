import { mergeStyleSets } from "@fluentui/merge-styles";
import { white,darkBrown } from "../utils/Colors";

export const styles = mergeStyleSets({
    container: {
        backgroundColor:white,
        borderRadius:"20px",
        width:"50%",
        margin:"auto"
    },
    title:{
        color:darkBrown,
        fontFamily:"DM Sans, sans-serif",
        fontStyle:'normal',
        fontWeight:700,
        fontSize:"32px",
        lineHeight:"42px",
        padding:"0px 150px 0px 20px", 
        width:'100%',
    }
})